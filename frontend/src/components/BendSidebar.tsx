import React from 'react';

interface BendSidebarProps {
  currentBendIndex: number;
  bendCount: number;
  onSelectBend: (index: number) => void;
  onAddBend: () => void;
}

const BendSidebar: React.FC<BendSidebarProps> = ({
  currentBendIndex,
  bendCount,
  onSelectBend,
  onAddBend,
}) => {
  return (
    <div className="sidebar flex flex-col text-lg"> {/* Increased base font size for all child components */}
      <ul className="list-none p-0">
        {[...Array(bendCount)].map((_, index) => (
          <li
            key={index}
            className={`mb-2 last:mb-0 ${index === currentBendIndex ? 'text-black' : 'text-gray-400'} 
                        text-center rounded-2xl py-3 cursor-pointer shadow-sm`} // Increased padding (py-3)
            style={{ backgroundColor: index === currentBendIndex ? '#DBE4EF' : 'transparent' }}
            onClick={() => onSelectBend(index)}
          >
            {`Bend ${index + 1}`}
          </li>
        ))}
      </ul>
      <button
        className="mt-auto py-3 bg-transparent text-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 text-lg" // Increased padding (py-3) and reaffirmed text size
        onClick={onAddBend}
      >
        + add bend
      </button>
    </div>
  );
};

export default BendSidebar;
