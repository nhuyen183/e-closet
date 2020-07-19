import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixnmatchPage } from './mixnmatch.page';

describe('MixnmatchPage', () => {
  let component: MixnmatchPage;
  let fixture: ComponentFixture<MixnmatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixnmatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixnmatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
