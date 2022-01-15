import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StopTrainingComponent } from "./stop-taining.component";


@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.scss"],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer! :number;

  constructor( private dialog:MatDialog) {}

  onStop(){
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent)
  }
// 

  ngOnInit(): void {
   this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100){
        clearInterval(this.timer)
      }
    }, 1000);
  }
}
