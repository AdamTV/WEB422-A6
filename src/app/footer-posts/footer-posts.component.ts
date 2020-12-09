import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  posts: Array<BlogPost>;
  private postsSub;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSub = this.postService.getPosts(1, null, null).subscribe(data => this.posts = data.slice(0,3));
  }

  ngOnDestroy() {
    if (this.postsSub) this.postsSub.unsubscribe();
  }

}
