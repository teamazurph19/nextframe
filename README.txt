NEXTFRAME Refactored Static Website

Structure:
- index.html
- about.html
- portfolio.html
- blog.html
- gallery.html
- contact.html
- startwebsite.html
- css/styles.css
- script/tailwind-config.js
- script/script.js

Notes:
- Tailwind is still loaded via CDN to preserve the original design system and utility classes.
- Repeated Tailwind configuration has been moved to script/tailwind-config.js.
- Repeated custom CSS has been consolidated into css/styles.css.
- Repeated JavaScript behavior has been consolidated into script/script.js.
- Page navigation uses local .html links for simple static hosting.
