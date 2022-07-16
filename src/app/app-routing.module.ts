import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

/**
 * o atributo routes recebe uma array de routes e permite redirecionar as rotas
 * linkando o path com o component, ou realizar um redirect
 */
export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
];

/**
 * Anotocao que cria o modulo da classe.
 * Deve ser informada nos imports arquivo app.module.ts
 * O metodo forRoot informa as rotas para o modulo principal.
 * Se fosse um modulo interno da aplicacao as rotas seriam
 * mapeadas pelo metodo forChild
 * Eh importado o RouterModule, utiliza-se o metodo forRoot
 * para inserie as rotas e eh exportado junto com a classe
 * AppRoutingModule para que o modulo que utilizar a classe,
 * podera usar os metodos do RouterModule as rotas configuradas no
 * AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
