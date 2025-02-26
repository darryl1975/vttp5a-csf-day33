import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {

  childText : String = "Default String";

  changeText() {
    this.childText = "Updated by ViewChild";
  }

}
