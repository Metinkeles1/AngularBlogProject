import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageSize = 8;
  page = 13;

  blogData: Array<any> = [];
  constructor(private blogService: BlogService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      console.log(res);
      this.blogData = res;
    })
  }

  openDialog(element: any, vieworupdate: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data: { blog: element, isUpdate: vieworupdate }
    });
  }

}
