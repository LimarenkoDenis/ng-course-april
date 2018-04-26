import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  QueryList,
  ViewChildren,
  ContentChild,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit, OnInit {
  @Input()
  public placeholder: string;

  @Output()
  public myChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('ref')
  public myref: ElementRef;

  @ViewChildren('ref')
  public myrefs: QueryList<any>;

  @ViewChildren('reference')
  public reference: QueryList<any>;

  @ContentChildren('search')
  public searchRef: ElementRef;


  public search(value: string): void {
    this.myChange.emit(value);
  }

  public ngOnInit(): void {
    console.log(this.reference);

  }

  ngAfterContentInit() {
    console.log(this.searchRef);
  }

  public ngAfterViewInit(): void {
    console.log(this.myrefs);
    console.log(this.reference);

  }

  ngOnDestroy(){
    console.log('destroy');

  }

  // public ngOnChanges(chages: SimpleChange): void {
  //   console.log(chages);
  // }

}
