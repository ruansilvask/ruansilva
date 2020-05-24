import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  mostrarMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.mostrarMenu = !this.mostrarMenu;
  }


}
