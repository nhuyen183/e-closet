import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {

  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/menu']);
  }
  moveout(){
    this.router.navigate(['/sell']);
  }
  moveon(){
    this.router.navigate(['/card']);
  }
  ngOnInit() {
  }

}
