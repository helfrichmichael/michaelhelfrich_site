import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediumPostItemResponse } from '../constants';
import { MediumApiService } from '../medium-api.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnDestroy, OnInit {
  mediumPosts?: MediumPostItemResponse[];
  thumbnailUrl?: string;
  destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private readonly mediumApi: MediumApiService) { }

  ngOnInit() {
    // Grabs the posts and then checks that the URL contains a valid file type for the thumbnail. 
    // If it doesn't it replaces it with a "No image available" placeholder.
    this.mediumApi.getPosts().pipe(takeUntil(this.destroyed)).subscribe(response => {
      this.mediumPosts = response.items.map((item) => {
        if (!item.thumbnail!.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
          item.thumbnail = 'assets/no_image.png';
        }
        return item;
      });
      this.thumbnailUrl = response.feed.image;
    });
  }

  ngOnDestroy() {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  /** Opens the article/post in a new window using the requested URL. */
  openPost(postUrl: string) {
    window.open(postUrl, '_blank');
  }

  /** Opens my Medium page. */
  openMediumPage() {
    window.open('https://michaelhelfrich.medium.com', '_blank');
  }
}
