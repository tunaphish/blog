(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{8505:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#b88878","images":{"fallback":{"src":"/static/cd2800d791ece11bd1994bf45034f652/d24ee/profile-pic.jpg","srcSet":"/static/cd2800d791ece11bd1994bf45034f652/d24ee/profile-pic.jpg 50w,\\n/static/cd2800d791ece11bd1994bf45034f652/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/cd2800d791ece11bd1994bf45034f652/d4bf4/profile-pic.avif 50w,\\n/static/cd2800d791ece11bd1994bf45034f652/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/cd2800d791ece11bd1994bf45034f652/3faea/profile-pic.webp 50w,\\n/static/cd2800d791ece11bd1994bf45034f652/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),n=a(9285);t.Z=function(){var e,t=null===(e=(0,i.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8505)}),(null==t?void 0:t.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null))}},7198:function(e,t,a){"use strict";var l=a(7294),i=a(5444);t.Z=function(e){var t,a=e.location,n=e.title,r=e.children,c="/"===a.pathname;return t=c?l.createElement("h1",{className:"main-heading"},l.createElement(i.Link,{to:"/"},n)):l.createElement(i.Link,{className:"header-link-home",to:"/"},n),l.createElement("div",{className:"global-wrapper","data-is-root-path":c},l.createElement("header",{className:"global-header"},t),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},6179:function(e,t,a){"use strict";var l=a(7294),i=a(5414),n=a(5444),r=function(e){var t,a,r,c=e.description,o=e.lang,s=e.meta,d=e.title,m=(0,n.useStaticQuery)("2841359383").site,p=c||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(i.q,{htmlAttributes:{lang:o},title:d,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:p},{property:"og:title",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:p}].concat(s)})};r.defaultProps={lang:"en",meta:[],description:""},t.Z=r},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),i=a(5444),n=a(9535),r=a(7198),c=a(6179);t.default=function(e){var t,a=e.data,o=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-06ea359213a828c98791.js.map