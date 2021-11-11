import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiServiceService {
  url:any = "https://rickandmortyapi.com/api/character"
  constructor(
    private http:HttpClient
  ) 
  {
    
  }
  getCaracter(){
    return new Promise((resolve)=>{
      this.http.get(this.url).subscribe(data=>{
        let datos:any = data
        resolve (datos);
      },err=>{
        resolve({
          error:true
        })
      })
    })
  }
}
