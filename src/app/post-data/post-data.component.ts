import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../Comment';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  post: BlogPost;
  postSub;
  querySub: any;
  commentName: string;
  commentText: string;

  submitComment() {
    var cmt = new Comment();
    cmt.author = this.commentName;
    cmt.comment = this.commentText;
    cmt.date = new Date().toLocaleDateString();
    this.post.comments.push(cmt);
    this.postService.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
    })
  }

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {      
      this.postSub = this.postService.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
        this.post.views += 1;
        this.postService.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
}
