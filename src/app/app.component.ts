import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { GlobalService } from './services/global.service'
import { PageEnum } from './constants/enums/base.enum'
import { HelpComponent } from './pages/help/help.component'
import { PlayGuideComponent } from './pages/play-guide/play-guide.component'
import { GameComponent } from './pages/game/game.component'
import { CardsComponent } from './pages/cards/cards.component'

@Component({
  selector: 'jh-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HelpComponent, PlayGuideComponent, GameComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'JH2'
  PageEnum = PageEnum

  constructor(
    public g: GlobalService,
  ) { }
}
