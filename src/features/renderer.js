import {html, render} from '../lib/vendor/lit-html.js';

export function tpl(string, ...values) {
    return html(string, ...values);
}

export function renderView(template, target) {
    return render(template, target);
}
