const LOGO_TXT = 'https://static.wixstatic.com/media/logo-txt.png';
const LOGO_IMG = 'https://static.wixstatic.com/media/logo-img.png';

const createImg = (id, src) => {
  const img = document.createElement('img');
  img.src = src;
  img.id = id;
  img.width = '200';
  img.style.position = 'fixed';
  return img;
}

class myLogoDisplay extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(createImg('txt', LOGO_TXT));
    this.appendChild(createImg('img', LOGO_IMG));
  }

}

customElements.define('my-logo-display', myLogoDisplay);