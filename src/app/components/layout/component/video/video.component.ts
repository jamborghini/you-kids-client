import {Component, OnInit} from '@angular/core';
import {Video} from 'src/app/components/layout/component/videos/videos';
import {VideosService} from 'src/app/services/videos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  public video: Video;
  public videoId: string;

  constructor(private readonly videosService: VideosService, readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(videoRouteParams => {
      this.videosService.findOne(videoRouteParams.id).subscribe(data => this.video = data);
    });
  }


}
