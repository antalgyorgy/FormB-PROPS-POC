import { Component, OnInit, Input, Type, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  @Input() field: any;
  @Input() formGrp: FormGroup;
  config : any;

  @ViewChild('editorContainer', { static: true }) editorContainer?: ElementRef;
  editorFullScreen = false;

  constructor() { }

  ngOnInit() {
    this.config = this.field.config;
  }

  keyDown($event) {
    const key = $event.keyCode || $event.which;
    if (key == 122) {
        $event.preventDefault();
        this.toggleEditorFullScreen();
    }
}

toggleEditorFullScreen() {
    this.editorFullScreen = !this.editorFullScreen;
    if (this.editorFullScreen) {
        this.editorContainer.nativeElement.className = 'editor-full-screen';
        this.editorContainer.nativeElement.firstChild.style = 'width: 100vw; height: 100vh;'
    } else {
        this.editorContainer.nativeElement.className = 'editor-container';
        this.editorContainer.nativeElement.firstChild.style = 'width: 400px; height: 200px'
    }
}
}
