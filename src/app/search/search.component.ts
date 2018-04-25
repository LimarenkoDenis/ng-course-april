import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit {
  @Input()
  public placeholder: string;

  @Output()
  public myChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('ref')
  public myref: ElementRef;

  public search(value: string): void {
    this.myChange.emit(value);
  }

  public ngAfterViewInit(): void {
    console.log(this.myref.nativeElement);
  }

}
