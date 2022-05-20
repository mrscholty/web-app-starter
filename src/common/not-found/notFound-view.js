import BaseElement from '../base-element.js';
import {tpl} from '../renderer.js';

export default class NotFoundView extends BaseElement {

    view() {
        const style = tpl`<style>
        :host {
            display: block;
            color: red;
        }  
        </style>`;

        return tpl`
            ${style}
            <span>not found</span>`;
    }

}

customElements.define('not-found-view', NotFoundView);
