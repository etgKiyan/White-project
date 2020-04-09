import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BusinessService } from '../Business.service';
import Business from '../Business';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bsProduct: Business [];
  bsEditProduct: Business [];

  constructor(private route: ActivatedRoute, 
    private router: Router,private bsList: BusinessService) { }

  ngOnInit() {
    this.bsList.getProducts().subscribe((data: any) => {
      this.bsProduct = data.rows;
      console.log(data);
    });
  }

  updateProduct(product){
    this.bsList.updateProduct(product.id,product.product_name,product.product_price).subscribe((data: Business[])=>{
      // console.log
      // this.bsProduct = this.bsProduct.map((item) => {
      //   if(item.id == product.id){
      //     item.product_name = product.product_name;
      //     item.product_price = product.product_price
      //   }
      //   return item;
      // });
      console.log(data);
    });
    // In case i want to use Promise
    //const result = await this.bsList.updateProduct(product.id,product.product_name,product.product_price).toPromise();
    //console.log("after edit done")
  }

 deleteProduct(id,name){
   this.bsList.deleteProducts(id).subscribe((data)=>{
    this.bsProduct = this.bsProduct.filter((item:any) => item.product_name != name);
   }); 
 } 
}
