(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(141),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(143),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var s=a(35);a.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(152),u=a.n(l),d=a(142),s=a(145),p=(a(144),function(e){var t=e.siteTitle;return i.a.createElement("nav",{class:"grid-container-navbar",id:"navbar"},i.a.createElement("div",{class:"grid-item",id:"grid-1"},i.a.createElement(s.a,{delay:1e3,from:{height:0,opacity:0,top:-50},to:{height:80,opacity:1,top:8}},function(e){var a=e.height,n=e.opacity,r=e.top;return i.a.createElement(d.Link,{to:"/"},i.a.createElement("div",{id:"nameLogo",style:{height:a,opacity:n}},i.a.createElement("h1",{class:"navLink",style:{margin:0,top:r}},t)))})),i.a.createElement("div",{class:"grid-item",id:"grid-2"}),i.a.createElement("div",{class:"grid-item",id:"grid-3"}),i.a.createElement("div",{class:"grid-item",id:"grid-4"},i.a.createElement(s.a,{delay:3e3,from:{height:0,opacity:0,top:-50},to:{height:80,opacity:1,top:8}},function(e){var t=e.height,a=e.opacity,n=e.top;return i.a.createElement(d.Link,{to:"/info"},i.a.createElement("div",{id:"info",style:{height:t,opacity:a}},i.a.createElement("h1",{class:"navLink",style:{margin:0,top:n}},"Info")))})),i.a.createElement("div",{class:"grid-item",id:"grid-5"},i.a.createElement(s.a,{delay:2e3,from:{height:0,opacity:0,top:-50},to:{height:80,opacity:1,top:8}},function(e){var t=e.height,a=e.opacity,n=e.top;return i.a.createElement(d.Link,{to:"/contact"},i.a.createElement("div",{id:"contact",style:{height:t,opacity:a}},i.a.createElement("h1",{class:"navLink",style:{margin:0,top:n}},"Contact")))})))}),m=function(){return i.a.createElement(s.a,{delay:1e3,from:{height:0,opacity:0,bottom:-50},to:{height:80,opacity:1,bottom:0}},function(e){var t=e.height,a=e.opacity,n=e.bottom;return i.a.createElement("footer",{id:"footer",style:{height:t,opacity:a,bottom:n}})})},h=(a(149),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"AJC Portfolio"},{name:"keywords",content:"alex, alexander, chacko, portfolio, web, design, development, seo"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{backgroundColor:"white",borderRadius:"6px",margin:"-10px 5% -10px 5%",maxWidth:"90%",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(m,null))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexander Chacko"}}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-js-d33736a14e612fe2c705.js.map