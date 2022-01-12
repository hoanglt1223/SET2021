const imageController = require("../controller/image");

const imageRouter = {
  GET: {
    "/image": imageController.getImage,
  },
};

module.exports = imageRouter;
