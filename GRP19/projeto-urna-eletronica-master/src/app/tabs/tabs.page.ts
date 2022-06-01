import { Component } from '@angular/core';
import { Pag1Page } from '../pag1/pag1.page';
import { Pag2Page } from '../pag2/pag2.page';
import { Pag3Page } from '../pag3/pag3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

}

export class TabsPage1 extends Pag1Page {

}

export class TabsPage2 extends Pag2Page {

}

export class TabsPage3 extends Pag3Page {

}
