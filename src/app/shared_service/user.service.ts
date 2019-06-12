import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {User} from '../user';
import { Observable, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string="http://python-backend-1610078318.ap-south-1.elb.amazonaws.com";

  private user = new User();

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl+'/users',httpOptions);
            
  }

  getUser(id:Number){
    return this.http.get(this.baseUrl+'/user'+id,httpOptions);
             
  }

  deleteUser(id:Number){
    return this.http.delete(this.baseUrl+'/delete/'+id,httpOptions);
             
  }

  createUser(user:User){
        return this.http.post(this.baseUrl+'/add',JSON.stringify(user),httpOptions);
              
  }

  updateUser(user:User){

    return this.http.put(this.baseUrl+'/update',JSON.stringify(user),httpOptions);
    
  }

  setter(user:User){
    this.user=user;
  }

 getter(){
   return this.user;
 }
  
}
