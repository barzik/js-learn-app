import { createContext, useCallback, useContext, useState } from 'react';
import mdList from '../docs/md.json';

const mdFiles = import.meta.glob('/src/docs/**/*.md', {
  import: 'default',
  eager: true,
});

const MdContext = createContext({ md: '', loadMd: () => {} });

function decodeBase64Utf8(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder('utf-8').decode(bytes);
}

function findFirstLeaf(node) {
  if (!node) return null;
  if (!node.children || node.children.length === 0) {
    return node;
  }
  for (const child of node.children) {
    const leaf = findFirstLeaf(child);
    if (leaf) return leaf;
  }
  return null;
}

function toGlobKey(itemPath) {
  if (!itemPath) return null;
  return itemPath.startsWith('/') ? itemPath : `/${itemPath}`;
}

function readMd(itemPath) {
  const key = toGlobKey(itemPath);
  const b64 = key && mdFiles[key];
  if (typeof b64 !== 'string') {
    console.warn('No markdown found for path:', itemPath);
    return '';
  }
  try {
    return decodeBase64Utf8(b64);
  } catch (err) {
    console.error('Failed to decode markdown for path:', itemPath, err);
    return '';
  }
}

function getInitialMd() {
  const initial = findFirstLeaf(mdList);
  return initial ? readMd(initial.path) : '';
}

function MdContextProvider({ children }) {
  const [md, setMd] = useState(getInitialMd);

  const loadMd = useCallback((item) => {
    setMd(readMd(item.path));
  }, []);

  return (
    <MdContext.Provider value={{ md, loadMd }}>{children}</MdContext.Provider>
  );
}

function useMdContext() {
  return useContext(MdContext);
}

export { MdContextProvider, MdContext, useMdContext };
