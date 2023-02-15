import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // value assign
  messagefromparent = 'hello from parent';

  view:boolean = false;
  list?:string;

  viewD(){
    this.view = !this.view;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
