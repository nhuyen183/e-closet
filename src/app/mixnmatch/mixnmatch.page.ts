import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mixnmatch',
  templateUrl: './mixnmatch.page.html',
  styleUrls: ['./mixnmatch.page.scss'],
})
export class MixnmatchPage implements OnInit {

  sliderOpts = {
    zoom: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5
    
  }

  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/menu']);
  }
  openPreview(){

  }
  ngOnInit() {
  }

}
