import { useState } from 'react';
import MdItem from '../MdItem';
import HebrewName from '../HebrewName';

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MainItem({ mainItem }) {
  const [open, setOpen] = useState(false);
  const items = mainItem.children || [];

  return (
    <li className="border-b border-gray-200">
      <button
        type="button"
        data-cy="list-item"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-right text-sm font-medium hover:bg-gray-100"
      >
        <span>
          <HebrewName name={mainItem.name} />
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul data-cy={`open-item-${open}`} className="bg-white">
          {items.map((item, index) => (
            <li key={item.path || index} data-cy="sub-item">
              <MdItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MainItem;
