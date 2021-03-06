import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
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
