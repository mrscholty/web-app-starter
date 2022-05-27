import {renderTemplate, tpl} from '../html-renderer.js';

export default class NotFoundView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = tpl`<style>
        :host {
            display: block;
            color: red;
        }  
        </style>`;

        renderTemplate(tpl`
            ${style}
            <span>not found</span>`, this.shadowRoot);
    }

}

customElements.define('not-found-view', NotFoundView);
