class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {
                text-align: center;
                padding: 3px;
                background-color: DarkSalmon;
                color: white;
                position: fixed;
                bottom: 0;
                width: 100%;
            }
        </style>

        <footer>
            <p>Author: Christopher Kielty<br>
            <p>CAN ADD PRETTY COOL LINKS HERE.... RANDOM STUFF LALALALALALA <br>
        </footer>

      `;
    }
  }
  
  customElements.define('footer-component', Footer);