import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: '../resource/view/home.component.html',
  styleUrls: ['../resource/css/home.component.css']
})

export class HomeComponent {
	colors = ['primary', 'accent', 'warn'];
	modes = ['determinate', 'indeterminate']

  	selectedColor = 'primary';
  	selectedMode = 'determinate';
  	value = 50;
}
