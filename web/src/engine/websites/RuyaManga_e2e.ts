﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'ruyamanga',
        title: 'Rüya Manga'
    },
    container: {
        url: 'https://www.ruyamanga2.com/seri/deli-muhendis/',
        id: JSON.stringify({ post: '56', slug: '/seri/deli-muhendis/' }),
        title: 'Deli Mühendis'
    },
    child: {
        id: '/seri/deli-muhendis/bolum-118/',
        title: 'Bölüm 118'
    },
    entry: {
        index: 0,
        size: 54_332,
        type: 'image/webp'
    }
}).AssertWebsite();