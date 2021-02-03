const dirTree = require('directory-tree');
const fs = require('fs');

console.log('Starting to build markdown JSON file');

const filteredTree = dirTree('./src/docs', { extensions: /\.md/ });

const data = JSON.stringify(filteredTree, null, 2);

try {
  fs.writeFileSync('./src/docs/md.json', data);
  console.log('Finished to build markdown JSON file');
} catch(e) {
  console.error('Failed to write data to md.json');
  console.log(e);
}
