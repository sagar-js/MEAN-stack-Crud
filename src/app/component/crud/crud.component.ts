import { Component, OnInit } from '@angular/core';

// Access all files
import { CrudService } from 'src/app/service/crud.service';
import { Employee } from 'src/app/model/Employee.model';

// Access all forms package
import { FormControlName, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [CrudService]
})

export class CRUDComponent implements OnInit {
  Data: any = [];
  SingleData: any;
  FormAdd: any = FormGroup;

  constructor(public crud: CrudService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crud.GetAll().subscribe((info: any) => {
      this.Data = info;
    });

    this.FormAdd = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      office: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    });
  }

  GetSingleData(id: any) {
    this.crud.GetById(id).subscribe((info) => {
      this.SingleData = info;
    })
  }

  PostData() {
    this.crud.Post(this.FormAdd.value).subscribe(() => {
      this.ngOnInit();
    });
  }

  DeleteData(id: any) {
    const confirm = window.confirm('Are You Sure you want to delete...')  
    if(confirm){
    this.crud.Delete(id).subscribe(() => {
        this.ngOnInit();
      });
    }
    else{
      
    }
  }
}
