import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects.component';
import {ProjectListComponent} from './project-list/project-list.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent , children: [
    {path: 'home', component: ProjectListComponent},
    { path: 'geo', component: GeolocationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
