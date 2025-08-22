
import React, { useState } from 'react';
import { VerseReference, Note } from '../types';
import { useAppContext } from '../context/AppContext';
import { ICONS } from '../constants';
import Modal from './Modal';

interface ActionMenuProps {
  verseRef: VerseReference;
  onClose: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ verseRef, onClose }) => {
    const { 
        toggleBookmark, isBookmarked,
        toggleHighlight, isHighlighted,
        addNote 
    } = useAppContext();

    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [noteText, setNoteText] = useState('');

    const handleAddNote = () => {
      if(noteText.trim()){
        const newNote: Note = {
            ...verseRef,
            id: new Date().toISOString(),
            text: noteText,
            createdAt: new Date().toISOString(),
        }
        addNote(newNote);
        setNoteText('');
        setIsNoteModalOpen(false);
        onClose();
      }
    };

    const bookmarked = isBookmarked(verseRef);
    const highlighted = isHighlighted(verseRef);

    return (
        <>
            <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
            <div className="fixed bottom-16 left-4 right-4 max-w-lg mx-auto bg-white rounded-lg shadow-xl p-4 z-50 animate-slide-up">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{verseRef.book} {verseRef.chapter}:{verseRef.verse}</h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">{ICONS.close}</button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <button onClick={() => {toggleBookmark(verseRef); onClose()}} className={`p-3 rounded-lg ${bookmarked ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        Bookmark
                    </button>
                    <button onClick={() => {toggleHighlight(verseRef, 'yellow'); onClose()}} className={`p-3 rounded-lg ${highlighted ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        Highlight
                    </button>
                    <button onClick={() => setIsNoteModalOpen(true)} className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
                        Add Note
                    </button>
                </div>
            </div>
            {isNoteModalOpen && (
                <Modal title={`Note for ${verseRef.book} ${verseRef.chapter}:${verseRef.verse}`} onClose={() => setIsNoteModalOpen(false)}>
                    <textarea 
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        className="w-full h-32 p-2 border rounded-md"
                        placeholder="Write your note..."
                    />
                    <div className="flex justify-end mt-4">
                        <button onClick={handleAddNote} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save Note</button>
                    </div>
                </Modal>
            )}
            <style>{`
                @keyframes slide-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
            `}</style>
        </>
    );
};

export default ActionMenu;
