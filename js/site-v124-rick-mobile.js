(() => {
 const b=document.querySelector('.menu-button'), n=document.getElementById('mobile-nav');
 if(!b||!n)return;
 const close=()=>{b.setAttribute('aria-expanded','false');n.hidden=true;document.body.classList.remove('mobile-menu-open')};
 b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')==='true'; b.setAttribute('aria-expanded',String(!open)); n.hidden=open; document.body.classList.toggle('mobile-menu-open',!open)});
 n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 window.addEventListener('resize',()=>{if(innerWidth>=1250)close()});
})();
