
import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Note, Prayer, Highlight, Bookmark, VerseReference } from '../types';

interface AppContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  prayers: Prayer[];
  addPrayer: (prayer: Omit<Prayer, 'id' | 'createdAt' | 'isAnswered'>) => void;
  updatePrayer: (prayer: Prayer) => void;
  deletePrayer: (id: string) => void;
  highlights: Highlight[];
  toggleHighlight: (verse: VerseReference, color: string) => void;
  isHighlighted: (verse: VerseReference) => Highlight | undefined;
  bookmarks: Bookmark[];
  toggleBookmark: (verse: VerseReference) => void;
  isBookmarked: (verse: VerseReference) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
  const [prayers, setPrayers] = useLocalStorage<Prayer[]>('prayers', []);
  const [highlights, setHighlights] = useLocalStorage<Highlight[]>('highlights', []);
  const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>('bookmarks', []);

  const addNote = (note: Note) => setNotes(prev => [...prev, note]);
  const updateNote = (updatedNote: Note) => setNotes(prev => prev.map(n => n.id === updatedNote.id ? updatedNote : n));
  const deleteNote = (id: string) => setNotes(prev => prev.filter(n => n.id !== id));
  
  const addPrayer = (prayerData: Omit<Prayer, 'id' | 'createdAt' | 'isAnswered'>) => {
    const newPrayer: Prayer = {
        ...prayerData,
        id: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        isAnswered: false
    };
    setPrayers(prev => [newPrayer, ...prev]);
  };
  const updatePrayer = (updatedPrayer: Prayer) => setPrayers(prev => prev.map(p => p.id === updatedPrayer.id ? updatedPrayer : p));
  const deletePrayer = (id: string) => setPrayers(prev => prev.filter(p => p.id !== id));
  
  const isVerseRefEqual = (a: VerseReference, b: VerseReference) => a.book === b.book && a.chapter === b.chapter && a.verse === b.verse;

  const isHighlighted = (verse: VerseReference) => highlights.find(h => isVerseRefEqual(h, verse));
  
  const toggleHighlight = (verse: VerseReference, color: string) => {
    setHighlights(prev => {
        const existing = isHighlighted(verse);
        if(existing) {
            return prev.filter(h => !isVerseRefEqual(h, verse));
        } else {
            return [...prev, {...verse, color}];
        }
    });
  };

  const isBookmarked = (verse: VerseReference) => bookmarks.some(b => isVerseRefEqual(b, verse));

  const toggleBookmark = (verse: VerseReference) => {
    setBookmarks(prev => {
        if (isBookmarked(verse)) {
            return prev.filter(b => !isVerseRefEqual(b, verse));
        } else {
            return [...prev, verse];
        }
    });
  };

  const value = {
    notes, addNote, updateNote, deleteNote,
    prayers, addPrayer, updatePrayer, deletePrayer,
    highlights, toggleHighlight, isHighlighted,
    bookmarks, toggleBookmark, isBookmarked,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
