import displayHelloWold from './helloworld';
import showImage from './images';

import ExampleButton from './component/ExampleButton';
import SubmitButton from './component/SubmitButton';

displayHelloWold();
showImage();

const exBtn = new ExampleButton();
exBtn.render();

const subBtn = new SubmitButton();
subBtn.render();

//ES6
const mutltiply = (a, b) => {
    return a * b;
}

console.log('multiply',  mutltiply(2, 4));