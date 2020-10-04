import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from 'src/app/components/layout/layout.component';
import {VideosComponent} from 'src/app/components/layout/component/videos/videos.component';
import {VideoComponent} from 'src/app/components/layout/component/video/video.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'videos', component: VideosComponent},
      {path: 'videos/:id', component: VideoComponent},
    ],
  },
  {path: '**', redirectTo: 'videos'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
