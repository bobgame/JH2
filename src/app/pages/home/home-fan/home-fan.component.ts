import { Component, Input } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { PageEnum } from '../../../constants/enums/base.enum'

@Component({
  selector: 'jh-home-fan',
  standalone: true,
  imports: [],
  templateUrl: './home-fan.component.html',
  styleUrl: './home-fan.component.scss',
})
export class HomeFanComponent {
  @Input() fanIn = false

  constructor(
    public g: GlobalService,
  ) { }

  PageEnum = PageEnum
}
