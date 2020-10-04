import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {Video} from 'src/app/components/layout/component/videos/videos';
import {VideosService} from 'src/app/services/videos.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})


export class LayoutComponent implements AfterViewInit, OnInit {

  @ViewChild('darkThemeToggle') darkThemeToggle: MatSlideToggle;
  public readonly test: boolean = localStorage.getItem('darkTheme') === '1';
  public videos: Video[];

  constructor(private readonly videosService: VideosService) {
  }

  ngOnInit(): void {
    this.videosService.findAll().subscribe(data => this.videos = data);
  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('darkTheme') === '1') {
      document.body.classList.toggle('alternatheme', true);
    } else {
      document.body.classList.toggle('alternatheme', false);
    }
  }

  changeTheme(): void {
    localStorage.getItem('darkTheme') === '1' ?
      localStorage.setItem('darkTheme', '0') :
      localStorage.setItem('darkTheme', '1');
    document.body.classList.toggle('alternatheme');
  }
}
