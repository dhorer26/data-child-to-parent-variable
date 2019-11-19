import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-display-student",
  templateUrl: "./display-student.component.html"
})
export class DisplayStudentComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  Employee:string = "John";
  constructor() {}

  handleClick(Employee) {
    this.notify.emit(Employee);
  }

  ngOnInit() {}
}
