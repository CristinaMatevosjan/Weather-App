const btn=document.getElementById('search-city');
const close=document.getElementById('close');
const panel=document.getElementById('left-panel');

btn.onclick=function() {
    panel.classList.add('active');
}

close.onclick=function() {
    panel.classList.remove('active');
}