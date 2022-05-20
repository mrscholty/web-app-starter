import BaseElement from '../../common/base-element.js';
import {tpl} from '../../common/renderer.js';

export default class AboutView extends BaseElement {

    view() {
        const style = tpl`<style>
        :host {
            display: block;
        }  
        </style>`;

        return tpl`
            ${style}
            <span>starter web app for creating single-page applications using web standards and web components</span>`;
    }
}

customElements.define('about-view', AboutView);
