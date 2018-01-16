import {Component, OnInit, ChangeDetectorRef} from '@angular/core'
import { NotebookService } from "../../../../service/notebook.service"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'note-cmp',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css'],
  providers: [ NotebookService ]
})
export class NoteComponent implements OnInit {

  private notebook: any = ''
  private sub: any

  constructor(
    private router: Router,
    private notebookService: NotebookService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) { }

  ngAfterViewChecked(): void {
    this.ref.detectChanges()
  }

  ngOnInit() {
    this.getNotebook()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  public getNotebook() {
    this.sub = this.route.params.subscribe(params => {
      this.notebookService.getNotebook(params['id'])
        .subscribe(
          result => {
            if ( result.user_authenticated ) {
              this.notebook = result.notebook
            } else {
              this.router.navigateByUrl('/login')
            }
          },
          error => {
            console.log(error)
          })
    })
  }

  public updateNotebook(event) {
    this.notebookService.updateNotebook(this.notebook.notebook_id, event.target.value)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.notebook = result.notebook
          } else {
            this.router.navigateByUrl('/login')
          }
        },
        error => {
          console.log(error)
        })
  }

  public backToNotebooks() {
    this.router.navigateByUrl('/main/notebooks')
  }

}
