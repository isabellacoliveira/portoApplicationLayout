/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovimentacaoComponent } from './Movimentacao.component';

describe('MovimentacaoComponent', () => {
  let component: MovimentacaoComponent;
  let fixture: ComponentFixture<MovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
