import { Routes } from '@angular/router';
import { AlunoComponent } from './components/aluno/aluno-component';
import { HomeComponent } from './components/home/home-component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alunos', component: AlunoComponent } 
];
