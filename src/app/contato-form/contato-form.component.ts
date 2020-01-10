import { ContatoService } from './../services/contato.service';
import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Contato } from '../models/contato.model';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

type SN = string | number;

interface Pattern {
  [character: string]: {
    pattern: RegExp;
  };
}

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css'],
})


export class ContatoFormComponent implements OnInit {

  public pattern: Pattern = {
    P: {
      pattern: new RegExp('\\d'),
    },
  };
  
  public customMaska: [string, Pattern];

  @Input() contato: Contato;
  @Output() saveContato = new EventEmitter()


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();   
 
  constructor() { 

    this.customMaska = ['PPP-PPP-PPP', this.pattern];
    
  }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
   this.saveContato.emit(form)
  }



}