import{ba as o,c}from"./chunk-FUWO5VGL.js";import{h as l}from"./chunk-BL3FZZIZ.js";var i=l(c(),1);var x=(s,t)=>{let r=s.append("rect");if(r.attr("x",t.x),r.attr("y",t.y),r.attr("fill",t.fill),r.attr("stroke",t.stroke),r.attr("width",t.width),r.attr("height",t.height),t.name&&r.attr("name",t.name),t.rx!==void 0&&r.attr("rx",t.rx),t.ry!==void 0&&r.attr("ry",t.ry),t.attrs!==void 0)for(let e in t.attrs)r.attr(e,t.attrs[e]);return t.class!==void 0&&r.attr("class",t.class),r},h=(s,t)=>{let r={x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"};x(s,r).lower()},y=(s,t)=>{let r=t.text.replace(o," "),e=s.append("text");e.attr("x",t.x),e.attr("y",t.y),e.attr("class","legend"),e.style("text-anchor",t.anchor),t.class!==void 0&&e.attr("class",t.class);let n=e.append("tspan");return n.attr("x",t.x+t.textMargin*2),n.text(r),e},m=(s,t,r,e)=>{let n=s.append("image");n.attr("x",t),n.attr("y",r);let a=(0,i.sanitizeUrl)(e);n.attr("xlink:href",a)},p=(s,t,r,e)=>{let n=s.append("use");n.attr("x",t),n.attr("y",r);let a=(0,i.sanitizeUrl)(e);n.attr("xlink:href",`#${a}`)},g=()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),f=()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0});export{x as a,h as b,y as c,m as d,p as e,g as f,f as g};
