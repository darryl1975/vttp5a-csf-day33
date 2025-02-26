import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit, DoCheck {

  title = 'vttp5a-csf-day33';
  isShow: boolean = false;

// ? avoid null - if have show or do something
// ! non assertion null (disallow null or undefined by default)
  @ViewChild(ViewChildComponent) childCompoment!: ViewChildComponent;

  @ViewChild("myImg") imageElement?: ElementRef;
  

  ngOnInit(): void {
    this.isShow = true;
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit...");
    console.log(this.imageElement);
  }

  ngDoCheck(): void {
    console.log("DoCheck...");
  }

  changeChildText() {
    this.childCompoment.changeText();
  }
}
