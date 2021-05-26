import BaseElement from '../base-element.js';
import {tpl} from '../renderer.js';

export default class AppNavigation extends BaseElement {

    connectedCallback() {
        document.addEventListener('router-location-changed', (e) => {
            (this.shadowRoot.querySelectorAll('a') || [])
                .forEach(e => e?.classList.remove('active'));

            const currentRoute = '/' + e.detail.currentRoute.split('/')[1]

            this.shadowRoot.querySelector(`a[href='${currentRoute}']`)
                ?.classList.toggle('active');
        });
        super.connectedCallback();
    }

    view() {

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

        return tpl`
                ${style}
             
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
        
        `
    }
}

customElements.define('app-navigation', AppNavigation);
