
const box=document.getElementById('lightbox');
const img=document.getElementById('lightbox-img');
document.querySelectorAll('.clickable').forEach(i=>{
 i.onclick=()=>{img.src=i.src;box.style.display='flex';}
});
document.getElementById('close').onclick=()=>box.style.display='none';
box.onclick=e=>{if(e.target===box)box.style.display='none';};
document.addEventListener('keydown',e=>{if(e.key==='Escape')box.style.display='none';});
