class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
        .bar {
            width: 100%;
            background-color: burlywood;
            text-align: center;
            /*background-color: #333;*/ 
            overflow: hidden;
            }
                
            /* Style the links inside the navigation bar */
            .bar a {
                color: #f2f2f2;
                text-align: center;
                padding: 3px 20px;
                text-decoration: none;
                font-size: 17px;
            }

            /* Change the color of links on hover */
            .bar a:hover {
                background-color: #ddd;
                color: black;
            }

        </style>

        <nav class="bar">
            <a href="../home/index.html" class="bar bar-item">Home</a>
            <a href="../login/index.html" class="bar bar-item">Register</a>
            <a href="#contact" class="bar bar-item">Contact</a>
        </nav>

      `;
    }
  }
  
  customElements.define('header-component', Header);