module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("categorias", function (collectionApi) {
    return ["gramatica", "pronuncia", "vocabulario"];
  });

  return {
    dir: {
      input: "source",
      output: "public",
    },
  };
};
