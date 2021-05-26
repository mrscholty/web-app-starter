import {tpl} from '../renderer.js';
import BaseElement from '../base-element.js';

export default class HomeView extends BaseElement {

    view() {
        const style = tpl`
            <style>
                :host {
                    display: block;
                }                
            </style>`;

        return tpl`
            ${style}
            <span>welcome</span>
        `;
    }

}

customElements.define('home-view', HomeView);
