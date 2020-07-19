import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddclothesPage } from './addclothes.page';

describe('AddclothesPage', () => {
  let component: AddclothesPage;
  let fixture: ComponentFixture<AddclothesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclothesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddclothesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
