// The only browser script: an ephemeral theme choice, no storage or network.
const button=document.querySelector('#theme');
const system=matchMedia('(prefers-color-scheme: dark)');
const sync=()=>button.setAttribute('aria-pressed',String(document.documentElement.dataset.theme ? document.documentElement.dataset.theme==='dark' : system.matches));
button.addEventListener('click',()=>{document.documentElement.dataset.theme=button.getAttribute('aria-pressed')==='true'?'light':'dark';sync();});
system.addEventListener('change',sync);sync();
