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
        question: 'Cast your Vote for Municipal Election',
        thumbnail: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/29/w900X450/campa_pic.jpg?w=640&dpr=1.3',
        results: [40,60,25],
        options: ["Candidate A", "Candidate B", "Candidate C"],
        voted: false,
      },
      {
        id: 2,
        question: 'ABC Club Chairperson Election',
        thumbnail: 'https://d3n8a8pro7vhmx.cloudfront.net/harveymilkclub/pages/182/attachments/original/1544666411/2018-Board-Elections-Postcard-Graphic-01.png?1544666411',
        results: [10,12,7,14],
        options: ["Akshay", "Deepak", "Senthil", "Rahul"],
        voted: true,
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
