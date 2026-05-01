import { Component } from '@angular/core';
import { LucideCodeXml, LucideRocket, LucideWorkflow } from '@lucide/angular';

@Component({
  selector: 'app-work',
  imports: [LucideWorkflow, LucideRocket, LucideCodeXml],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

}
