import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlbumsService } from '../service/albums.service';
import { UserService } from '../service/user.service';
import { PhotosService } from '../service/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumsData: any;
  imgUrl: any;
  error: string = "";
  complete: string = "";
  visible: boolean = false;
  position: string = 'center';
  constructor(private albumsService: AlbumsService, private userService: UserService, private photosService: PhotosService) { }
  // @ViewChild('op') op: ElementRef | undefined; // Đại diện cho đối tượng phần tử DOM

  ngOnInit(): void {
    this.onGetAlbums();
  }
  
  onGetAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      (res) => {
        res.map((item, index) => {
          this.userService.getUser(item.userId).subscribe(
            (resUser) => {
              item.userId = resUser.name;
            },
          );
        })

        this.albumsData = res;
      },
      (error) => console.log(error),
      () => console.log("Dont getting Albums")
    )
  };

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }

  deleteAblum(albumId: number): void {
    this.albumsService.deleteAlbum(albumId).subscribe(
      (res) => res,
      (error) => {
        this.error = error;
      },
      () => {
        this.complete = "Done delete Ablums";
      }
    )
  }

  handleAblums(albumId: number): void {
    console.log('--- DATA ---ss', albumId);

    // Tìm kiếm photos theo albums
    this.photosService.getPhoto(albumId).subscribe(
      (res) => {
        this.imgUrl = res.thumbnailUrl;
      }
    )
  }
}
