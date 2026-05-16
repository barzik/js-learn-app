import SidebarMenu from './components/SidebarMenu';
import MainContainer from './components/MainContainer';
import { MdContextProvider } from './contexts/MdContextProvider';
import mdList from './docs/md.json';

function App() {
  return (
    <MdContextProvider>
      <main
        data-testid="app-main"
        className="flex h-screen w-screen overflow-hidden bg-white text-gray-900"
      >
        <aside className="w-72 shrink-0 overflow-y-auto border-l border-gray-200 bg-gray-50">
          <SidebarMenu mdList={mdList.children || []} />
        </aside>
        <MainContainer />
      </main>
    </MdContextProvider>
  );
}

export default App;
