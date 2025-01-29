import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

function loadMFE(url: string, module: string) {
    return loadRemoteModule({
        type: 'module',
        remoteEntry: `${url}/remoteEntry.js`,
        exposedModule: `./${module}`,
    })
    .then(m => m.Mfe1Module)
    .catch((e) => import('./error-page/error-page.module').then((m) => {
        console.error(e,'Error loading remote entry');
        return m.ErrorPageModule
    }));
}

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mfe1'
    },
    {
        path: 'mfe1',
        loadChildren: () => loadMFE('https://dev.d11uf2zun7xzcz.amplifyapp.com', 'Mfe1Module')
    },

];
