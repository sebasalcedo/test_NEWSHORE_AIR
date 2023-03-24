import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  filterControl = new FormControl<string | any>('');

  filterOrigin?: Observable<any[]>;

  @Input() listadoVuelos: string[] = [];
  @Input() iconInput = ' ';
  @Input() value = ' ';

  @Output() cityEvent = new EventEmitter<string>();
  @Output() cityEventDestination = new EventEmitter<string>();

  ngOnInit() {
    this.filterOrigin = this.filterControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOrigin(value || ''))
    );
  }

  private _filterOrigin(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listadoVuelos.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  sendMessage() {
    this.cityEvent.emit(this.filterControl.value);
  }

  sendMessageEvent(){
    this.cityEventDestination.emit(this.filterControl.value);


  }
}
