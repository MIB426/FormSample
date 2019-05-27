import { Component, OnInit } from '@angular/core';
// 引入 Validators
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {
  complexForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      // 表示一定要輸入
      firstName: [null, Validators.required],
      // 表示一定要輸入，而且最短為5個字元，最多為10個字元。有多個規則時用陣列包住。
      lastName: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      gender: [null, Validators.required],
      hiking: [false],
      running: [false],
      swimming: [false]
    })

    // 用來觀察表格元素的變化
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  ngOnInit() {
  }
  // 提交執行的程式
  submitForm(value: any) {
    console.log(value);
  }

}
