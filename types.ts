
export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export type VerseReference = Pick<Verse, 'book' | 'chapter' | 'verse'>;

export interface Note extends VerseReference {
  id: string;
  text: string;
  createdAt: string;
}

export interface Prayer {
  id: string;
  title: string;
  text: string;
  isAnswered: boolean;
  createdAt: string;
}

export interface Highlight extends VerseReference {
  color: string;
}

export type Bookmark = VerseReference;

export type NavItemType = 'read' | 'search' | 'notes' | 'prayers' | 'bookmarks';

export interface ChapterContent {
    book: string;
    chapter: number;
    verses: Verse[];
}
