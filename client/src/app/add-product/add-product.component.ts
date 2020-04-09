import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as alertify from 'alertifyjs';
import { BusinessService } from '../Business.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup;
  productId: number;
  // Flag for edit mode
  editMode:boolean = false;
  constructor(
    private formBuilder: FormBuilder, 
    private bsAdd: BusinessService,
    private route:ActivatedRoute) {

      this.createForm();
      this.route.paramMap.subscribe((data:any) =>{
        if(data.params.id != null){
          this.editMode = true;
          this.productId = data.params.id
          this.myForm.setValue({
            product_name: data.params.product_name,
            product_price: data.params.product_price,
          })
        }
      });

     }

  ngOnInit() {
  }

  createForm(){
    this.myForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_price: ['', Validators.required],
    });
  }
  submit(product_name, product_price){
    if(!this.editMode){
      console.log("add");
      this.bsAdd.addProducts(product_name, product_price).subscribe((data)=> {
        alertify.notify('Added Successfuly', 'success', 2)
      });
    }
    else{
      console.log(this.editMode);
      console.log("edit");
      this.bsAdd.updateProduct(this.productId,product_name, product_price).subscribe((data)=>{
        alertify.notify('Edit Successfuly', 'success', 2);
      });
    }

  }
}


