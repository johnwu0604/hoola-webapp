import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../../service/note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'note-cmp',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  providers: [NoteService]
})
export class NotesComponent implements OnInit {

  private notebook: any = ''

  constructor(
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getAllNotebooks()
  }

  public getAllNotebooks() {
    this.noteService.getAllNotebooks()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebook = result.notebooks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public updateNotebook(event) {
    this.noteService.updateNotebook(this.notebook.note_id, event.target.value)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebook = result.notebooks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
