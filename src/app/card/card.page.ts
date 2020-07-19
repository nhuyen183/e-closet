import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit() {
  }

}
