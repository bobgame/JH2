import { Component, OnInit } from '@angular/core'
import { HomeFanComponent } from './home-fan/home-fan.component'
import { HomeBgComponent } from './home-bg/home-bg.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'jh-home',
  standalone: true,
  imports: [CommonModule, HomeFanComponent, HomeBgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  showText = false
  showFan = false
  fanIn = false

  timer = {
    one: null,
    two: null,
    three: null,
  }
  timerOne = 0
  timerTwo = 0
  timerThree = 0

  ngOnInit(): void {
    this.timerOne = window.setTimeout(() => {
      this.showText = true
    }, 300)
    this.timerTwo = window.setTimeout(() => {
      this.showFan = true
      this.fanIn = true
    }, 9.6 * 1000)
    this.timerThree = window.setTimeout(() => {
      this.showText = false
    }, 9.8 * 1000)
  }

  skipAnimation() {
    if (this.showFan) {
      return
    }
    clearTimeout(this.timerOne)
    clearTimeout(this.timerTwo)
    clearTimeout(this.timerThree)
    this.showText = false
    this.showFan = true
    this.fanIn = true
  }
}
