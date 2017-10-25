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

  private notes: any = ''

  constructor(
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getAllNotes()
  }

  public getAllNotes() {
    this.noteService.getAllNotes()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notes = result.notes
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public updateNotes(event) {
    this.noteService.updateNotes(this.notes.note_id, event.target.value)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notes = result.notes
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
