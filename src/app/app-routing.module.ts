import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';



const routes: Routes = [ 
{ path: '', component: SlideshowComponent },
{ path: 'imprint', component: ImprintComponent },
{ path: 'legal-notice', component: LegalNoticeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
