let mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
}
let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = 'Jabez is the champion';





