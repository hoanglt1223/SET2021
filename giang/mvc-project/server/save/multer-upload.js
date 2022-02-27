const express = require("express");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

const UNIT = 1024;
// Limit 1 MB
const LIMIT_SIZE = 1 * UNIT * UNIT;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage, limits: { fileSize: LIMIT_SIZE } });

const app = express();
const port = 3003;

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client.html");
});

app.post("/upload", upload.single("formFile"), function (req, res, next) {
  const file = req.file;
  const resizeQuery = req.query.resize;
  const resizeValues = JSON.parse(resizeQuery);

  try {
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }

    if (Array.isArray(resizeValues) && resizeValues.length > 0) {
      sharp(file.path)
        .metadata()
        .then(({ width, height }) => {
          resizeValues.forEach((resize) => {
            const currentResizeScale = resize / 100;

            const scaledWidth = parseInt(width * currentResizeScale);
            const scaledHeight = parseInt(height * currentResizeScale);

            return sharp(file.path)
              .resize(scaledWidth, scaledHeight)
              .toFile("./uploads/" + `${resize}_` + file.filename);
          });
        });
    }

    res.send(file);
  } catch (error) {
    return next(error);
  }
});

app.post(
  "/upload-multiple",
  upload.array("formFileMultiple", 3),
  (req, res, next) => {
    const files = req.files;

    try {
      if (!files) {
        const error = new Error("Upload files again");
        error.httpStatusCode = 400;
        return next(error);
      }
    } catch (error) {
      return next(error);
    }

    res.send(files);
  }
);

app.get("/images/:imageName", (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads/${req.params.imageName}`));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
