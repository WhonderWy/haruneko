import { Tags } from '../Tags';
import icon from './DynastyScans.webp';
import { Chapter, DecoratableMangaScraper, Manga, type MangaPlugin, Page } from '../providers/MangaPlugin';
import { FetchJSON } from '../platform/FetchProvider';
import * as Common from './decorators/Common';

type APIMangas = {
    total_pages: number;
    current_page: number;
    tags: {
        [tag: string]: {
            permalink: string;
            name: string;
        }[]
    }[];
}

type APIChapters = {
    taggings: [{ title: string, permalink: string, header?: JSONElement }]
};

type APIPages = {
    pages: [{ name: string, url: string }]
};

@Common.MangaCSS(/^{origin}\/[^/]+/, 'h2.tag-title b')
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('dynasty-scans', `Dynasty Reader`, 'https://dynasty-scans.com', Tags.Language.English, Tags.Media.Manga, Tags.Source.Scanlator);
    }

    public override get Icon() {
        return icon;
    }

    public async FetchMangas(provider: MangaPlugin): Promise<Manga[]> {
        const mangalist: Manga[] = [];
        const categories = [ '/series', '/anthologies', '/issues', '/doujins' ];
        for (const category of categories) {
            const mangas = await this.GetMangasFromCategory(provider, category);
            mangas.length > 0 ? mangalist.push(...mangas) : false;
        }
        return mangalist;
    }

    private async GetMangasFromCategory(provider: MangaPlugin, category: string): Promise<Manga[]> {
        const mangas = [];
        for (let i = 1, run = true; run; i++) {
            try {
                const json = await FetchJSON<APIMangas>(new Request(new URL(`${category}.json?page=${i}`, this.URI).href));
                run = i < json.total_pages;
                for (const tags of json.tags) {
                    for (const name in tags) {
                        tags[name].map(manga => mangas.push(new Manga(this, provider, `${category}/${manga.permalink}`, manga.name)));
                    }
                }
            }
            catch { // TODO: Do not return incomplete list for generic errors
                run = false;
            }
        }
        return mangas;
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const { taggings } = await FetchJSON<APIChapters>(new Request(new URL(`${manga.Identifier}.json`, this.URI).href));
        return taggings
            .filter(chapter => !chapter.header)
            .map(chapter => new Chapter(this, manga, `/chapters/${chapter.permalink}`, chapter.title.trim()))
            .distinct();
    }

    public override async FetchPages(chapter: Chapter): Promise<Page[]> {
        const { pages } = await FetchJSON<APIPages>(new Request(new URL(`${chapter.Identifier}.json`, this.URI).href));
        return pages.map(page => new Page(this, chapter, new URL(page.url, this.URI)));
    }
}