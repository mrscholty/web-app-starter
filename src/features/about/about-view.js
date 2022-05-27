import {renderTemplate, tpl} from '../../common/html-renderer.js';

export default class AboutView extends HTMLElement {

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
        }  
        </style>`;

        renderTemplate(tpl`
            ${style}
            <span>starter web app for creating single-page applications using web standards and web components</span>`,
            this.shadowRoot);
    }
}

customElements.define('about-view', AboutView);
