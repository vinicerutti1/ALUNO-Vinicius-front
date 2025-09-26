import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home-component';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message', () => {
    const compiled = fixture.nativeElement;
    const h1 = compiled.querySelector('h1');
    expect(h1.textContent).toContain('Bem-vindo ao Sistema de Alunos');
  });

  it('should have a button that links to /alunos', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.textContent).toBe('Ir para Alunos');
  });

  it('should navigate to the alunos page when the button is clicked', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    const routerLink = button.getAttribute('ng-reflect-router-link');
    expect(routerLink).toBe('/alunos');  
  });
});
