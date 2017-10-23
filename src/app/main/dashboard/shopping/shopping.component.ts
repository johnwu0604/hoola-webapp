import { Component, OnInit } from '@angular/core'
import { ShoppingService } from '../../../service/shopping.service'
import {Router} from "@angular/router";


@Component({
  selector: 'shopping-cmp',
  templateUrl: 'shopping.component.html',
  styleUrls: ['shopping.component.css'],
  providers: [ ShoppingService ]
})
export class ShoppingComponent implements OnInit {

  public items: any = []
  public model: any = {}

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllShoppingItems()
  }


  public getAllShoppingItems() {
    this.shoppingService.getAllShoppingItems()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.items = result.items
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public addShoppingItem() {
    this.shoppingService.addShoppingItem(this.model.description)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.items = result.items
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
    this.model = []
  }


  public deleteTask(itemId) {
    this.shoppingService.deleteShoppingItem(itemId)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.items = result.items
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
