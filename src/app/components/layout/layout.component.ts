import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';

export interface NavLink {
  path: string;
  icon: string;
  label: string;
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements AfterViewInit {

  @ViewChild('darkThemeToggle') darkThemeToggle: MatSlideToggle;

  showFiller = false;
  navLinks: NavLink[] = [
    {label: 'Home', icon: 'home', path: '/videos/asdasd123'},
  ];

  ngAfterViewInit(): void {
    if (localStorage.getItem('darkTheme') === '1') {
      document.body.classList.toggle('alternatheme', true);
      this.darkThemeToggle.checked = true;
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
