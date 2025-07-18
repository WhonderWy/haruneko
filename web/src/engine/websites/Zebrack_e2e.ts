﻿import { TestFixture } from '../../../test/WebsitesFixture';

// CASE: Provided in Magazines
new TestFixture({
    plugin: {
        id: 'zebrack',
        title: 'Zebrack(ゼブラック)'
    },
    container: {
        url: 'https://zebrack-comic.shueisha.co.jp/magazine/1/issue/14486/detail',
        id: '/magazine/1/issue/14486/detail',
        title: '週刊少年ジャンプ 2023年44号'
    },
    child: {
        id: 'magazine/1/14486',
        title: '週刊少年ジャンプ 2023年44号'
    },
    entry: {
        index: 0,
        size: 485_738,
        type: 'image/jpeg'
    }
}).AssertWebsite();

// CASE: Provided in Issues
new TestFixture({
    plugin: {
        id: 'zebrack',
        title: 'Zebrack(ゼブラック)'
    },
    container: {
        url: 'https://zebrack-comic.shueisha.co.jp/title/5123',
        id: '/title/5123',
        title: 'アオのハコ'
    },
    child: {
        id: 'chapter/5123/132107',
        title: '#1 千夏先輩'
    },
    entry: {
        index: 0,
        size: 88_836,
        type: 'image/jpeg'
    }
}).AssertWebsite();

// CASE: Provided in Gravures
new TestFixture({
    plugin: {
        id: 'zebrack',
        title: 'Zebrack(ゼブラック)'
    },
    container: {
        url: 'https://zebrack-comic.shueisha.co.jp/gravure/2188',
        id: '/gravure/2188',
        title: '馬場ふみか 「Asian Rendez-Vous」'
    },
    child: {
        id: 'gravure/2188',
        title: '馬場ふみか 「Asian Rendez-Vous」'
    },
    entry: {
        index: 0,
        size: 197_698,
        type: 'image/jpeg'
    }
}).AssertWebsite();

// CASE: Provided in Volumes
new TestFixture({
    plugin: {
        id: 'zebrack',
        title: 'Zebrack(ゼブラック)'
    },
    container: {
        url: 'https://zebrack-comic.shueisha.co.jp/title/46119/volume/178046',
        id: '/title/46119/volume/178046',
        title: 'テンマクキネマ'
    },
    child: {
        id: 'volume/46119/178046',
        title: '1'
    },
    entry: {
        index: 0,
        size: 276_381,
        type: 'image/jpeg'
    }
}).AssertWebsite();