import { Component, OnInit } from '@angular/core';
// 需要引入一些程式庫
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {
  // 新建一個 FormGroup 物件
  complexForm: FormGroup;
  constructor(fb: FormBuilder){
    // 用 FormBuilder 來製造我們的表格
    this.complexForm = fb.group({
      // 定義表格的預設值
      firstName: '',
      lastName: '',
      gender: 'Female',
      hiking: false,
      running: false,
      swimming: false
    })
  }

  ngOnInit() {
  }
  submitForm(value: any): void {
    console.log('Reactive Form Data:', value);
  }
}
