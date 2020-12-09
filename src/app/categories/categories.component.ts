import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;
  private categoriesSub;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.categoriesSub = this.postService.getCategories().subscribe(data => this.categories = data);
  }

  ngOnDestroy() {
    if (this.categoriesSub) this.categoriesSub.unsubscribe();
  }

}
