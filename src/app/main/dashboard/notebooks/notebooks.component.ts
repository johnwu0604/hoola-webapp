import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../../../service/notebook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'notebook-cmp',
  templateUrl: 'notebooks.component.html',
  styleUrls: ['notebooks.component.css'],
  providers: [NotebookService]
})
export class NotebooksComponent implements OnInit {

  private notebook: any = ''

  constructor(
    private router: Router,
    private notebookService: NotebookService
  ) { }

  ngOnInit() {
    this.getNotebook()
  }

  public getNotebook() {
    this.notebookService.getNotebook()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebook = result.notebook
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public updateNotebook(event) {
    this.notebookService.updateNotebook(this.notebook.notebook_id, event.target.value)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebook = result.notebook
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
