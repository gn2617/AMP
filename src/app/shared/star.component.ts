import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
@Input() rating = 4;
starWidth: number;
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5 ;
 }

 OnClick(): void {
     console.log(`The rating ${this.rating} was clicked!`);
     this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
 }
}
