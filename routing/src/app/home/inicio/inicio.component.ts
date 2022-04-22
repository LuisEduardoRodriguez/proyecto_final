import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private _Home:ScriptService)
  {
   _Home.Carga(["efecto/index"]);
  }

 ngOnInit(): void {
 }
}
