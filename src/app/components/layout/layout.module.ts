import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [AppRoutingModule, RouterLink],
})
export class LayoutModule {}
