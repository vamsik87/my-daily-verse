
import React from 'react';
import { Verse, VerseReference } from '../types';
import { useAppContext } from '../context/AppContext';

interface VerseProps {
  verse: Verse;
  onVerseTap: (verseRef: VerseReference) => void;
}

const VerseComponent: React.FC<VerseProps> = ({ verse, onVerseTap }) => {
  const { isHighlighted } = useAppContext();
  const highlight = isHighlighted(verse);

  const highlightClass = highlight ? `bg-yellow-200` : '';

  return (
    <p 
      className={`mb-2 cursor-pointer transition-colors duration-200 rounded p-1 -m-1 ${highlightClass}`}
      onClick={() => onVerseTap({ book: verse.book, chapter: verse.chapter, verse: verse.verse })}
    >
      <sup className="text-xs font-bold text-indigo-600 mr-1">{verse.verse}</sup>
      {verse.text}
    </p>
  );
};

export default VerseComponent;
