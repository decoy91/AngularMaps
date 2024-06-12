import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  standalone: true,
  imports: [ CounterAloneComponent, ],
  templateUrl: './alone-pages.component.html',
  styleUrl: './alone-pages.component.css'
})
export class AlonePagesComponent {

}
