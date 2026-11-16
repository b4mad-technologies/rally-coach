// Only an explicit day/night choice is stored locally; no network or timers.
const button=document.querySelector('#theme');
const system=matchMedia('(prefers-color-scheme: dark)');
const sync=()=>{
 const dark=document.documentElement.dataset.theme ? document.documentElement.dataset.theme==='dark' : system.matches;
 button.setAttribute('aria-pressed',String(dark));
 button.dataset.mode=dark?'night':'day';
 const label=dark?'Night mode (switch to day)':'Day mode (switch to night)';
 button.setAttribute('aria-label',label);button.title=label;
};
button.addEventListener('click',()=>{
 const theme=button.getAttribute('aria-pressed')==='true'?'light':'dark';
 try {localStorage.setItem('theme',theme);document.documentElement.dataset.theme=theme;}
 catch {delete document.documentElement.dataset.theme;}
 sync();
});
system.addEventListener('change',sync);sync();

// Help occupies the same reserved line for pointer, keyboard and touch.
// An empty idle line avoids adding another repeated label to the roadbook.
document.querySelectorAll('.features li').forEach(row=>{
 const line=row.querySelector('.chip-help');
 const show=control=>{
  row.querySelectorAll('.feature-chip').forEach(chip=>chip.removeAttribute('data-active'));
  if(control)control.dataset.active='true';
  line.textContent=control?document.getElementById(control.getAttribute('aria-describedby')).textContent:'';
 };
 row.querySelectorAll('.feature-chip').forEach(control=>{
  control.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')show(control);});
  control.addEventListener('pointerleave',event=>{if(event.pointerType!=='touch')show(null);});
  control.addEventListener('focus',()=>show(control));
  control.addEventListener('blur',()=>show(null));
  control.addEventListener('click',()=>show(control));
 });
 row.addEventListener('pointerleave',()=>show(null));
});
// Touch selections clear when the visitor moves outside their row.
document.addEventListener('pointerdown',event=>{
 document.querySelectorAll('.features li').forEach(row=>{
  if(!row.contains(event.target)) {
   row.querySelector('.chip-help').textContent='';
   row.querySelectorAll('[data-active]').forEach(chip=>chip.removeAttribute('data-active'));
  }
 });
});
