import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-closet',
  templateUrl: './closet.page.html',
  styleUrls: ['./closet.page.scss'],
})
export class ClosetPage implements OnInit {
  sliderOpts = {
    zoom: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5
    
  }
  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
