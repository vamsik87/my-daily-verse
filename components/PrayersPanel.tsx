
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Prayer } from '../types';
import { ICONS } from '../constants';
import Modal from './Modal';

const PrayersPanel: React.FC = () => {
    const { prayers, addPrayer, updatePrayer, deletePrayer } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPrayer, setCurrentPrayer] = useState<Partial<Prayer>>({});
    
    const sortedPrayers = [...prayers].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const handleSave = () => {
        if (currentPrayer.title && currentPrayer.text) {
            if (currentPrayer.id) {
                updatePrayer(currentPrayer as Prayer);
            } else {
                addPrayer({title: currentPrayer.title, text: currentPrayer.text});
            }
            setIsModalOpen(false);
            setCurrentPrayer({});
        }
    };
    
    const openAddModal = () => {
        setCurrentPrayer({});
        setIsModalOpen(true);
    };

    const toggleAnswered = (prayer: Prayer) => {
        updatePrayer({ ...prayer, isAnswered: !prayer.isAnswered });
    };

    return (
        <div className="p-4">
            <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 py-2 -mx-4 px-4 border-b mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Prayer Journal</h1>
                <button onClick={openAddModal} className="p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700">
                    {ICONS.plus}
                </button>
            </header>

            <div className="mt-6 space-y-4">
                {sortedPrayers.length > 0 ? (
                    sortedPrayers.map(prayer => (
                        <div key={prayer.id} className={`p-4 border rounded-lg shadow-sm transition-colors ${prayer.isAnswered ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className={`font-bold text-lg ${prayer.isAnswered ? 'text-green-800' : 'text-slate-800'}`}>{prayer.title}</p>
                                    <p className="mt-2 text-slate-600">{prayer.text}</p>
                                    <p className="text-xs text-gray-400 mt-2">{new Date(prayer.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <button onClick={() => deletePrayer(prayer.id)} className="p-1 text-gray-400 hover:text-red-500">{ICONS.trash}</button>
                                    <button onClick={() => toggleAnswered(prayer)} className={`p-1 rounded-full ${prayer.isAnswered ? 'text-green-600 bg-green-200' : 'text-gray-400 hover:bg-gray-200'}`}>{ICONS.check}</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 pt-8">Your prayer journal is empty. Add a prayer to begin.</p>
                )}
            </div>

            {isModalOpen && (
                <Modal title={currentPrayer.id ? 'Edit Prayer' : 'New Prayer'} onClose={() => setIsModalOpen(false)}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={currentPrayer.title || ''}
                            onChange={(e) => setCurrentPrayer({...currentPrayer, title: e.target.value})}
                            className="w-full p-2 border rounded-md"
                        />
                        <textarea
                            placeholder="Your prayer..."
                            value={currentPrayer.text || ''}
                            onChange={(e) => setCurrentPrayer({...currentPrayer, text: e.target.value})}
                            className="w-full h-32 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default PrayersPanel;
