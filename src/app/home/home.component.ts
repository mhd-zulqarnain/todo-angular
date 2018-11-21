import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedId
  todo = [
    {'id': 1, 'description': 'drink water'},
    {'id': 2, 'description': 'do home work'},
    {'id': 3, 'description': 'go school'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'))
      this.selectedId=id
    });
  }

  onSelect(item) {
    this.router.navigate(['/home', item.id]);
  }
  isSelected(item){
    return this.selectedId===item.id
  }

}
