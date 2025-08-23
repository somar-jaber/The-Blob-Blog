const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
    // 11ty takes .html , .md and other files automatically when run but not the css and the media files, so we need to tell it to take them.
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets");
    // I have subfolders in pages, 11th wasn't including them , so i added this to fix the problem
    eleventyConfig.addPassthroughCopy("./src/pages/");

    // To fix how 11ty displays time
    eleventyConfig.addFilter("postDate" , (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Markdown filter to render markdown inside html
    const md = new markdownIt({
        html: true
    });
    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
    });

    // applying highlighting 
    eleventyConfig.addPlugin(syntaxHighlight);  

    // For fixing the absolute url problem in github pages, this is a filter. names "url"
    pathPrefix: process.env.ELEVENTY_ENV === "development" ? "" : "/The-Blob-Blog/"

    // Setting up what is the input and output directories 
    return {
        // configure 11ty to use Nunjucks as the template enging insted of the default one : Liquid 
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "_site"
        },
    };
}


