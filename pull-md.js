const spawn = require('child_process').spawn;

const LOCATION = './src/docs';

if (process.env.JS_LEARN_APP) {
  console.log('Found JS_LEARN_APP', process.env.JS_LEARN_APP);
  
  console.log('Make sure to delete MANUALLY all src/docs');

  const gitClone = spawn('git', ['clone', process.env.JS_LEARN_APP], {cwd: LOCATION});
  
  gitClone.stdout.on('data', (data) => {
		console.log(`stdout: ${data}`);
	});

	gitClone.stderr.on('data', (data) => {
		console.log(`stderr: ${data}`);
	});

	gitClone.on('close', (code) => {
    if (code === 0) {
      console.log('Success!');
    } else {
      console.log(`git clone error. exit code: ${code}`);
    }
	});
} else {
  console.log('No JS_LEARN_APP environment variable.')
}
