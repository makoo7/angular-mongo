import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postservice: PostService) {}

  posts: Post[] = [];
  private postSub: Subscription;

  ngOnInit() {
      this.posts = this.postservice.getPosts();
      this.postservice.postUpdateListner()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
