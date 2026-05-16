import { useMdContext } from '../../contexts/MdContextProvider';
import HebrewName from '../HebrewName';

function MdItem({ item }) {
  const { loadMd } = useMdContext();

  return (
    <button
      type="button"
      onClick={() => loadMd(item)}
      className="block w-full cursor-pointer px-6 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      <HebrewName name={item.name} />
    </button>
  );
}

export default MdItem;
