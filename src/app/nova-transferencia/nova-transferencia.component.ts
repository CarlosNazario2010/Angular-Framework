import { Transferencia } from './../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

/* O decorator @Component direciona o app-nova-transferencia para o nova-transferencia.component.html
 * e adiciona urls para o template HTML e estilo CSS para a criacao do component
 * Em suma ele cria o component
 */
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  /**
   * A anotacao @Output dentro de um @Component propaga os dados para fora
   * da classe. Devolve a resposta para quem o chamou. Pode referenciar um
   * EventEmitter que possui os metodos para realizar a propagacao dos dados
   */
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  /**
   * Injecao da dependencia de TransferenciasService e do router
   * @param service
   * @param router
   */
  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {
    console.log('Solicitado nova transferencia');

    /**
     * metodo emit transmite o objeto ao template, cuja variavel eh $event
     * no proprio template
     * Comentado pois eh feito de forma diferente a seguir
     */
    // this.aoTransferir.emit({ valor: this.valor, destino: this.destino });

    /**
     * criacao do objeto Transferencia que recebera os valores
     */
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    /**
     * Utiliza o metodo adicionar do service para adicionar transferencia
     * o metodo adicionar retorna um observable. Se o retorno, que eh
     * assincrono, for um sucesso da o console.log no resultado e limpa os
     * campos e navega para o componente de extrato. Em caso de erro
     * informa o erro no console
     */
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  /**
   * limpaCampos() reseta os campos de valor e destino para uma nova operacao
   */
  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
