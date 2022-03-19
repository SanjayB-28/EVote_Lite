import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: 'Do you like Dogs or Cats?',
      image: 'https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/Skyword/images/basset-hound-sleeps-on-sleeping-tabby-cat_308513_ref.png',
      votes: [0,5,7],
      voted: true,
    },
    {
      question: 'Which is the Best Season?',
      image: 'https://c.tadst.com/gfx/900x506/four-seasons.jpg?1',
      votes: [1,6,4],
      voted: false,
    },
  ];
}
