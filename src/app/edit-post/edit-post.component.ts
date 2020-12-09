import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: String;

  updatePost(f: NgForm) {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim()); // convert the string to an array and remove whitespace
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }

  deletePost() {
    this.postService.deletePostById(this.blogPost._id).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }  

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getPostbyId(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    });
  }

}
