import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ResultadosService} from '../../services/resultados.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
declare const $;
@Component({
  selector: 'app-associacao',
  templateUrl: './associacao.component.html',
  styleUrls: ['./associacao.component.scss']
})
export class AssociacaoComponent implements OnInit {
  public resultados: any;

  public filtro: FormGroup;

  public inscricaoPegarResultados: Subscription;

  public totalResultados: any;

  constructor(private fb: FormBuilder,
              private resultadosService: ResultadosService) {
    this.filtro = this.fb.group({
      ano: new FormControl('2009', Validators.required),
      curso: new FormControl('4', Validators.required)
    });
  }

  ngOnInit() {
    this.pegarResultados();
  }

  pegarResultados() {
    if (this.filtro.controls.ano.value == '2009')
      this.totalResultados = '2419';
    if (this.filtro.controls.ano.value == '2012')
      this.totalResultados = '9459';
    if (this.filtro.controls.ano.value == '2015')
      this.totalResultados = '9727';

    let ano = this.filtro.controls.ano.value;
    let curso = this.filtro.controls.curso.value;
    this.inscricaoPegarResultados = this.resultadosService.resultadosAssociacao(ano, curso)
      .subscribe((res) => {
        this.inscricaoPegarResultados.unsubscribe();
        this.resultados = res;
      }, (error) => {
        console.log(error);
        this.inscricaoPegarResultados.unsubscribe();
      });
  }
}