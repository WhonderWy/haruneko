import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'erosscans',
        title: 'Eros Scans'
    },
    container: {
        url: 'https://erosxsun.xyz/manga/absolute-sword-sense/',
        id: '/manga/absolute-sword-sense/',
        title: 'Absolute Sword Sense'
    },
    child: {
        id: '/i-have-90-billion-licking-gold-coins-chapter-500/',
        title: 'Chapter 500'
    },
    entry: {
        index: 0,
        size: 1_197_372,
        type: 'image/webp'
    }
}).AssertWebsite();