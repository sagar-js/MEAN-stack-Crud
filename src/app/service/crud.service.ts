import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as rxjs from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  // declare url path for database
  readonly baseUrl = 'http://localhost:3000/employees';

  // declare variables
  Employees?: any = [];
  SelectEmp?: any;

  // declare http for get, post, update, delete
  constructor(private http: HttpClient) { }

  // Get Data by ID
  GetById(_id: any) {
    return this.http.get(`${this.baseUrl}/${_id}`);
  }

  // Get All Data 
  GetAll() {
    return this.http.get(this.baseUrl);
  }

  // Add Data to database
  Post(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  // update data in database
  Put(data: any) {
    return this.http.put(`${this.baseUrl}/${data._id}`, data);
  }

  // Delete data from database
  Delete(_id: any) {
    return this.http.delete(`${this.baseUrl}/${_id}`);
  }

}
