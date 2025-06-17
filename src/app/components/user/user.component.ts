import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any;

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.userService.getUsers().subscribe((response:any) => {
      this.users = response;
      this.modifyUserObj();
    })
  }
  modifyUserObj() {
    console.log('Modify User Function...')
  }
}
