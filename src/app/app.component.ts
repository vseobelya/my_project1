import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  goods: string[] = ['Бананы', 'Яблоки', 'Апельсины'];
  prices: number[] = [89, 60, 75];
  amount: number[] = [0, 0, 0];
  sums: number[] = [0, 0, 0];
  count = 0;

  countadd(){
    this.count++;
  }

  amountadd(i: number){
    this.amount[i]++;
  }

  amountsubs(i: number){
    if(this.amount[i] > 0)
        this.amount[i]--;
  }
}
