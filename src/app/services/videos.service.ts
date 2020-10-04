import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from 'src/app/components/layout/component/videos/videos';

@Injectable({
  providedIn: 'root',
})

/*
* POST /videos
* GET /videos:videoId
* GET /videos
* DELETE /videos
* */

export class VideosService {
  public readonly url: string = 'http://localhost:3000';

  constructor(readonly http: HttpClient) {
  }

  findAll(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.url}/videos`);
  }

  findOne(videoId: string): Observable<Video> {
    return this.http.get<Video>(`${this.url}/videos/${videoId}`);
  }

}
