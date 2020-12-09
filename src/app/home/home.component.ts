import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[];
  blogSub : any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.blogSub = this.postService.getPosts(1, null, null).subscribe(data => this.blogPosts = data);
  }

  ngOnDestroy() {
    if (this.blogSub) this.blogSub.unsubscribe();
  }

}
