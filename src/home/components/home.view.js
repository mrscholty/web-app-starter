import {html, render} from '../../lib/vendor/lit-html/lit-html.js';

export default class HomeView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = html`
            <style>
                :host {
                    display: block;
                }
            </style>`;

        const template = html`
            ${style}
            <h1>Home View</h1>
        `;

        render(template, this.shadowRoot);
    }
}

customElements.define('home-view', HomeView);
