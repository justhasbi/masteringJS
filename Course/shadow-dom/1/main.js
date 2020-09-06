// shadow HOST
const divElement = document.createElement('div');

// Elemen yang berada dalam shadow dom
const headingElement = document.createElement('h1');
headingElement.innerText = "Text di dalam shadow dom";

// melampirkan Shadow Root pada shadow host menggunakan method attachShadow pada host
// Mengatur mode shadow dengan nilai open
let shadowRoot = divElement.attachShadow({mode: "closed"});

// memasukan element heading pada shadow root
shadowRoot.appendChild(headingElement);

document.body.appendChild(divElement);