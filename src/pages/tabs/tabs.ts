import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MyGroupPage } from '../mygroup/mygroup';
import { MyPublicGroupPage } from '../mypublicgroup/mypublicgroup';
import { OtherEventPage } from '../otherevent/otherevent';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MyGroupPage;
  tab5Root = MyPublicGroupPage;
  tab6Root = OtherEventPage;

  constructor() {

  }
}
