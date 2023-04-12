const[t,e,n]=["body","[data-start]","[data-stop]"].map((t=>document.querySelector(t)));let a=null;e.addEventListener("click",(function(e){a||(a=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(a)}),1e3))})),n.addEventListener("click",(function(t){a=null,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.a3fcedb8.js.map
