import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-app';
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  addNewPicture(gallery: GalleryComponent) {
    gallery.pictures.unshift(gallery.generateImage());
  }
  removeFirstPicture(gallery: GalleryComponent) {
    gallery.pictures.shift();
  }
}
