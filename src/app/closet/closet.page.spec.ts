import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClosetPage } from './closet.page';

describe('ClosetPage', () => {
  let component: ClosetPage;
  let fixture: ComponentFixture<ClosetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClosetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
