
import React from 'react';
import { NavItemType } from '../types';
import { NAV_ITEMS, ICONS } from '../constants';

interface BottomNavProps {
  activeTab: NavItemType;
  setActiveTab: (tab: NavItemType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${
              activeTab === item.id ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'
            }`}
          >
            {ICONS[item.id]}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
