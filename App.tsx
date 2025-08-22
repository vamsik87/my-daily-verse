
import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import BottomNav from './components/BottomNav';
import BibleReader from './components/BibleReader';
import SearchPanel from './components/SearchPanel';
import NotesPanel from './components/NotesPanel';
import PrayersPanel from './components/PrayersPanel';
import BookmarksPanel from './components/BookmarksPanel';
import { NavItemType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItemType>('read');

  const renderContent = () => {
    switch (activeTab) {
      case 'read':
        return <BibleReader />;
      case 'search':
        return <SearchPanel />;
      case 'notes':
        return <NotesPanel />;
      case 'prayers':
        return <PrayersPanel />;
      case 'bookmarks':
        return <BookmarksPanel />;
      default:
        return <BibleReader />;
    }
  };

  return (
    <AppProvider>
      <div className="h-screen w-screen bg-gray-50 font-sans text-slate-800 flex flex-col max-w-lg mx-auto shadow-2xl">
        <main className="flex-1 overflow-y-auto pb-20">
          {renderContent()}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </AppProvider>
  );
};

export default App;
