import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cockpitpage',
  templateUrl: './cockpitpage.component.html',
  styleUrls: ['./cockpitpage.component.css']
})
export class CockpitpageComponent implements OnInit {

  ckid :string;
  ck:string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.ckid = params['ckid'];
        this.ck = params['ck'];
    });
  }

}
