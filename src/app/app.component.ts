import { Component } from '@angular/core';

class Good {
  name: string;
  price: number;
  amount: number;
  constructor(name: string, price: number, amount: number) {

        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

const test=[
  {"name": "Бананы", "price": 89, "amount": 0},
  {"name": "Яблоки", "price": 60, "amount": 0},
  {"name": "Апельсины", "price": 75, "amount": 0}

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  goods: Good[] = test;
  title = 'my-project';
	newgood_name: string = '';
	newgood_price: number = 0;


  amountadd(i: number){
    this.goods[i].amount++;
  }

  amountsubs(i: number){
    if(this.goods[i].amount > 0)
        this.goods[i].amount--;
  }

  addnewgood(name: string, price: number){
    this.goods.push(new Good(this.newgood_name, this.newgood_price, 0));
		this.newgood_name = '';
		this.newgood_price = 0;
  }

	deletegood(del_good: any){
		let index = this.goods.indexOf(del_good);
		if(index > -1)
				this.goods.splice(index, 1);
	}
}
