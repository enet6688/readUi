import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as api from './../api/api'
import { HttpProvider } from './../http/http';
import { BaseUI } from '../../common/baseUI';
/*
  Generated class for the BookServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookServicesProvider extends BaseUI {

  constructor(
    public http: HttpProvider
  ) {
    super()
  }

  getBookList(): Observable<any> {
    // super.showLoading(this.loaddingCtrl, "加载中");
    let a = {
      user: '张三',
      age: '18'
    }
    return Observable.create(observable => {
      this.http.get(api.BOOKLIST, a).subscribe(f => {
        observable.next(f);
      }, err => {

      })
    })
  }

  getArticle(id: number): Observable<any> {
    return Observable.create(observable => {
      this.http.get(api.ARTICLE + id + ".json").subscribe(f => {
        observable.next(f)
      }, err => {

      })
    })
  }

  getChapterList(id:number):Observable<any>{
    return Observable.create(observable=>{
      this.http.get(api.CHAPTERLIST).subscribe(f=>{
        observable.next(f);
      })
    })
  }

}



