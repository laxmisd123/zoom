import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
url = 'https://2612f72e.ngrok.io/api/KB/GetArticles?getall=0&categ=';
url1 = 'https://2612f72e.ngrok.io/api/KB/InsertUpdateKBAricles';
url2 = 'https://2612f72e.ngrok.io/api/KB/GetReadArticle?ArticleId=';
paginate = 'https://2612f72e.ngrok.io/api/KB/GetArticles?getall=0&categ=&';
search = 'https://2612f72e.ngrok.io/api/KB/GetArticles?getall=0&SearchString=';
concat: string;

  constructor(private _http: HttpClient) { }
  getAllkbArticles() {
    return this._http.get(this.url);
  }
  addIndustry(item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url1, body, { headers: head });
  }
  editIndustry(item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url1 , body, { headers: head });
  }
  onReadIndustry(id) {

    return this._http.get(this.url2 + id);
  }
  getPageByNumber(num) {
      this.concat = 'categ='+'&Page='+ num;
      return this._http.get(this.paginate + this.concat);
  }
  getSearchById(value) {
    return this._http.get(this.search + value);
  }
}


