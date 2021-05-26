import {renderView} from './renderer.js';

export default class BaseElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.state = {};
    }

    set props(value) {
        this.state = Object.assign(this.state, value);
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
    }

    render() {
        const template = this.view();
        renderView(template, this.shadowRoot);
    }

    view() {
    }
}
