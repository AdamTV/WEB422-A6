/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: ADAM STINZIANI      Student ID: 124521188       Date: 2020-11-30
*
* Online Link: https://awesome-heisenberg-55caaa.netlify.app/
*
********************************************************************************/

import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a6';
    onActivate(event) {
        console.log(event);
        // if (event instanceof PostComponent) {
        {
            let scrollToTop = window.setInterval(() => {          
                let pos = window.pageYOffset;
                if (pos > 0) {
                   window.scrollTo(0, pos - 50); // how far to scroll on each step
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
}
