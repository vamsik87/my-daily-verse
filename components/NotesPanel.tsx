
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { ICONS } from '../constants';

const NotesPanel: React.FC = () => {
    const { notes, deleteNote } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNotes = useMemo(() => {
        return notes
            .filter(note => 
                note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                `${note.book} ${note.chapter}:${note.verse}`.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [notes, searchTerm]);

    return (
        <div className="p-4">
             <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 py-2 -mx-4 px-4 border-b mb-4">
                <h1 className="text-2xl font-bold text-slate-900">My Notes</h1>
                <div className="mt-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search notes..."
                        className="w-full p-2 border rounded-md bg-white shadow-sm"
                    />
                </div>
            </header>
            
            <div className="mt-6 space-y-4">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                        <div key={note.id} className="p-4 border rounded-lg bg-white shadow-sm">
                           <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-indigo-700">{note.book} {note.chapter}:{note.verse}</p>
                                    <p className="mt-2 text-slate-600">{note.text}</p>
                                    <p className="text-xs text-gray-400 mt-2">{new Date(note.createdAt).toLocaleDateString()}</p>
                                </div>
                                <button onClick={() => deleteNote(note.id)} className="p-1 text-gray-400 hover:text-red-500">
                                    {ICONS.trash}
                                </button>
                           </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 pt-8">You have no notes. Tap a verse to add one.</p>
                )}
            </div>
        </div>
    );
};

export default NotesPanel;
