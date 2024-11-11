---
title: PaperCut Search
thumbnail_image: /images/papercut-search-thumbnail.png
image: /images/papercut-search.png
short_text: >-
  A modern search interface using Algolia, for PaperCut, from a provided Figma
  design
technologies:
  - text: Hugo
    link: https://gohugo.io/
  - text: Algolia
    link: https://www.algolia.com/
  - text: Javascript
    link: https://www.javascript.com/
live_site: https://www.papercut.com/search
github:
wip: false
---
The brief for this project was to create a modern search interface for the PaperCut website using Algolia.

Opting for Algolia's custom API added complexity but provided a more flexible and powerful solution. I served as the lead developer throughout, managing each stage from index creation to the final search interface.

Key steps included:

1. Index Creation in Hugo: Developed a custom output format to generate the Algolia index.
2. Efficient Data Synchronization with Algolia: Streamlined updates by sending only changes (additions, updates, deletions) to improve performance.
3. Interface Development from Figma: Built an intuitive search interface following detailed design specifications.
4. Dynamic Search Results with JavaScript: Integrated Algolia’s API to dynamically populate search results.

{{< youtube id="c1FxsbxMPFo" title="HugoConf Algolia Demo video" >}}

&nbsp;