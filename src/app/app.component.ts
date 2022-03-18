import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 0
  }

  onClick(){
    this.tweet.isLiked = !this.tweet.isLiked

    if(!this.tweet.isLiked){
      this.tweet.likesCount++
    } else{
      this.tweet.likesCount--
    }
  }
}
