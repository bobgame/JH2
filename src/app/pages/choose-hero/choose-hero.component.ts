import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { clone } from '../../units/Base'
import { AnswerItem, qa } from './choose-q-a'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'

@Component({
  selector: 'jh-choose-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-hero.component.html',
  styleUrl: './choose-hero.component.scss',
})
export class ChooseHeroComponent {
  constructor(
    private g: GlobalService,
  ) { }

  showPreChoose = false

  qa = clone(qa)

  currentQa = {
    index: 0,
    item: this.qa[0],
  }

  selectHero() {
    if (this.showPreChoose) {
      return
    }
  }

  startPreChoose() {
    if (this.showPreChoose) {
      return
    }
    // TODO set selected hero
    this.openPreChoose()
  }

  openPreChoose() {
    this.showPreChoose = true
  }

  answerQuestion(answer: AnswerItem) {
    // TODO add action & value to hero
    console.log('Answer', answer.id, answer.text, answer.actionType, answer.actionValue)
    this.nextQuestion()
  }

  nextQuestion() {
    this.currentQa.index++
    this.currentQa.item = this.qa[this.currentQa.index]
    if (this.currentQa.item === undefined) {
      console.log('No more question')
      this.g.goToPage(PageEnum.PlayGuide)
    }
  }

}
