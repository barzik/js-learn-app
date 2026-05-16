import MainItem from '../MainItem';

function SidebarMenu({ mdList }) {
  return (
    <nav data-cy="nav-list" className="py-2">
      <ul className="flex flex-col">
        {mdList.map((item, index) => (
          <MainItem key={item.path || index} mainItem={item} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarMenu;
