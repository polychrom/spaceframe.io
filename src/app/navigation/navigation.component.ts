import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  stack = [
    'Angular × Universal',
    'Vue × Nuxt',
    'TypeScript',
    'JavaScript',
    '(S)CSS',
    'Figma',
    'Adobe Cloud',
    'Cinema4D',
  ];

  expertise = [
    'Frontend Engineering',
    'Single Page Applications',
    'Server Side Rendering',
    'Performance Optimization',
    'User Interfaces',
    'User Experience',
    'Graphic Design',
    '3d Rendering',
  ];

  commits: any = [];

  readonly logoTitle = 'SpaceFrame';
  logoEffect = '';

  intro =
    'Digital playground of spaceframe, a frontend engineer & creative technologist from Germany, who builds digital product experiences across web apps, interfaces and 3D.';

  counter = 0;
  intervalID: any;
  charArr: string[] = [];
  chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  digits = this.chars.split('');

  constructor(private $apiService: ApiService) {
    this.$apiService.getData().subscribe((response) => {
      if (response.length > 0) {
        response.forEach((item: any) => {
          let commit: any = {};
          commit.message = item.commit.message;
          commit.url = item.html_url;
          this.commits.push(commit);
        });
      }
    });
  }

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    this.counter = 0;
    this.intervalID = setInterval(() => this._typeEffect(), 100);
  }

  private _typeEffect(): void {
    this.charArr = this.logoTitle.split('');

    for (let i = this.counter; i < this.charArr.length; i++) {
      const pos = Math.floor(Math.random() * this.digits.length - 1);
      this.charArr[i] = this.digits[pos];
    }

    this.logoEffect = this.charArr.join('');

    if (this.counter >= this.charArr.length) {
      clearInterval(this.intervalID);
    }
    this.counter++;
  }
}
