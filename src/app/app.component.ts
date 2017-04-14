import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
  //   console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  //   return false;
  // }

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
}
