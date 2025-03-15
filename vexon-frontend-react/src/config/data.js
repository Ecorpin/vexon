import { Children } from "react";


const config = {
    navigationBar: [{
        title: 'products',
        childrens: [{
            title: 'cameras',
            childrens: [],
        }, {
            title: 'robots',
            childrens: [],
        }, {
            title: 'image sensor',
            childrens: [],
        }, {
            title: '3d imaging',
            childrens: [],
        }, {
            title: 'vision system',
            childrens: [],
        }, {
            title: 'softwares',
            childrens: [],
        }, {
            title: 'custom & OEM',
            childrens: [],
        }],
    }, {
        title: 'markets & solutions',
        childrens: [{
            title: 'pharmaceuticals',
            childrens: [],
        }, {
            title: 'semiconductor',
            childrens: [],
        }, {
            title: 'electronics',
            childrens: [],
        }, {
            title: 'automotive',
            childrens: [],
        }, {
            title: 'food & packaging',
            childrens: [],
        }, {
            title: 'pharmaceuticals',
            childrens: [],
        }, ],
        link: '/markets-&-solutions'
    }, {
        title: 'company',
        childrens: [],
        link: '/company'
    }, {
        title: 'contact',
        childrens: [],
        link: '/contact'
    }] 
};

export default config;