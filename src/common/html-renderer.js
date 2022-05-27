import {html, render} from '../lib/vendor/uhtml.js';

export function tpl(string, ...values) {
    return html(string, ...values);
}

export function renderTemplate(template, target) {
    return render(target, template);
}
