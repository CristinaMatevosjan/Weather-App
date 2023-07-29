const switchOff=document.querySelector('.switch-off');
const switchOn=document.querySelector('.switch-on');

switchOff.addEventListener('click', e => {
    document.documentElement.setAttribute('theme', 'dark');
    switchOff.classList.add('none');
    switchOn.classList.remove('none');
});

switchOn.addEventListener('click', e => {
    document.documentElement.removeAttribute('theme');
    switchOn.classList.add('none');
    switchOff.classList.remove('none');
});