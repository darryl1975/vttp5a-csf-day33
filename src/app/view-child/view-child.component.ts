import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements OnInit {

  childText : String = "Default String";

  productForm: FormGroup;
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private fb:FormBuilder) {
 
    this.productForm = this.fb.group({
      products: this.fb.array([]) ,
    });
  
  }
 
  // retrieve all products in the FormArray
  get products() : FormArray {
    return this.productForm.get("products") as FormArray
  }
 
  newProduct(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      qty: ''
    })
  }
 
  addProduct() {
    this.products.push(this.newProduct());
  }
 
  removeProduct(i:number) {
    this.products.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.productForm.value);
  }

  changeText() {
    this.childText = "Updated by ViewChild";
  }

}
