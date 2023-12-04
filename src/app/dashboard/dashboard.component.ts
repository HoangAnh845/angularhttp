import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { PostsService } from '../service/posts.service';
import { TodosService } from '../service/todos.service';
import { AlbumsService } from '../service/albums.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersData: any = [];
  user: User[] = [];
  images: any[] = [
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
      alt: 'Description for Image 10',
      title: 'Title 10'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11s.jpg',
      alt: 'Description for Image 11',
      title: 'Title 11'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12s.jpg',
      alt: 'Description for Image 12',
      title: 'Title 12'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13s.jpg',
      alt: 'Description for Image 13',
      title: 'Title 13'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14s.jpg',
      alt: 'Description for Image 14',
      title: 'Title 14'
    },
    {
      itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
      thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15s.jpg',
      alt: 'Description for Image 15',
      title: 'Title 15'
    }
  ];
  responsiveOptions: any[] = [];
  usersLength: number = 0;
  todosLength: number = 0;
  postsLength: number = 0;
  albumsLength: number = 0;
  date: Date | undefined;
  columnsTodos = ["userId", "id", "title", "completed"];

  constructor(private usersService: UserService, private todosService: TodosService, private postsService: PostsService, private AlbumsService: AlbumsService) { }

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetTodos();
    this.onGetPosts();
    this.onGetAlbums();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }


  onGetUsers(): void {
    this.usersData = this.usersService.getUsers().subscribe(
      (res) => {
        this.usersData = res;
        this.usersLength = res.length
      },
      (error) => console.log(error),
      () => console.log('Done getting users')
    );
  };

  onGetTodos(): void {
    this.todosService.getTodos().subscribe(
      (res) => {
        this.todosLength = res.length;
      },
      (error) => console.log(error),
      () => console.log('Done getting Todos')
    )
  };

  onGetPosts(): void {
    this.postsService.getPosts().subscribe(
      (res) => {
        this.postsLength = res.length;
      },
      (error) => console.log(error),
      () => console.log('Done getting posts')
    )
  };

  onGetAlbums(): void {
    this.AlbumsService.getAlbums().subscribe(
      (res) => {
        this.albumsLength = res.length;
      },
      (error) => console.log(error),
      () => console.log('Done getting Albums')
    )
  };



}
