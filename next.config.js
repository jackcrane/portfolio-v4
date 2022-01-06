const withLess = require("next-with-less");

module.exports = () => {
  return {
    images: {
      domains: ["unpkg.com"],
      path: "",
      loader: "imgix",
    },
  };
};
