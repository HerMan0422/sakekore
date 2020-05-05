import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { CreateModule} from './create/create.module';
import { HomeModule} from '.home/home.module';


const routes: Routes = [{
  path: 'welcome',
  loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
},
{
  path: 'create',
  loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
},
{
  path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
