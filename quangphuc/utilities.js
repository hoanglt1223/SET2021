const getRequestBody = async (req) => {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();
  return JSON.parse(data);
};

const getPathAndQuery = (req) => {
  let [path, query] = req.url.split("?");
  path = path.replace(/^\//g, "").split("/");
  if (query) {
    query = query.split("&").reduce(
      (previousValue, currentValue) => ({
        ...previousValue,
        [currentValue.split("=")[0]]: currentValue.split("=")[1],
      }),
      {}
    );
  } else {
    query = {};
  }
  return { path, query };
};

module.exports = {
  getRequestBody,
  getPathAndQuery,
};
