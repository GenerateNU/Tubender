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
    <div className="sidebar flex flex-col font-semibold"> {/* Increased base font size for all child components */}
      <ul className="list-none p-0">
        {[...Array(bendCount)].map((_, index) => (
          <li
            key={index}
            className={`mb-2 last:mb-0 ${index === currentBendIndex ? 'text-brand-blue-dark' : 'text-brand-light-grey'}
                        text-center rounded-2xl py-3 px-2 cursor-pointer`} // Increased padding (py-3)
            style={{ backgroundColor: index === currentBendIndex ? '#DBE4EF' : 'transparent' }}
            onClick={() => onSelectBend(index)}
          >
            {`Bend ${index + 1}`}
          </li>
        ))}
      </ul>
      <button
        className="mt-auto py-3 px-2 bg-transparent text-brand-blue-dark rounded-2xl cursor-pointer hover:bg-brand-teal hover:text-brand-white" // Increased padding (py-3) and reaffirmed text size
        onClick={onAddBend}
      >
        Add Bend
      </button>
    </div>
  );
};
export default BendSidebar;
