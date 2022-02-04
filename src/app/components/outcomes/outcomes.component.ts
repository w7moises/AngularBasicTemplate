import { Component, OnInit } from '@angular/core';
import { Outcome } from 'src/app/models/outcome';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css']
})
export class OutcomesComponent implements OnInit {

  sum :number
  outcomes : Outcome[]
  constructor(private service: OutcomeService) { 

  }

  ngOnInit(): void {
    this.service.getAll().subscribe((response:any)=>{this.outcomes=response})
  }
  calculateTotal():number{
    let total = 0
    this.outcomes.forEach(values=>{
      total+=(values.amount);
    });
    return total;
  }
}
