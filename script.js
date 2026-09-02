const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navigation");
if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)})}
document.querySelectorAll(".navigation a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("newsletterForm");
const toast=document.getElementById("toast");
if(form){form.addEventListener("submit",e=>{e.preventDefault();toast.classList.add("show");form.reset();setTimeout(()=>toast.classList.remove("show"),3500)})}

const reveal=document.querySelectorAll(".book-card,.review-grid blockquote,.author-copy,.author-photo-wrap");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";observer.unobserve(entry.target)}}),{threshold:.12});
reveal.forEach(el=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .6s ease,transform .6s ease";observer.observe(el)});
