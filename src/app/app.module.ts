import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/** Cada component criado deve ser declarado nos declarations
 * Grande parte das classes utilizadas sao de APIs baixadas
 * automaticamente na criacao do projeto e podem ser visualizadas
 * no package.json
 * As classe NgModule, BrowserModule e AppComponent em geral sao
 * sao importadas automaticamente na criacao do projeto
 * A classe FormsModule permite a manipulacao dos dados informados
 * no formulario
 * Nos providers pode ser colocado o provider LOCALE_ID para informar
 * os padroes brasileiros de formatacao
 * O registerLocaleData recebe o local e um id, e permite a formatacao
 * para o padrao local
 * O provide DEFAULT_CURRENCY_CODE permite a formatacao do padrao
 * monetario em reais
 * O HttpClientModule permite usar a classe HttpClient para utilizacao
 * de metodos que utilizam os verbos HTTP
 * O AppRoutingModule permite configurar rotas para os components
 */

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
