import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        UserService,
        provideHttpClient()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should verify getAllUsers', () => {
    const mockresponse: any[] = [{}, {}];
    spyOn(userService, 'getUsers').and.returnValue(of(mockresponse));
    component.fetchUsers();
    // fixture.detectChanges();
    expect(component.users.length).toBe(2);
  });
});
