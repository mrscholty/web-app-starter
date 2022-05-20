import {renderView} from './renderer.js';

export default class BaseElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.state = {};
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
    }

    render() {
        renderView(this.view(), this.shadowRoot);
    }

    view() {
    }
}
