import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  @Input() total:number=0;
  @Input() free:number=0;
  @Input() premium:number=0;

  selectedRadioButtonValue: String="total";
  @Output() filterRadioButtonChanged: EventEmitter<String> =new EventEmitter<String>();
  onRadioButtonSelectionChanged(){
    this.filterRadioButtonChanged.emit(this.selectedRadioButtonValue)
  }

}
