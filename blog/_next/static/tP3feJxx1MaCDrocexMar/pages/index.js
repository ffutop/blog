(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"6Iex":function(e,t,n){"use strict";e.exports={genIndexUrl:function(e){return"/page/"+(e+1)}}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("nOHt"),u=n("0o6o"),c=(n("/8IW"),function(e){return r.a.createElement("div",{className:"component-post-digest"},r.a.createElement("h1",{className:"title"},r.a.createElement("a",{href:"/blog"+e.url},e.title)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.digest}}))}),i=function(e){var t=e.currentPage,n=e.pages,a=e.genPagedUrl;return r.a.createElement("div",null,0!==t&&r.a.createElement("a",{href:"/blog"+a(t-1)},"上一页"),t!==n-1&&r.a.createElement("a",{href:"/blog"+a(t+1)},"下一页"))},o=n("6Iex");t.default=Object(l.withRouter)(function(e){var t=e.router.query,n=t.mdDatasParts,a=(t.items,t.pages),l=t.currentPage;return r.a.createElement(u.a,null,n.map(function(e){return r.a.createElement("div",null,r.a.createElement(c,{key:e.url,title:e.title,digest:e.digest,url:e.url}))}),r.a.createElement(i,{currentPage:l,pages:a,genPagedUrl:o.genIndexUrl}))})},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1","ad9d"]]]);