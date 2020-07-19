import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/home']);
  }
  moveon(){
    this.router.navigate(['/sell']);
  }
  moveonMix(){
    this.router.navigate(['/mixnmatch']);
  }
  moveonadd(){
    this.router.navigate(['/addclothes']);
  }
  ngOnInit() {
  }

}
