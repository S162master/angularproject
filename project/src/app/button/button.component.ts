import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 onSubmit(form: NgForm){
    console.log(form);
    console.log(Object);
  }


  

  constructor() { }

  ngOnInit() {
    
  }
}
