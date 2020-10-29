import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  user: string = '';
  password: string = '';

  validar():void {
    if (this.password.length > 4 && /\d/.test(this.password)) {
      this.router.navigate(['usuarios'])
    }else{
      this.router.navigate(['registro'])
    }
  }

}

