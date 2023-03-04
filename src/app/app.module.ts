import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StackComponent } from './stack/stack.component';
import { LogoComponent } from './logo/logo.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { FilenameToImageAltPipe } from './filename-to-image-alt.pipe';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';
import { ModalNavigationComponent } from './modal-navigation/modal-navigation.component';
import { ContentScrollComponent } from './content-scroll/content-scroll.component';
import { ContentFixedComponent } from './content-fixed/content-fixed.component';
import { ContentScrollLeftComponent } from './content-scroll-left/content-scroll-left.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StackComponent,
    LogoComponent,
    SliderComponent,
    IntroComponent,
    FilenameToImageAltPipe,
    NavigationItemsComponent,
    ModalNavigationComponent,
    ContentScrollComponent,
    ContentFixedComponent,
    ContentScrollLeftComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
