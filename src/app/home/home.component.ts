import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Industry } from '../industry';
import { ArticleService } from '../myapp.service';
import {MessageService, Message} from 'primeng/api';
import { Pagerinfo } from '../pagerinfo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: Industry[] = [];
  all_articles: Industry[] = [];
  kb: FormGroup;
  updatedid: any;
  arrbyid: Industry[] = [];
  all_arrbyid: Industry[] = [];
  article_id: any;
  arr1: Industry[] = [];
  article_id1: any;
  closeResult: string;
  arrdata: Industry;
  msgs: Message;
  arr3: Pagerinfo[];
  pageSize: string;
  totalItem: string;
  totalPages: string;
  Page: number = 1;
  arr2: Industry[];
  page: Pagerinfo;

  constructor(private _data: ArticleService,
              private fb: FormBuilder,
              private modalService: NgbModal,
              private messages: MessageService,
              private config: NgbModalConfig) {
        config.backdrop = 'static';
        config.keyboard = false;
  }

  ngOnInit() {

    console.log(this.article_id);
    this.kb = this.fb.group({
      articleId: new FormControl(null, Validators.required),
      articleName: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      previewContent: new FormControl(null, Validators.required),
      categoryId: new FormControl(null, Validators.required),
      categoryName: new FormControl(null, Validators.required),
      createdBy: new FormControl(null, Validators.required),
      createdByName: new FormControl(null, Validators.required),
      createdDate: new FormControl(null, Validators.required),
      modifiedBy: new FormControl(null, Validators.required),
      modifiedByName: new FormControl(null, Validators.required),
      modifiedDate: new FormControl(null, Validators.required)
    });

    this._data.getAllkbArticles().subscribe(
      (data: Industry[]) => {
        this.arr = data;
        console.log(this.arr);
        this.all_articles = this.arr['kbArticles'];
        console.log(this.all_articles);
      }
    );
    this.getPageInformation();

  }
  onAddClick(Add) {

this.kb.reset();
this.modalService.open(Add, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
  } else {
  return `with: ${reason}`;
  }
  }
onArticleSave(items) {
  this._data.addIndustry(items).subscribe(
   (x: any) => {
    this.messages.add({key: 'key1', severity: 'success', summary: 'Service Message', detail: 'Added Successfully'});
    this.modalService.dismissAll();
    }
  );
}

  onEditClick(Edit, item) {
    this.kb.patchValue({
      articleId: this.all_articles[item].articleId,
      articleName: this.all_articles[item].articleName,
      content: this.all_articles[item].content,
      previewContent: this.all_articles[item].previewContent,
      categoryId: this.all_articles[item].categoryId,
      categoryName: this.all_articles[item].categoryName,
      createdBy: this.all_articles[item].createdBy,
      createdByName: this.all_articles[item].createdByName,
      createdDate: this.all_articles[item].createdDate,
      modifiedBy: this.all_articles[item].modifiedBy,
      modifiedByName: this.all_articles[item].modifiedByName,
      modifiedDate: this.all_articles[item].modifiedDate
    });
    this.modalService.open(Edit, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
}
UpdateArticles(item) {
  console.log(item.articleId);
  this.all_articles['kbArticles'] = item;
  this._data.editIndustry(item).subscribe(
    (x: any) => {
      this.messages.add({key: 'key1', severity: 'success', summary: 'Success', detail: 'Edited Successfully'});

      this._data.getAllkbArticles().subscribe(
        (data: Industry[]) => {
          this.arr = data;
          this.kb.reset();
          console.log(this.arr);
          this.all_articles = this.arr['kbArticles'];
          console.log(this.all_articles);
          this.modalService.dismissAll();

        }
      );
    }
  );
}
onReadClick(Read, item) {
  this.modalService.open(Read, {
    size: 'lg'
  });
  this._data.onReadIndustry(item.articleId).subscribe(
    (x: any) => {
      this.arrdata = x;
    }
  );
}
getPageInformation(){
  this._data.getAllkbArticles().subscribe(
    (data: Industry[]) => {
      this.arr2 = data;
      this.page = data['pagerInfo'];
      console.log(this.page);
      this.totalItem = this.page.totalItems;
      console.log(this.totalItem);
      this.totalPages = this.page.totalPages;
      this.all_articles = this.arr['kbArticles'];
    }
  );
}
loadPage(number: number) {
  number = this.Page;
  console.log(number);
  if (number !== 0){
    this._data.getPageByNumber(number).subscribe(
      (x: any) => {
        this.arr3 = x;
        console.log(this.arr3);
        this.all_articles = this.arr3['kbArticles'];
        console.log(this.all_articles);
      }
    );
  }
}
onClickSearch(value) {
  if (value !== '') {
    this._data.getSearchById(value).subscribe(
      (data: Industry[]) => {
        console.log(data);
        this.arr = data;
        this.all_articles = this.arr['kbArticles'];
      });
  } else {
    this._data.getAllkbArticles().subscribe(

      (data: Industry[]) => {
        this.arr = data;
        console.log(this.arr);
        this.all_articles = this.arr['kbArticles'];
      });
  }
}


}
