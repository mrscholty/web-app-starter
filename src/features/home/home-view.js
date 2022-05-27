import {renderTemplate, tpl} from '../../common/html-renderer.js';

export default class HomeView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = tpl`
            <style>
                :host {
                    display: block;
                }                
            </style>`;

        renderTemplate(tpl`
            ${style}
            <span>welcome</span>`, this.shadowRoot);
    }

}

customElements.define('home-view', HomeView);
