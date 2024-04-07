import { Component, OnInit } from '@angular/core';
import { Istd } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  stdArr:Array<Istd>=[
    {
      fname:"Ankita",
      lname:"Kulkarni",
      email:"ankita123@gmail.com",
      contact:1234567890
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  OnAdd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
if(fname.value&&lname.value&&email.value&&contact.value){
  let std:Istd={
    fname:fname.value,
    lname:lname.value,
    email:email.value,
    contact:+contact.value
  }
  console.log(std)

  fname.value=lname.value=email.value=contact.value=''
  this.stdArr.push(std)
}
  }
}
