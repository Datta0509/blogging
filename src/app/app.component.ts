import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';
  data='hello code'
  num=100
  getname(name:any){
    alert('function called')
  }
displayval = ' ';
  getdata(val:any){
    console.warn(val)
     this.displayval = val 

  }
}
