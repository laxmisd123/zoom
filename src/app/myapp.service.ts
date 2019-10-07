import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
url = 'https://2328e3ea.ngrok.io/api/KB/GetArticles?getall=0&categ=';
url1 = 'https://2328e3ea.ngrok.io/api/KB/InsertUpdateKBAricles';
url2 = 'https://2328e3ea.ngrok.io/api/KB/GetReadArticle?ArticleId=';
paginate = 'https://2328e3ea.ngrok.io/api/KB/GetArticles?getall=0&categ=&';
search = 'https://2328e3ea.ngrok.io/api/KB/GetArticles?getall=0&SearchString=';
concat: string;

constructor(private http: HttpClient) { }
  getAllkbArticles() {
    return this.http.get(this.url);
  }
  addIndustry(item: number) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url1, body, { headers: head });
  }
  editIndustry(item: number) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url1 , body, { headers: head });
  }
  onReadIndustry(id: number) {

    return this.http.get(this.url2 + id);
  }
  getPageByNumber(num: number) {
      this.concat = 'categ=' + '&Page=' +  num;
      return this.http.get(this.paginate + this.concat);
  }
  getSearchById(value: string) {
    return this.http.get(this.search + value);
  }
}


