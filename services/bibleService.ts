import { Verse, ChapterContent } from '../types';
import { BIBLE_DATA } from '../bibleData';

class BibleService {
    private books = BIBLE_DATA;
    private bookMap = new Map<string, typeof BIBLE_DATA[0]>(this.books.map(b => [b.name, b]));

    getBooks(): string[] {
        return this.books.map(book => book.name);
    }
    
    getChapters(bookName: string): number[] {
        const book = this.bookMap.get(bookName);
        if (book) {
            return Array.from({ length: book.chapters.length }, (_, i) => i + 1);
        }
        return [];
    }

    getChapterContent(bookName: string, chapter: number): ChapterContent | null {
        const book = this.bookMap.get(bookName);
        // chapter is 1-indexed, array is 0-indexed
        if (book && book.chapters[chapter - 1]) {
            const verseTexts = book.chapters[chapter - 1];
            const verses: Verse[] = verseTexts.map((text, index) => ({
                book: bookName,
                chapter,
                verse: index + 1,
                text,
            }));
            return { book: bookName, chapter, verses };
        }
        return null;
    }

    search(query: string): Verse[] {
        const results: Verse[] = [];
        if (!query.trim()) return results;

        const lowerCaseQuery = query.toLowerCase();

        for (const book of this.books) {
            for (let chapIndex = 0; chapIndex < book.chapters.length; chapIndex++) {
                const chapterContent = book.chapters[chapIndex];
                for (let verseIndex = 0; verseIndex < chapterContent.length; verseIndex++) {
                    const verseText = chapterContent[verseIndex];
                    if (verseText.toLowerCase().includes(lowerCaseQuery)) {
                        results.push({
                            book: book.name,
                            chapter: chapIndex + 1,
                            verse: verseIndex + 1,
                            text: verseText,
                        });
                    }
                }
            }
        }
        return results;
    }
}

export const bibleService = new BibleService();