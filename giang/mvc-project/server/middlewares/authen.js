function authenMiddlware(req, res) {
  return new Promise((resolve) => {
    console.log({ req: req.user });

    if (req.user) {
      resolve();
    } else {
      return res.end(JSON.stringify("Unauthorized user!"));
    }
  });
}

module.exports = authenMiddlware;
