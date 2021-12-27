const {imageController} = require("../controllers");
const Router = require("./router");

const ImageRouter = function () {
    this.GET = {
        '/image': imageController.getImage
    }
    Router.call(this);
}

const imageRouter = new ImageRouter();
module.exports = imageRouter;