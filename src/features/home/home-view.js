import {tpl} from '../../common/renderer.js';
import BaseElement from '../../common/base-element.js';

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
