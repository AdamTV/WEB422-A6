import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogPosts: Array<BlogPost> = blogData;
  id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;    
      let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 50); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    });
   }

  ngOnInit(): void {
  }

}
