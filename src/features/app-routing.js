import {Router} from '../lib/vendor/vaadin-router.js';

const routes = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        action: async () => {
            await import('./home/home-view.js')
        },
        component: 'home-view'
    },
    {
        path: '/about',
        action: async () => {
            await import('./about/about-view.js')
        },
        component: 'about-view'
    },
    {
        path: '(.*)',
        action: async () => {
            await import('./not-found/notFound-view.js')
        },
        component: 'not-found-view'
    }
];
const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes).then(() => {
});

export function navigate(path) {
    Router.go(path);
}

export function getRoutingParams(component) {
    return component?.location?.params;
}

window.addEventListener('vaadin-router-location-changed', (e) => {
        document.dispatchEvent(new CustomEvent('router-location-changed', {
        detail: {
            currentRoute: e.detail.location.pathname
        }
    }))
});
