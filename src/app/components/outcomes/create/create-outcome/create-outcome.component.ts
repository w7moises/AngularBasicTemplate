import { Component, OnInit } from '@angular/core';
import { Outcome } from 'src/app/models/outcome';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-create-outcome',
  templateUrl: './create-outcome.component.html',
  styleUrls: ['./create-outcome.component.css']
})
export class CreateOutcomeComponent implements OnInit {
  model : Outcome
  constructor(private service: OutcomeService) { 
    this.model = new Outcome()
  }

  ngOnInit(): void {
  }

  createOutcome(outcome:Outcome):void{
     this.service.create(this.model).subscribe();
  }

}
