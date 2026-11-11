/* Lógica de la página: búsqueda, filtros, vistas por eje y modo claro/oscuro. */
let filtro="all", q="";
const app=document.getElementById("app");
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();

function texto(n){const e=EJES[n];let t=e.t+" "+e.s;const d=DET[n];
  if(d){t+=" "+d.obj;d.oes.forEach(o=>{t+=" "+o.t+" "+o.d+" "+o.st.map(x=>x[0]).join(" ")+" "+o.me.map(x=>x.join(" ")).join(" ")});}
  return norm(t);}

function home(){
  app.innerHTML=`
  <div class="intro">
    <div class="box"><h2>Quiénes queremos ser</h2><p>Una Facultad líder en el Estado de México en ciencias naturales y exactas, con proyección nacional e internacional por la calidad de su docencia, su investigación y su vinculación.</p></div>
    <div class="box"><h2>Cómo está organizado</h2><p>6 pilares agrupan 18 ejes de trabajo. Cada eje tiene objetivos, estrategias y metas medibles hasta 2030.</p></div>
  </div>
  <div class="tools">
    <label for="q">Buscar en el Plan</label>
    <input id="q" type="search" placeholder="Por ejemplo: becas, movilidad, titulación, laboratorios" value="${esc(q)}" autocomplete="off">
    <div class="chips" role="group" aria-label="Filtrar por sector">
      ${[["all","Todos los ejes"],...Object.entries(SECT)].map(([k,v])=>`<button class="chip" data-f="${k}" aria-pressed="${filtro===k}">${v}</button>`).join("")}
    </div>
  </div>
  <div id="list" style="display:grid;gap:28px"></div>`;
  const inp=document.getElementById("q");
  inp.addEventListener("input",()=>{q=inp.value;lista();});
  app.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{filtro=b.dataset.f;app.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x.dataset.f===filtro));lista();}));
  lista();
}
function lista(){
  const L=document.getElementById("list"),nq=norm(q.trim());let html="",n=0;
  PILARES.forEach(p=>{
    const ej=p.ejes.filter(i=>(filtro==="all"||EJES[i].sec.includes(filtro))&&(!nq||texto(i).includes(nq)));
    if(!ej.length)return; n+=ej.length;
    html+=`<section class="pilar"><h2><b>Pilar ${p.n}</b> · ${p.t}</h2><div class="grid">${ej.map(card).join("")}</div></section>`;
  });
  L.innerHTML=n?html:`<p class="empty">No encontramos ejes con esa búsqueda. Prueba con otra palabra o elige “Todos los ejes”.</p>`;
}
function card(i){const e=EJES[i],full=!!DET[i];
  return `<article class="card${full?" full":""}"><div class="num">EJE ${i}</div><h3>${e.t}</h3><p>${e.s}</p>
  <div class="tags">${e.sec.map(s=>`<span class="tag">${SECT[s]}</span>`).join("")}</div>
  ${full?`<a class="more" href="#eje-${i}">Ver objetivos y metas →</a>`:`<span class="soon">Detalle en preparación</span>`}</article>`;}

function detalle(i){const e=EJES[i],d=DET[i];
  const cpi=a=>`<span class="cpi-mini" aria-label="${["Cercana","Progresista","Incluyente"].filter((_,k)=>a[k]).join(", ")}">${["C","P","I"].map((l,k)=>`<i class="${a[k]?"on":""}">${l}</i>`).join("")}</span>`;
  app.innerHTML=`
  <a class="back" href="#inicio">← Volver a los 18 ejes</a>
  <div class="dhead"><div class="num">EJE ${i} · PILAR ${PILARES.find(p=>p.ejes.includes(+i)).n}</div><h2>${e.t}</h2><p>${d.obj}</p></div>
  <div class="foryou">${Object.entries(d.foryou).map(([s,l])=>`<div class="box"><h3>${SEC_H[s]}</h3><ul>${l.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
  <div class="legend">Cada estrategia indica a qué rasgo de la administración responde: ${cpi([1,0,0])} Cercana ${cpi([0,1,0])} Progresista ${cpi([0,0,1])} Incluyente</div>
  ${d.oes.map(o=>`<article class="oe">
    <div class="oe-h"><div class="k">${o.k.toUpperCase()}</div><h3>${o.t}</h3><p>${o.d}</p></div>
    <div class="oe-b">
      <section><h4>Cómo lo haremos</h4><ul>${o.st.map(s=>`<li class="st">${cpi(s[1])}<span>${s[0]}</span></li>`).join("")}</ul></section>
      <section><h4>Metas</h4><div class="meta">${o.me.map(m=>`<b>${m[0]}</b><span>${m[1]}</span>`).join("")}</div></section>
    </div></article>`).join("")}
  <p class="src">Texto completo: ${d.src}. Las políticas, el diagnóstico y todas las metas están en el documento oficial y en la Matriz de Consistencia.</p>
  <div class="pager">${+i>1?`<a class="pill alt" href="#eje-${+i-1}">← Eje ${+i-1}</a>`:"<span></span>"}<a class="pill" href="#inicio">Los 18 ejes</a>${+i<18?`<a class="pill alt" href="#eje-${+i+1}">Eje ${+i+1} →</a>`:"<span></span>"}</div>`;
  window.scrollTo(0,0);
}
function route(){const m=location.hash.match(/^#eje-(\d+)$/);
  if(m&&DET[m[1]])detalle(m[1]);else home();}
window.addEventListener("hashchange",route);route();
// Selector de modo claro/oscuro
(function(){
  const root=document.documentElement,btn=document.getElementById("theme");
  const sys=()=>window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  let saved=null;try{saved=localStorage.getItem("pd-tema")}catch(e){}
  const current=()=>root.getAttribute("data-theme")||saved||sys();
  function paint(t){root.setAttribute("data-theme",t);
    const dark=t==="dark";
    document.getElementById("ticon").textContent=dark?"☀":"☾";
    document.getElementById("tlabel").textContent=dark?"Modo claro":"Modo oscuro";
    btn.setAttribute("aria-label",dark?"Cambiar a modo claro":"Cambiar a modo oscuro");}
  paint(saved||current());
  btn.addEventListener("click",()=>{const t=current()==="dark"?"light":"dark";paint(t);try{localStorage.setItem("pd-tema",t)}catch(e){}});
})();

