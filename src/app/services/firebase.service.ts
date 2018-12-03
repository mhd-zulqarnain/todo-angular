import {Injectable, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit{
  public toDoId:any;
  constructor( private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.db.list('/books').valueChanges().subscribe(books => {
      this.toDoId = books;

    });
  }

  gettodos(){
    return this.toDoId
  }

}
