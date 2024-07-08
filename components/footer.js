const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

  <style>

    footer {
        position: sticky;
        top: 100vh;
        grid-area: foot;
        text-align: center;
        font-family: 'futura-pt', 'Jost', sans-serif;
        margin-bottom: 5px;
        }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        }
          
    li {
        list-style: none;
        display: inline;
        }
        
    a {
        margin: 0 15px;
        text-decoration: none;
        outline: none;
        color: black; 
        }

    a:hover {
        padding-bottom: 5px;
        color: #484848;
        }        

    .social-row {
        margin: 1px 0;
    }
    
    .social-row li a {
      margin: 0 10px;
    }

  </style>
  <footer id="footer">
    <ul class="social-row">
      <li class="copyright">© 2024, ultravioletvoodoo. All rights reserved.</li>
      <!--<li><a href="mailto:ultravioletvoodoo.photo@gmail.com"><i class="fa-regular fa fa-envelope"></i></a></li>-->
      <li><a href="https://www.instagram.com/ultravioletvoodoo/"><i class="fab fa-instagram"></i></a></li>
      <!--<li><a href="https://linktree.com/ultravioletvoodoo"><i class="fa-solid fa fa-tree"></i></a></li>-->
      <!--<li><a href="https://www.ko-fi.com/ultravioletvoodoo/"><i class="myCoffee fa fa-coffee"></i></a></li>-->
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);