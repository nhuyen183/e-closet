import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclothes',
  templateUrl: './addclothes.page.html',
  styleUrls: ['./addclothes.page.scss'],
})
export class AddclothesPage implements OnInit {
  constructor(private router: Router) {}
  moveback(){
    this.router.navigate(['/home']);
  }
  

  ngOnInit() {
  }

}
