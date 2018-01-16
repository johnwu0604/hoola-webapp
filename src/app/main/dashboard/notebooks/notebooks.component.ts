import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../../../service/notebook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'notebook-cmp',
  templateUrl: 'notebooks.component.html',
  styleUrls: ['notebooks.component.css'],
  providers: [ NotebookService ]
})
export class NotebooksComponent implements OnInit {

  private notebooks: any = ''
  public model: any = {}

  constructor(
    private router: Router,
    private notebookService: NotebookService
  ) { }

  ngOnInit() {
    this.getNotebooks()
  }

  public getNotebooks() {
    this.notebookService.getNotebooks()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebooks = result.notebooks
          } else {
            this.router.navigateByUrl('/login')
          }
        },
        error => {
          console.log(error)
        })
  }

  public openNotebook(notebookId) {
    this.router.navigateByUrl('/main/notebooks/' + notebookId)
  }

  public addNotebook() {
    this.notebookService.addNotebook(this.model.name)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebooks = result.notebooks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
    this.model = []
  }

  public deleteNotebook(notebookId) {
    this.notebookService.deleteNotebook(notebookId)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebooks = result.notebooks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }


}
