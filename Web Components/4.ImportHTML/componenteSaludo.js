const req = new XMLHttpRequest();

req.addEventListener('load', reqListener);

function reqListener() {
  const template =this.responseText;

  const div = document.createElement('div');
  div.innerHTML = template;

  window.customElements.define('componente-saludo', class extends HTMLElement {
    constructor(){
      super();
      this.attachShadow({mode: 'open'});
    }
  })
}
