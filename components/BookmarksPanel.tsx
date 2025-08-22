
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { bibleService } from '../services/bibleService';
import { Bookmark, Verse } from '../types';

const BookmarksPanel: React.FC = () => {
    const { bookmarks, toggleBookmark } = useAppContext();
    const [bookmarkedVerses, setBookmarkedVerses] = useState<Verse[]>([]);

    useEffect(() => {
        const verses: Verse[] = [];
        bookmarks.forEach(bm => {
            const content = bibleService.getChapterContent(bm.book, bm.chapter);
            const verse = content?.verses.find(v => v.verse === bm.verse);
            if (verse) {
                verses.push(verse);
            }
        });
        setBookmarkedVerses(verses);
    }, [bookmarks]);

    return (
        <div className="p-4">
            <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 py-2 -mx-4 px-4 border-b mb-4">
                <h1 className="text-2xl font-bold text-slate-900">Bookmarks</h1>
            </header>

            <div className="mt-6 space-y-4">
                {bookmarkedVerses.length > 0 ? (
                    bookmarkedVerses.map(verse => (
                        <div key={`${verse.book}-${verse.chapter}-${verse.verse}`} className="p-4 border rounded-lg bg-white shadow-sm">
                           <div className="flex justify-between items-start">
                               <div>
                                   <p className="font-bold text-indigo-700">{verse.book} {verse.chapter}:{verse.verse}</p>
                                   <p className="mt-1 text-slate-600 font-serif">{verse.text}</p>
                               </div>
                               <button onClick={() => toggleBookmark(verse)} className="p-1 text-indigo-600 hover:text-indigo-400">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3-7 3Z"/></svg>
                               </button>
                           </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 pt-8">No bookmarks yet. Tap a verse to save it.</p>
                )}
            </div>
        </div>
    );
};

export default BookmarksPanel;
