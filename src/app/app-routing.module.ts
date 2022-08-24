import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [ 
{ path: '', component: SlideshowComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'my-work', component: MyWorkComponent },
{ path: 'about-me', component: AboutMeComponent },
{ path: 'imprint', component: ImprintComponent },
{ path: 'legal-notice', component: LegalNoticeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
