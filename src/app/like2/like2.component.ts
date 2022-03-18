import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like2',
  templateUrl: './like2.component.html',
  styleUrls: ['./like2.component.scss']
})
export class Like2Component {

  @Input('likesCount') likesCount:number = 0;
  @Input('isActive') isActive:boolean = true ;

  constructor() { }

  ngOnInit(): void {
  }

  onClick2(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
