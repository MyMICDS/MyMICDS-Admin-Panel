import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandsComponent } from './commands/commands.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/commands',
    pathMatch: 'full'
  },
  {
    path: 'commands',
    component: CommandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
