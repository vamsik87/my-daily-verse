
import React, { useState, useEffect } from 'react';
import { bibleService } from '../services/bibleService';
import { ChapterContent, Verse, VerseReference } from '../types';
import VerseComponent from './Verse';
import ActionMenu from './ActionMenu';
import useLocalStorage from '../hooks/useLocalStorage';

const BibleReader: React.FC = () => {
  const [books, setBooks] = useState<string[]>([]);
  const [chapters, setChapters] = useState<number[]>([]);
  const [content, setContent] = useState<ChapterContent | null>(null);
  
  const [selectedBook, setSelectedBook] = useLocalStorage('selectedBook', 'John');
  const [selectedChapter, setSelectedChapter] = useLocalStorage('selectedChapter', 1);

  const [selectedVerse, setSelectedVerse] = useState<VerseReference | null>(null);

  useEffect(() => {
    setBooks(bibleService.getBooks());
  }, []);

  useEffect(() => {
    if (selectedBook) {
      setChapters(bibleService.getChapters(selectedBook));
    }
  }, [selectedBook]);
  
  useEffect(() => {
    if (selectedBook && selectedChapter) {
        const chapterContent = bibleService.getChapterContent(selectedBook, selectedChapter);
        setContent(chapterContent);
    }
  }, [selectedBook, selectedChapter]);

  const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const book = e.target.value;
    setSelectedBook(book);
    const bookChapters = bibleService.getChapters(book);
    setSelectedChapter(bookChapters[0] || 1);
  };
  
  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChapter(Number(e.target.value));
  };

  const handleVerseTap = (verse: VerseReference) => {
    setSelectedVerse(verse);
  }

  const handleCloseMenu = () => {
    setSelectedVerse(null);
  }
  
  return (
    <div className="p-4">
      <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 py-2 -mx-4 px-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-slate-900">Read Bible</h1>
        <div className="flex gap-4 mt-4">
          <select value={selectedBook} onChange={handleBookChange} className="w-full p-2 border rounded-md bg-white shadow-sm">
            {books.map(book => <option key={book} value={book}>{book}</option>)}
          </select>
          <select value={selectedChapter} onChange={handleChapterChange} className="w-full p-2 border rounded-md bg-white shadow-sm">
            {chapters.map(chap => <option key={chap} value={chap}>Chapter {chap}</option>)}
          </select>
        </div>
      </header>

      {content ? (
        <article className="font-serif text-lg text-slate-700 leading-relaxed">
           <h2 className="text-3xl font-bold text-center mb-6">{content.book} {content.chapter}</h2>
          {content.verses.map(verse => (
            <VerseComponent key={verse.verse} verse={verse} onVerseTap={handleVerseTap} />
          ))}
        </article>
      ) : (
        <p>Select a book and chapter to start reading.</p>
      )}

      {selectedVerse && <ActionMenu verseRef={selectedVerse} onClose={handleCloseMenu} />}
    </div>
  );
};

export default BibleReader;
