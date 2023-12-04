import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        transform: 'translateY(0)',
        display: "block",
        opacity: 1,
      })),
      state('closed', style({
        transform: 'translateY(-100%)',
        display: "none",
        opacity: 0.5,
      })),
      transition('open <=> closed', animate('500ms ease-out')),
    ]),
    trigger('lowerBar', [
      state('open', style({
        transform: 'translateY(0)',
        "padding-bottom": "15px"
      })),
      state('closed', style({
        transform: 'translateY(-100%)',
      })),
      transition('open <=> closed', animate('500ms ease-out')),
    ])
  ],
})
export class SidebarComponent implements OnInit {
  user: any = {};
  userMore: boolean = false;

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.onGetUser();
  };

  userMoreHandle(): void {
    this.userMore = !this.userMore;
  };



  onGetUser(): void {
    this.usersService.getUser(1).subscribe(
      (res) => {
        console.log('--- res ---', res);
        return this.user = res
      },
      (error) => console.log(error),
      () => console.log('Done getting user')
    );
  };
}
