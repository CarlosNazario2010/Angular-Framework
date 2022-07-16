import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

/**
 * Para criar um component de forma mais simplificada
 * podemos dar um ng generate component no terminal
 * Este comando tambem cria um arquivo spec.ts para
 * realizar algumas configuracoes para o component
 */

/**
 * Foi criado a pasta dados que possui um arquivo json usado
 * para simular uma api. Para rodar o servidor que roda essa
 * simulacao eh so rodar no terminal dentro do diretorio dados:
 * json-server --watch db.json
 * O servidor eh levantado na porta 3000 com a url:
 * http://localhost:3000/transferencias
 */

/**
 * Component extrato
 */
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  /**
   * A anotacao @Input permite receber o valor da variavel do template
   * na propriedade transferenciasEC (ExtratoComponent)
   * Comentado visto que usaremos routes desta vez, ao inves dos inputs
   * ou outputs, como foi feito no NovaTransferenciaComponent
   */
  //@Input() transferenciasEC: any[] = [];

  /**
   * Cria o array de transferencias no ExtratoComponent
   */
  transferenciasEC: any[];

  /**
   * injecao do service TransferenciaService no construtor da classe
   */
  constructor(private service: TransferenciasService) {}

  /**
   * Metodo executado ao inicializar o component
   * Invoca os metodos criados nos services
   */
  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferenciasEC = transferencias;
    });
  }
}
