import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeAll(() => {  // 1
    console.log('Before All..');
  })

  beforeEach(async () => {  // Before Every it()
    console.log('Before Each..')
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  afterEach(() => {  // After Every it()
    console.log('After Each..')
  })

  afterAll(() => {    // 1
    console.log('After All..');
    // clear timeOut, intervals , subscriptions
  })


  it('should create the app', () => {
    console.log('I am it-1')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_may_2025_2' title`, () => {
    console.log('I am it-2')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_may_2025_2');
  });

  it('should render title', () => {
    console.log('I am it-3')
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_may_2025_2');
  });

  it('Should verify add method', () => {
    console.log('I am it-4')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
  });
  it('Should verify addNewCar method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(2);
    expect(app.cars).toEqual(['Tata', 'Honda']);
    app.addNewCar('Maruti');
    expect(app.cars.length).toBe(3);
    expect(app.cars).toEqual(['Tata', 'Honda', 'Maruti']);
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('Audi');
  });

});
