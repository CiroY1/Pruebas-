import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministradorComponent } from './core/Modelos/agregar-registro-de-administrador/administrador.component';
import { SustentacionesComponent } from './core/Componentes/sustentaciones/sustentaciones.component';
import { RegitroDeAprendizComponent } from './core/Modelos/agregar-regitro-de-aprendiz/regitro-de-aprendiz.component';
import { InstructorComponent } from './core/Modelos/agregar-registro-de-instructor/instructor.component';
import { EvaluadorComponent } from './core/Modelos/agregar-registro-de-evaluador/evaluador.component';
import { CrearReportesComponent } from './core/Componentes/crear-reportes/crear-reportes.component';
import { ModuloPrinciaplComponent } from './core/Modelos/modulo-princiapl/modulo-princiapl.component';
import { CrieteriosEvaluativosComponent } from './core/Modelos/crieterios-evaluativos/crieterios-evaluativos.component';
import { LoginComponent } from './core/Modelos/login/login.component';
import { AyudaComponent } from './core/Modelos/ayuda/ayuda.component';
import { CentroAprendizComponent } from './core/Modelos/centro-aprendiz/centro-aprendiz.component';
import { ListarAptendizAdministradorComponent } from './core/Modelos/listar-aprendiz-administrador/listar-aptendiz-administrador.component';
import { ProyectosFormativosInstructorComponent } from './core/Modelos/proyectos-formativos-instructor/proyectos-formativos-instructor.component';
import { ListarEvaluadorAdministradorComponent } from './core/Modelos/listar-evaluador-administrador/listar-evaluador-administrador.component';
import { ListarInstructorAdministradorComponent } from './core/Modelos/listar-instructor-administrador/listar-instructor-administrador.component';
import { ListarAdministradorAComponent } from './core/Modelos/listar-administrador-administrador/listar-administrador-a.component';





const routes: Routes = [
  { path: 'criterios', component: CrieteriosEvaluativosComponent },
  {path:'admin', component:ModuloPrinciaplComponent },
  {path:'registro-de-aprendiz', component:RegitroDeAprendizComponent },
  {path:'login', component:LoginComponent },
  {path:'sustentaciones', component:SustentacionesComponent},
  {path:'instructor', component:InstructorComponent},
  {path:'evaluador', component:EvaluadorComponent},
  {path:'crear-reportes', component:CrearReportesComponent},
  {path:'centroDeAyuda', component:AyudaComponent},
  {path:'centro-ayuda-aprendiz', component:CentroAprendizComponent},
  {path:'mostrar-aprendiz', component:ListarAptendizAdministradorComponent},
  {path:'mostrar-evaluador', component:ListarEvaluadorAdministradorComponent},
  {path:'mostrar-instructor', component:ListarInstructorAdministradorComponent},
  {path:'mostrar-administrador', component:ListarAdministradorAComponent},
  {path:'proyecto-formativo-instructor',component:ProyectosFormativosInstructorComponent},
  {path:'reguistrar-administradro',component:AdministradorComponent},
  
  {path:'',redirectTo:'/admin', pathMatch:"full"},
  // {path:'**', redirectTo:'/admin'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
