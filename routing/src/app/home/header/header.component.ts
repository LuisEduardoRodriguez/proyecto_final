import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _Script:ScriptService)
  {
   _Script.Carga(["efecto/index"]);
  }

 ngOnInit(): void {
 }
}
