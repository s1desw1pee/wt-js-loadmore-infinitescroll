import{a as r,l as w}from"./assets/lightbox-BJVCXEPV.js";/* empty css                      */import{i as c}from"./assets/vendor-8Mmu4-FC.js";const E=document.getElementById("search-button"),a=document.querySelector(".gallery"),h=document.querySelector("#search-bar");let s=0,i=!0,l="";const O={root:null,rootMargin:"0px",threshold:.5},u=new IntersectionObserver(S,O);E.addEventListener("click",function(e){e.preventDefault(),m(),i=!0});h.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),m()),i=!0});async function m(){const e=h.value.trim();if(r.setQuery(e),e===""){p("Будь ласка, заповніть поле пошуку");return}if(e===l){p("Будь ласка, змініть або введіть новий запит до поля пошуку.");return}a.innerHTML="",r.resetPage(),l=e,s=0,await g()}async function g(){try{const e=await r.fetchGallery(),{hits:n,totalHits:t}=e;if(!n.length){f("Вибачте, немає зображень, які відповідають вашому запиту. Будь ласка, спробуйте ще раз.");return}i&&s<t&&(I(`Ура! Ми знайшли ${t} зображень !!!`),i=!1),k(n),s+=n.length;const o=a.lastElementChild;o&&u.observe(o),s>=t&&(u.disconnect(),T("Ви досягли кінця результатів пошуку."))}catch(e){console.error("Помилка отримання галереї:",e),f("Під час отримання галереї сталася помилка.")}}function k(e){const n=e.map(({webformatURL:t,largeImageURL:o,tags:d,likes:y,views:b,downloads:v})=>`
      <div class="photo-card">
        <a href="${o}">
          <img class="photo-img" src="${t}" alt="${d}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span class="info__span">${y}</span></p>
          <p class="info-item"><b>Views</b><span class="info__span">${b}</span></p>
          <p class="info-item"><b>Downloads</b><span class="info__span">${v}</span></p>
        </div>
      </div>`).join("");a.insertAdjacentHTML("beforeend",n),w.refresh()}function S(e,n){e.forEach(t=>{t.isIntersecting&&(r.incrementPage(),g())})}function p(e){c.warning({title:"Warning",message:e,position:"topRight",color:"yellow",timeout:4e3,closeOnEscape:!0,closeOnClick:!0})}function f(e){c.error({title:"Error",message:e,position:"topRight",color:"red",timeout:3e3,closeOnEscape:!0,closeOnClick:!0})}function I(e){c.success({title:"Success",message:e,position:"topRight",color:"green",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function T(e){c.info({title:"Info",message:e,position:"topRight",color:"blue",timeout:3e3,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers2.js.map
