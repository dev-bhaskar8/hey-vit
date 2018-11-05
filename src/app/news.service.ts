import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let API_URL  = 'https://newsapi.org/v2/everything?q=(vit AND vellore) OR vellore&language=en&sortBy=relevancy&pageSize=100';
let API_KEY = '2a88127d0c074ea784d9f508d780579e';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(){

    //return this.http.get('${API_URL}&apiKey=${API_KEY}')
    return this.http.get(API_URL+'&apiKey='+API_KEY)

  }
 // getUsers() {
   // return this.http.get('https://reqres.in/api/users')
 // }



}
