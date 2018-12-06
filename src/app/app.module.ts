// root module, tell ionic how to set up application
// import angular, ionic system module
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//import components
import { ComponentsModule } from '../components/components.module'

// import root component
import { MyApp } from './app.component';

// page, self define component
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { NewsPage } from '../pages/news/news';

//ionic app start up 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsinfoPage } from '../pages/newsinfo/newsinfo';

@NgModule({
  declarations: [  /* 声明组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsinfoPage
  ],
  imports: [  /* 引入的模块，依赖的模块*/
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubpages: 'true',
      backButtonText: '返回'
    })
  ],
  bootstrap: [IonicApp],  /* 启动的模块*/
  entryComponents: [  /*配置不会在模板中使用的组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsinfoPage
  ],
  providers: [  /*配置服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
