import { Component, EventEmitter, Output } from '@angular/core';
// import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl:  './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postservice: PostService) {}

  // @Output() PostCreated = new EventEmitter<Post>();

  OnPosting(form: NgForm) {

    if (form.invalid) {
      return;
    }
    // const post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };

    //  this.PostCreated.emit(post);

    this.postservice.addPost(form.value.title, form.value.content);

  }
}
