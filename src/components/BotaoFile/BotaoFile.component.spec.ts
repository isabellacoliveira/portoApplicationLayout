/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoFileComponent } from './BotaoFile.component';

describe('BotaoFileComponent', () => {
  let component: BotaoFileComponent;
  let fixture: ComponentFixture<BotaoFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
