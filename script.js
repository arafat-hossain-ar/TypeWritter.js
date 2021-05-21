// dom element 
const textArea = document.querySelector("#typing");
let cursur = document.querySelector(".cursur");
let text = textArea.textContent;
textArea.innerText = "";

// Dynamic Css 
let dynamicStyles = null;
function addAnimation(name, body) {
    if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(`@keyframes ${name} {
    ${body}
  }`, dynamicStyles.length);
}

addAnimation('animate', `
  0% { opacity: 0; }
  100% { opacity: 1; }
`);

// Typing System Start 
let i = 0;
cursur.style.animation = `animate 300ms infinite`;
function typeing() {
    cursur.style.animationDuration = "" + type.blink + "" + "ms";
    if (i < text.length) {
        textArea.innerHTML += text[i];
        i++
        setTimeout(typeing, type.speed);
    }
}
function typed() {
    setTimeout(() => { typeing(); }, type.delay);
}
