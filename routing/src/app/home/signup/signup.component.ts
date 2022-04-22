import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor( private _Signup:ScriptService)
  {
   _Signup.Carga(["efecto/index"]);
  }

 ngOnInit(): void {
 }
}
