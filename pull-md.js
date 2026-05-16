import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, cpSync } from 'node:fs';
import { join } from 'node:path';

const DOCS_DIR = './src/docs';
const KEEP = new Set(['.gitkeep', 'md.json']);

const repoUrl = process.env.MD_REPO_URL || process.env.JS_LEARN_APP;

if (!repoUrl) {
  console.log(
    'No MD_REPO_URL environment variable.\n' +
      'Example:\n' +
      '  MD_REPO_URL="git@github.com:barzik/js-learn-heb-md.git" node pull-md.js\n' +
      'Or with a local path:\n' +
      '  MD_REPO_URL="/path/to/local/md-repo" node pull-md.js',
  );
  process.exit(0);
}

console.log(`Pulling markdown content from: ${repoUrl}`);

mkdirSync(DOCS_DIR, { recursive: true });

console.log(`Cleaning ${DOCS_DIR} ...`);
for (const entry of readdirSync(DOCS_DIR)) {
  if (KEEP.has(entry)) continue;
  rmSync(join(DOCS_DIR, entry), { recursive: true, force: true });
}

const isLocalPath = existsSync(repoUrl) && statSync(repoUrl).isDirectory();

try {
  if (isLocalPath) {
    console.log('Detected local directory, copying files...');
    for (const entry of readdirSync(repoUrl)) {
      if (entry === '.git') continue;
      cpSync(join(repoUrl, entry), join(DOCS_DIR, entry), { recursive: true });
    }
  } else {
    console.log('Cloning git repository...');
    execFileSync('git', ['clone', '--depth=1', repoUrl, '.'], {
      cwd: DOCS_DIR,
      stdio: 'inherit',
    });
    rmSync(join(DOCS_DIR, '.git'), { recursive: true, force: true });
  }
  console.log('Success!');
} catch (err) {
  console.error('Failed to pull markdown content.');
  console.error(err.message);
  process.exit(1);
}
