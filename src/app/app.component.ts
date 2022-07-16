import { TransferenciasService } from './services/transferencias.service';
import { Component } from '@angular/core';

/* O decorator @Component direciona o app-root para app.component.html
 * e adiciona urls para o template HTML e estilo CSS
 * Todo selector precisa do prefixo app, pois o arquivo angular.json
 * configura o prefixo como app para todos os components
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  /**
   * injecao do service TransferenciaService no construtor da classe
   */
  constructor(private service: TransferenciasService) {}

  /**
   * O AppComponent transfere ao service a responsabilidade do operacao
   * Comentado visto que foi utlizado os metodos do modulo HttpClient
   * nos services da aplicacao
   */
  //transferir($event) {
  //  this.service.adicionar($event);
  //}
}
