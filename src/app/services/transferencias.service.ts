import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

/**
 * Um service permite a anotacao Injectable que eh semelhante
 * ao Autowired do Spring. Permite a injecao de uma instancia
 * da classe sempre que chamado no construtor da classe em
 * que se deseja usar a dependencia
 */

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  /**
   * inicializa o array de transferencias
   */
  private listaTransferencia: any[];

  /**
   * atribui a url dos servidor rest para a variavel url
   */
  private url = 'http://localhost:3000/transferencias';

  /**
   * Construtor inicializa a listatransferencia do service
   * Tambem recebe a injecao do httpClient que permite a
   * utlizacao de metodos dos verbos http
   */
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  /**
   * Getter do atributo privado listaTransferencia. Permite
   * invocar a listaTransferencia fora da classe
   */
  get transferencias() {
    return this.listaTransferencia;
  }

  /**
   * @returns
   * Metodo que retorna a todas as transferencias
   * Utiliza o metodo get do httpClient recebendo a url da
   * api como parametro
   * Recebe um generics com o array de Transferencia que eh
   * um Observable que fica observando o array e atualiza
   * de forma assincrona qualquer alteracao
   */
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  /**
   * Metodo que realiza o post de uma nova transferencia na api
   * Retorna um Observable das transferencias
   * apos realizar o cadastramento dos dados com o metodo post
   * do httpClient, tambem de forma assincrona
   * @param transferencia
   */
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.populaData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  /**
   * Metodo que permite inserir o atributo data na transferencia
   * oriunda do app-component
   * @param transeferencia
   */
  private populaData(transeferencia: any) {
    transeferencia.data = new Date();
  }
}
