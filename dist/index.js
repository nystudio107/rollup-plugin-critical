import*as n from"path";var m="_critical.min.css",h={inline:!1,extract:!1,width:1200,height:1200,penthouse:{blockJSRequests:!1}};function p(i,r){return{name:"critical",async writeBundle(o,f){let c=[];for(let t of Object.values(f))if(t.type==="asset"&&t.fileName.endsWith(".css")){let a=n.join(o.dir||"",t.fileName);c.push(a)}if(c.length)for(let t of i.criticalPages){let a=i.criticalBase,s=i.criticalUrl+t.uri,l=i.criticalConfig&&i.criticalConfig.inline==!0?t.template+".html":t.template+m,g=Object.assign({css:c},h,{base:a,src:s,target:l},i.criticalConfig),u=(await import("critical")).generate;console.log(`Generating critical CSS from ${s} to ${l}`),await u(g,e=>{e&&console.error(e),r&&r(e)})}}}}var C=p;export{C as default};
//# sourceMappingURL=index.js.map