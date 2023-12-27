import { Component, Input } from '@angular/core'

@Component({
  selector: 'jh-home-fan',
  standalone: true,
  imports: [],
  templateUrl: './home-fan.component.html',
  styleUrl: './home-fan.component.scss',
})
export class HomeFanComponent {
  @Input() fanIn = false
}
