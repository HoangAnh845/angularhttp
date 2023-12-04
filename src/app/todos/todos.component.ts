import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  usersData: any = [];
  todosData: any = [];

  constructor(private todosService: TodosService, private usersService: UserService) { }

  ngOnInit(): void {
    this.onGetTodos();
  }

  onGetTodos(): void {
    this.todosService.getTodos().subscribe(
      (res) => {
        // Gán giá trị userId = với name user tương ứng với id đó 
        res.map((item, index) => {
          this.usersService.getUser(item.userId).subscribe(
            (resUser) => {
              item.userId = resUser.name;
            },
          );
          // Giới hạn tên công việc nếu nó quá dài (<= 45 ký tự)
          if (item.title.length >= 40) {
            item.title = item.title.substring(1, 40) + "..."
          }
        });

        this.todosData = res;
      },
      (error) => console.log(error),
      () => console.log('Done getting Todos')
    )
  };

}
