import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  user: User | any = {};
  // private user: User = {
  //   "id": 2,
  //   "name": "Boo",
  //   "username": "UO",
  //   "email": "boo@ainterspace.vn",
  //   "address": {
  //     "street": "Kulas Light",
  //     "suite": "Apt. 556",
  //     "city": "Gwenborough",
  //     "zipcode": "92998-3874",
  //     "geo": {
  //       "lat": "-37.3159",
  //       "lng": "81.1496"
  //     }
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "website": "hildegard.org",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",
  //     "bs": "harness real-time e-markets"
  //   }
  // }

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    // this.onDeleteUser();
  };

  // dataSource = this.ELEMENT_DATA;
  // dataSource = this.onGetUsers();
  columnsUsers = ["id", "name", "username", "email", "address", "phone", "website", "company"];



  onGetUsers(): void {
    this.usersService.getUsers().subscribe(
      (res) => {
        console.log('--- DATA ---', res);
        return this.users = res;

      },
      (error) => console.log(error),
      () => console.log('Done getting users')
    );
  };

  onGetUser(): void {
    this.usersService.getUser(2).subscribe(
      (res) => this.user = res,
      (error) => console.log(error),
      () => console.log('Done getting user')
    );
  };

  // onCreateUser(): void {
  //   this.usersService.createUser(this.user).subscribe(
  //     (res) => console.log(res),
  //     (error) => console.log(error),
  //     () => console.log('Done create user')
  //   );
  // };

  // onUpdateUser(): void {
  //   this.usersService.updateUser(this.user).subscribe(
  //     (res) => console.log(res),
  //     (error) => console.log(error),
  //     () => console.log('Done update user')
  //   );
  // };

  // onDeleteUser(): void {
  //   this.usersService.deleteUser(2).subscribe(
  //     (res) => console.log(res),
  //     (error) => console.log(error),
  //     () => console.log('Done delete user')
  //   );
  // };
}
