// Ephemeral theme and per-figure selection; no storage or network.
const button=document.querySelector('#theme');
const system=matchMedia('(prefers-color-scheme: dark)');
const sync=()=>{
  const dark=document.documentElement.dataset.theme ? document.documentElement.dataset.theme==='dark' : system.matches;
  button.setAttribute('aria-pressed',String(dark));
  // Picture provides system-theme selection without JS; an explicit toggle
  // overrides its source media in the same way that data-theme overrides tokens.
  document.querySelectorAll('[data-theme-source]').forEach(source=>source.media=dark?'all':'not all');
};
button.addEventListener('click',()=>{document.documentElement.dataset.theme=button.getAttribute('aria-pressed')==='true'?'light':'dark';sync();});
system.addEventListener('change',sync);sync();
for(const figure of document.querySelectorAll('[data-hotspots]')) {
  const spots=[...figure.querySelectorAll('.hotspot')];
  const hints=[...figure.querySelectorAll('.hint-list li')];
  let active=0,pointer=false,focused=false,playing=true;
  if(!spots.length)continue;
  const select=index=>{
    active=index;
    spots.forEach((spot,i)=>spot.setAttribute('aria-pressed',String(i===index)));
    hints.forEach((hint,i)=>hint.dataset.active=String(i===index));
  };
  spots.forEach((spot,index)=>{
    spot.addEventListener('pointerenter',()=>select(index));
    spot.addEventListener('focus',()=>select(index));
    spot.addEventListener('click',()=>select(index));
  });
  hints.forEach((hint,index)=>hint.addEventListener('pointerenter',()=>select(index)));
  figure.addEventListener('pointerenter',()=>{pointer=true;});
  figure.addEventListener('pointerleave',()=>{pointer=false;});
  figure.addEventListener('focusin',()=>{focused=true;});
  figure.addEventListener('focusout',event=>{focused=figure.contains(event.relatedTarget);});
  // A persistent pause complements hover/focus holds for reading at one's own pace.
  const pause=document.createElement('button');pause.type='button';pause.className='cycle-control';pause.textContent='Pause hints';pause.setAttribute('aria-pressed','false');
  pause.addEventListener('click',()=>{playing=!playing;pause.textContent=playing?'Pause hints':'Resume hints';pause.setAttribute('aria-pressed',String(!playing));});
  figure.querySelector('figcaption').append(pause);
  select(0);
  setInterval(()=>{if(playing&&!pointer&&!focused&&!document.hidden)select((active+1)%spots.length);},4000);
}
