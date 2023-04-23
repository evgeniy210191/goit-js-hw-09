const[t,e,n]=["body","[data-start]","[data-stop]"].map((t=>document.querySelector(t)));let a=null;e.addEventListener("click",(function(e){a||(a=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),n.addEventListener("click",(function(t){clearInterval(a),a=null}));
//# sourceMappingURL=01-color-switcher.d9644d25.js.map
