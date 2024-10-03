module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // You can return your Config object (optional).
  return {
    passthroughCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
