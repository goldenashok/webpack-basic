import './SubmitButton.scss';

class SubmitButton {
    render() {
        const subBtn = document.createElement('button');
        subBtn.innerHTML = "Submit Me";
        subBtn.classList.add('sub-button');
        const body = document.querySelector('body');
        body.append(subBtn);
    }
}

export default SubmitButton;