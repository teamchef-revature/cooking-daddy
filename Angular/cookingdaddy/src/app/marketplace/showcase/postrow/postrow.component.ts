import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';

@Component({
  selector: 'app-postrow',
  templateUrl: './postrow.component.html',
  styleUrls: ['./postrow.component.css']
})
export class PostrowComponent implements OnInit {
  @Input() post: Post;
  private owner: {name: string};

  constructor(private perSer: PersonService) { }

  ngOnInit() {
    this.owner = {name: ''};
    this.perSer.getPersonById(this.post.personId).subscribe(resp => this.owner = {name: resp.username});
  }
  tvalue(): number {
    let num = 0;
    this.post.ingredients.forEach(poi => {
      num += Math.pow(poi.ingredient.quality.id, 3) * poi.quantity;
    });
    return num;
  }

}
