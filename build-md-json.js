import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import dirTree from 'directory-tree';

const DOCS_DIR = './src/docs';
const OUTPUT_PATH = './src/docs/md.json';

console.log('Starting to build markdown JSON file');

const filteredTree = dirTree(DOCS_DIR, { extensions: /\.md$/ }) ?? {
  name: 'docs',
  path: DOCS_DIR,
  children: [],
};

const data = JSON.stringify(filteredTree, null, 2);

try {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, data);
  console.log('Finished building markdown JSON file');
} catch (err) {
  console.error('Failed to write data to md.json');
  console.error(err);
  process.exit(1);
}
