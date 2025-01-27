import './index.css';
import react from './assets/react.jpg'

const body = document.querySelector('body')

const img = document.createElement('img')
img.src = react
img.alt = "React Logo";

const loveH1 = document.createElement('h1')
loveH1.textContent = 'I love JavaScript'

body.append(loveH1, img)

console.log('Hello World!');
