import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName:string = 'Zafar';
  lastName:string = 'Hussain';
  gender:string = 'Male';
  age:number = 22;
  showDetails:boolean = false;
  toggleShow() :void 
  {
    this.showDetails=!this.showDetails;
  }

  nickName:string = 'Zaff';
  address:string = 'Mangalore';

  players:any = [
    {id:100, name:'Ronaldo', gender:'Male', salary:10000000, birthday:'7/2/1986'},
    {id:101, name:'Messi', gender:'Male', salary:1000000, birthday:'8/2/1989'},
    {id:102, name:'Pele', gender:'Male', salary:10000010, birthday:'7/3/1956'},
    {id:103, name:'Maradona', gender:'Male', salary:100000, birthday:'17/12/1963'}
  ];
}
