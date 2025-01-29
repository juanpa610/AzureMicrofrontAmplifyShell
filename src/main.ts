// import('./bootstrap')
// 	.catch(err => console.error(err));


import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
	loadRemoteEntry(`https://dev.d11uf2zun7xzcz.amplifyapp.com/remoteEntry.js`, 'mfe1')
]).catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));