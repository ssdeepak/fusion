import"./chunk-BL3FZZIZ.js";var v="ion-focused",L="ion-focusable",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],h=n=>{let i=[],r=!0,e=n?n.shadowRoot:document,E=n||document.body,o=t=>{i.forEach(s=>s.classList.remove(v)),t.forEach(s=>s.classList.add(v)),i=t},c=()=>{r=!1,o([])},d=t=>{r=m.includes(t.key),r||o([])},u=t=>{if(r&&t.composedPath!==void 0){let s=t.composedPath().filter(f=>f.classList?f.classList.contains(L):!1);o(s)}},a=()=>{e.activeElement===E&&o([])};return e.addEventListener("keydown",d),e.addEventListener("focusin",u),e.addEventListener("focusout",a),e.addEventListener("touchstart",c,{passive:!0}),e.addEventListener("mousedown",c),{destroy:()=>{e.removeEventListener("keydown",d),e.removeEventListener("focusin",u),e.removeEventListener("focusout",a),e.removeEventListener("touchstart",c),e.removeEventListener("mousedown",c)},setFocus:o}};export{h as startFocusVisible};
