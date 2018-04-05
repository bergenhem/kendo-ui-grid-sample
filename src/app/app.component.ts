import { Component } from '@angular/core';
import { products } from "./products";
import { customers } from "./customers";
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gridData: any[] = products;
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any[] = customers;

  constructor()
  {
      this.loadItems();
  }

  public pageChange(event: PageChangeEvent): void
  {
      this.skip = event.skip;
      this.loadItems();
  }

  private loadItems(): void
  {
      this.gridView = {
          data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
      };
  }
}
