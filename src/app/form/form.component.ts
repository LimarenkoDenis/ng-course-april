import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.data.subscribe(data => {
      console.log(data);

    })
  }

}
