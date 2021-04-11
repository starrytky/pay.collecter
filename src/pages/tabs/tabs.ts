/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2021-04-11 12:15:29
 * @LastEditors  : tky
 * @LastEditTime : 2021-04-11 12:37:13
 */
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
