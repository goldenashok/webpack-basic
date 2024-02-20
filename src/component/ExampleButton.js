import'./ExampleButton.css';

class ExampleButton {
    render(){
        const button = document.createElement('Button');
        button.innerHTML = "Call Me";
        button.classList.add('green-button');
        const body = document.querySelector('body');
        body.append(button);
    }
}
export default ExampleButton;