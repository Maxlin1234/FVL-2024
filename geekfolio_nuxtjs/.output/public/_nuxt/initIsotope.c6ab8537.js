const u=()=>{let i,a=document.querySelectorAll(".gallery"),c=document.querySelector(".filtering"),o=document.querySelectorAll(".filtering");if(a.length>=1&&a.forEach(l=>{i=new Isotope(l,{itemSelector:".items"})}),c){c.addEventListener("click",function(t){if(matchesSelector(t.target,"span")){var e=t.target.getAttribute("data-filter");e=e,i.arrange({filter:e})}});const l=t=>{t.addEventListener("click",e=>{matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))})};for(var r=0,n=o.length;r<n;r++){var s=o[r];l(s)}}};export{u as i};