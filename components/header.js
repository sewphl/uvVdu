const headerTemplate = document.createElement('template');

      headerTemplate.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

      <style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
          
        li {
            display: inline;
        }
        
        a {
            text-decoration: none; 
            outline: none;
            color: black; 
        }

        a:hover {
            color: #484848;
        }
        
        nav {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 5;
            margin-top: 5px;
        }
        
        header nav ul li a {
            display: inline;
            padding: 5px;
        }     
        </style>

        <header>
          <nav>
          <ul>
            <li><a href="#gallery">Gallery</a></li>
            <!--<li><a id = "uvVduid" href="#" onclick="openMe('about')">About</a></li>-->
            <li><a href="#hello">Hi.</a></li>
            <li><a href="#prints">Prints</a></li>
            <li><a href="https://www.instagram.com/ultravioletvoodoo/"><i class="fab fa-instagram"></i></a></li>
            <!--<li><a href="https://linktree.com/ultravioletvoodoo"><i class="fa-solid fa fa-tree"></i></a></li>-->
            <!--<li><a href="https://www.ko-fi.com/ultravioletvoodoo/"><i class="myCoffee fa fa-coffee"></i></a></li>-->
          </ul>
        </nav>
      </header>
      `;

      class Header extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'closed' });

            shadowRoot.appendChild(headerTemplate.content);
        }
      }
      
      customElements.define('header-component', Header);