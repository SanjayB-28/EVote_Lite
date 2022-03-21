import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll, PollForm } from '../types';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like Dogs or Cats?',
        thumbnail: 'https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/Skyword/images/basset-hound-sleeps-on-sleeping-tabby-cat_308513_ref.png',
        results: [0,5,7],
        options: ["Cats", "Dogs", "None"],
        voted: true,
      },
      {
        id: 2,
        question: 'Which is the Best Season?',
        thumbnail: 'https://c.tadst.com/gfx/900x506/four-seasons.jpg?1',
        results: [1,6,4,7],
        options: ["Summer", "Winter", "Autumn", "Spring"],
        voted: false,
      },
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
