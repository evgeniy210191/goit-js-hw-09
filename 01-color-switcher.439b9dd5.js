const[t,e,n]=["body","[data-start]","[data-stop]"].map((t=>document.querySelector(t)));let a=null;e.addEventListener("click",(function(e){a=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),n.addEventListener("click",(function(t){clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.439b9dd5.js.map
