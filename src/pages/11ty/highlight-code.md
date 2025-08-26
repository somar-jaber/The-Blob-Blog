---
layout : "base-layout.njk"
title: "Highlight code in 11th"
tags: ["ComputerScience"]
---

In 11ty, to get syntax highlighting for code blocks in your Markdown files, you can use an official Eleventy plugin called `@11ty/eleventy-plugin-syntaxhighlight`.

Here's how to set it up so you can specify the language for each code block (e.g., JavaScript, HTML, CSS) and have proper syntax highlighting:

### Step 1: Install the plugin

Run this command in your project directory:

```bash
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

### Step 2: Add the plugin to your `.eleventy.js` configuration file

```js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // other config options ...
};
```

### Step 3: Use fenced code blocks with language identifier in your Markdown files

Example Markdown:

    ```javascript
    // JavaScript code here
    console.log("Hello, 11ty!");
    ```

Or:

    ```html
    <p>Hello World</p>
    ```

The language tag after the opening three backticks enables the plugin to highlight the code accordingly.

### Step 4: Add CSS for the syntax highlighting styles

The plugin uses PrismJS under the hood, so you need to include a Prism CSS theme in your site, e.g., in your base layout:

```html
<link rel="stylesheet" href="/path-to-your-css/prism.css" />
```

You can download Prism themes from the PrismJS website or use your own styles.

***

### Summary:

- Install `@11ty/eleventy-plugin-syntaxhighlight`.
- Add it in `.eleventy.js`.
- Use fenced code blocks with the language name in Markdown.
- Include Prism CSS for styles in your site's head.

This will give you nicely highlighted code blocks for each specified language in your Markdown files with 11ty.

