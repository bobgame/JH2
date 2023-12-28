import { Injectable } from '@angular/core'
import { PageEnum } from '../constants/enums/base.enum'

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  show = {
    page: PageEnum.ChooseHero,
  }

  constructor() { }

  goToPage(page: PageEnum) {
    this.show.page = page
  }
}
