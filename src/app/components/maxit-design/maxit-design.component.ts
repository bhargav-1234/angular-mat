import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maxit-design',
  templateUrl: './maxit-design.component.html',
  styleUrls: ['./maxit-design.component.css']
})
export class MaxitDesignComponent implements OnInit {
  

  email: string = "Aman@gmail.com";
  updateName(input: string) {
      this.email = input;
  }
  constructor() { }

  ngOnInit() {
  }

}
