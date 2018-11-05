import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;
  constructor(private data: NewsService,private router:Router) {

   }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.news = data
      console.log(this.news);
    }
  );
  }
open(article){
  this.data.currentArticle = article;
  this.router.navigate(['/news-single']);

}

}
