const imageController = require("../controller/image.controller");

const imageRouter = {
  GET: {
    "/image": imageController.getImage,
  },
};

module.exports = imageRouter;
