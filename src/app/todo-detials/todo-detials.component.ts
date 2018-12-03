import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

class book {
}

@Component({
  selector: 'app-todo-detials',
  template: `
    
    <h4>The to do {{toDoId}}</h4>
    
    <ul>
      <li *ngFor="let item of books">Book title :{{item.author}}</li>
    </ul>
    <button (click)="goNext()" style="margin-right: 3px">Next</button>
    <button (click)="goPrevious()">Previous</button>
    <br>
    <button (click)="goBack()">Back</button>

  `,
  styles: []
})
export class TodoDetialsComponent implements OnInit {

  public toDoId;
  public books: any;

 // public data:AngularFireList;

  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) {
   this.db.list('/books').valueChanges().subscribe(books => {
      this.books = books;



    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.toDoId = id;
    });
  }

  goPrevious() {
    let pervId = this.toDoId - 1;
    this.router.navigate(['/home', pervId]);
  }

  goNext() {
    let nxtId = this.toDoId + 1;
    this.router.navigate(['/home', nxtId]);
    console.log('Clicked' + this.toDoId);
  }

  goBack() {
    let selectedId = this.toDoId ? this.toDoId : null;
    this.router.navigate(['/home', {id: selectedId}]);
    console.log('Clicked' + this.toDoId);
  }

}
