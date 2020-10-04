import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideosService} from 'src/app/services/videos.service';
import {Video} from 'src/app/components/layout/component/videos/videos';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})

export class VideosComponent implements OnInit, OnDestroy {
  private videos: Video[] = [];
  private subscription: Subscription;

  constructor(private readonly videosService: VideosService) {
  }

  ngOnInit(): void {
    this.subscription = this.videosService.findAll().subscribe(data => this.videos = data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

}
