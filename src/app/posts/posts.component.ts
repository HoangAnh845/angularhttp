import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsData: any = [];
  error: string = "";
  complete: string = "";
  upPost: number = 0;
  post = { id: 0, title: '', body: '' };
  sidebarVisible2: boolean = false;
  visible: boolean = false;
  position: string = 'center';
  constructor(private postsService: PostsService, private usersService: UserService) { };


  ngOnInit(): void {
    this.onGetPosts();
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }


  updatePost(postId: number): void {
    this.upPost = postId;
    this.postsService.getPost(postId).subscribe(
      (res) => {
        this.post.id = res.id;
        this.post.title = res.title;
        this.post.body = res.body;
      }
    )
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Dữ liệu đã được gửi:', this.post);
      this.postsService.updatePost(this.post).subscribe(
        (res) => console.log(res),
        (error) => console.log(error),
        () => {
          alert("Done updating Post")
          this.complete = "Done updating Post"
        }
      )

    }
  }

  deletePost(postId: number): void {
    this.postsService.deletePost(postId).subscribe(
      (res) => res,
      (error) => {
        this.error = error;
      },
      () => {
        this.complete = "Done delete Post";
      }
    )
  }

  onGetPosts(): void {
    this.postsService.getPosts().subscribe(
      (res) => {
        res.map((item, index) => {
          // Tìm name => userId phù hợp cho bài viết
          this.usersService.getUser(item.userId).subscribe(
            (resUser) => {
              item.userId = resUser.name;
            },
          );
          // Giới hạn nội dung
          if (item.body.length >= 40) {
            item.body = item.body.substring(1, 40) + "..."
          }
          if (item.title.length >= 40) {
            item.title = item.title.substring(1, 40) + "..."
          }
        })

        this.postsData = res;
      },
      (error) => console.log(error),
      () => console.log('Done getting Posts')


    )
  }

}
