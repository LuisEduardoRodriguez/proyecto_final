import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private _Login:ScriptService)
  {
   _Login.Carga(["efecto/index"]);
  }

 ngOnInit(): void {
 }

}
