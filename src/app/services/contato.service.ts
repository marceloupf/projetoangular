import { Contato } from './../models/contato.model';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStorage: LocalStorageService) { }

  delete(contato: Contato) {
    this.localStorage.remove(contato.id)
  }

  save(contato: Contato) {

    if (this.localStorage.get(contato.nome) === null) {
      this.localStorage.set(contato.id, contato);
    } else {
      alert("Nome de Contato Já cadastrado");
      return false;
    }
  }

  getContato(id: string): Contato {
    return this.localStorage.get(id);
  }
  
  getContaton(nome: string): Contato {
    return this.localStorage.get(nome);
  }

  getAll(): Contato[] {
    return this.localStorage.keys().map(id => this.getContato(id));
  }

}