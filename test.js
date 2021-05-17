var style = document.createElement('style')
style.innerHTML = '.sticky{background-color: grey;}'
shadowRoot.appendChild(style)

document.querySelector('.sticky').shadowRoot.querySelector('.background-color').setAttribute('background-color', 'grey');
