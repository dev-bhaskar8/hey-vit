import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article;
  
  constructor(private data : NewsService) { }

  ngOnInit() {
    this.article=this.data.currentArticle;
    console.log(this.data.currentArticle);
    
  }

   openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

}
