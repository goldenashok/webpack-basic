import AppleImage from './apple.jpg'

function showImage() {
    const img = document.createElement('img');
    img.src = AppleImage;
    const body = document.querySelector('body');
    body.append(img);
}
export default showImage;