// Definim variables
// el botó 'switch' ara és llumOff
let llumOff = document.getElementById('aLesFosques');
let llumOn = document.getElementById ('aLesClares');

llumOff.addEventListener('click', aLesFosques);
llumOn.addEventListener('click', aLesClares);

function aLesFosques() {
    document.querySelector('body').style.background = "#000";
    document.querySelector('h1').style.color = '#000';
    document.querySelector('.nad-contSwitchImg').style.backgroundImage = 'url(img/SwitchOff.png)';
    document.querySelector('#lletresDeLlum').style.display = "block";
}

function aLesClares() {
    document.querySelector('body').style.background = "#FFF";
    document.querySelector('h1').style.color = '#888';
    document.querySelector('.nad-contSwitchImg').style.backgroundImage = 'url(img/SwitchOn.png)';
    document.querySelector('#lletresDeLlum').style.display = "none";
}