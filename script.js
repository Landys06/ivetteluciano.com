const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navigation");

if(menuToggle&&nav){
  menuToggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",String(open));
  });
  document.querySelectorAll(".navigation a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

/* Redes sociales oficiales de Ivette Luciano */
const socialLinks={
  Instagram:"https://www.instagram.com/pastoraivetteluciano",
  Facebook:"https://www.facebook.com/ivette.luciano.12",
  YouTube:"https://www.youtube.com/@ministerionuevopactord5874"
};

document.querySelectorAll(".social-mini a,.social-footer a").forEach(link=>{
  const label=(link.getAttribute("aria-label")||link.textContent||"").trim();
  let key=Object.keys(socialLinks).find(k=>label.toLowerCase().includes(k.toLowerCase()));
  if(!key && label.toLowerCase().includes("tiktok")) key="YouTube";
  if(key){
    link.href=socialLinks[key];
    link.target="_blank";
    link.rel="noopener noreferrer";
    link.setAttribute("aria-label",key+" de Ivette Luciano");
    link.textContent=key;
  }
});

/* En el encabezado, convertir el tercer icono (antes TikTok) en YouTube. */
const mini=document.querySelectorAll(".social-mini a");
if(mini.length>=3){
  mini[2].href=socialLinks.YouTube;
  mini[2].target="_blank";
  mini[2].rel="noopener noreferrer";
  mini[2].setAttribute("aria-label","YouTube del Ministerio Nuevo Pacto");
  mini[2].textContent="▶";
}

/* Nueva fotografía aprobada de Ivette Luciano. */
const ivettePhoto="assets/ivette-hero-final.jpg";
document.querySelectorAll(".author-photo,.full-bio-image").forEach(img=>{
  img.src=ivettePhoto;
});

const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();

const form=document.getElementById("newsletterForm");
const toast=document.getElementById("toast");
if(form&&toast){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    toast.classList.add("show");
    form.reset();
    setTimeout(()=>toast.classList.remove("show"),3500);
  });
}

const reveal=document.querySelectorAll(".book-card,.review-grid blockquote,.author-copy,.author-photo-wrap");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      observer.unobserve(entry.target);
    }
  }),{threshold:.12});
  reveal.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(18px)";
    el.style.transition="opacity .6s ease,transform .6s ease";
    observer.observe(el);
  });
}else{
  reveal.forEach(el=>{el.style.opacity="1";});
}
