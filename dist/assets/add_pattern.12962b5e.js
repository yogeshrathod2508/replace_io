import{a as p,r as g,P as m}from"./read_write.afa2b7fa.js";const i=document.querySelector("#read_patterns");function o(){return t.length==0?0:t[t.length-1].id+1}let t;async function f(){t=await g(),console.log(o())}f();i&&i.addEventListener("submit",e=>{var a,r;e.preventDefault();let l=e;const n=new FormData(l.target);let c=o(),d=(a=n.get("pattern"))==null?void 0:a.toString(),s=(r=n.get("replacement"))==null?void 0:r.toString();p(new m(c,d||"",s||"")),window.location.href=window.location.origin});
