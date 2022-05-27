import {renderTemplate, tpl} from '../html-renderer.js';

 class AppNavigation extends HTMLElement {

     constructor() {
         super();
         this.attachShadow({mode: 'open'});
     }

    connectedCallback() {
        document.addEventListener('router-location-changed', (e) => {
            this.handleActiveRoute(e.detail.currentRoute);
        });
        this.render();
    }

    handleActiveRoute(route) {
        (this.shadowRoot.querySelectorAll('a') || [])
            .forEach(e => e?.classList.remove('active'));

        const currentRoute = '/' + route?.split('/')[1];

        this.shadowRoot.querySelector(`a[href='${currentRoute}']`)
            ?.classList.toggle('active');
    }

    render() {

        const style = tpl`<style>
        
        :host {
            display: block;
        }
        
        .active {
            font-weight: bold;
        }
        
        ul {
            display: flex;
            padding: 0;
            margin: 0;
        }
        
        ul > li {
            list-style: none;
            margin: 0 5px;
        }
        
        ul > li > a {
            text-decoration: none;
            color: lightskyblue;
        }


        </style>`;

        renderTemplate(tpl`
                ${style}
             
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
        
        `, this.shadowRoot);
    }
}

customElements.define('app-navigation', AppNavigation);
