import getRandomInt from "./getRandomInt";
export default function generateBackground() {
    let bgFragment = document.createDocumentFragment();
    const contentWrap = document.querySelector('.content-wrap');
    const technologiesClasses = ['vue-icon', 'js-icon', 'scss-icon', 'html-icon', 'css-icon'];
    const numOfBubbles = 30;
    
    for (let i = 0; i < numOfBubbles; i++) {
        let bubble = document.createElement('div');
        bubble.classList.add('bg-bubble');
        bubble.classList.add(technologiesClasses[getRandomInt(0, technologiesClasses.length - 1)]);
        bubble.style.left = `${getRandomInt(0, 100)}%`;
        bubble.style.top = `${getRandomInt(0, 2000)}px`
        bubble.style.animationDuration = `${getRandomInt(30, 80)}s`
        bgFragment.appendChild(bubble);
    }
    contentWrap.appendChild(bgFragment);
}