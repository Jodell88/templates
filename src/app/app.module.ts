import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,  RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdGridListModule, MdToolbarModule,
         MdSidenavModule, MdListModule, MdInputModule, MdCardModule, MdDatepickerModule,
         MdNativeDateModule, MdSlideToggleModule, DateAdapter, MdTooltipModule, MdIconModule,
         MdMenuModule, MdAutocompleteModule, MdDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { MyDateAdapter } from './customdateadapter';
import { CustomReuseStrategy} from './customreusestrategy';
import { BillingCycleService} from './billing-cycle.service';
import { PackageDataService } from './package-data.service';
import { TechnicalFormComponent } from './technical-form/technical-form.component';
import { ForwardingFormComponent } from './forwarding-form/forwarding-form.component';
import { LoyaltyFormComponent } from './loyalty-form/loyalty-form.component';
import { CspFormComponent } from './csp-form/csp-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { RelocationFormComponent } from './relocation-form/relocation-form.component';
import { UpdownFormComponent } from './updown-form/updown-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { HighspeedFormComponent } from './highspeed-form/highspeed-form.component';
import { RetentionFormComponent } from './retention-form/retention-form.component';
import { AddonFormComponent } from './addon-form/addon-form.component';
import { RebateFormComponent } from './rebate-form/rebate-form.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnicalFormComponent,
    ForwardingFormComponent,
    LoyaltyFormComponent,
    CspFormComponent,
    PaymentFormComponent,
    BillingFormComponent,
    RelocationFormComponent,
    UpdownFormComponent,
    WorkFormComponent,
    HighspeedFormComponent,
    RetentionFormComponent,
    AddonFormComponent,
    RebateFormComponent,
    HeaderbarComponent,
    HomeComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ClipboardModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'billing',
        component: BillingFormComponent
      },
      {
        path: 'technical',
        component: TechnicalFormComponent
      },
      {
        path: 'portforwarding',
        component: ForwardingFormComponent
      },
      {
        path: 'loyalty',
        component: LoyaltyFormComponent
      },
      {
        path: 'csp',
        component: CspFormComponent
      },
      {
        path: 'payment',
        component: PaymentFormComponent
      },
      {
        path: 'relocation',
        component: RelocationFormComponent
      },
      {
        path: 'upgradedowngrade',
        component: UpdownFormComponent
      },
      {
        path: 'workorder',
        component: WorkFormComponent
      },
      {
        path: 'highspeed',
        component: HighspeedFormComponent
      },
      {
        path: 'retention',
        component: RetentionFormComponent
      },
      {
        path: 'addon',
        component: AddonFormComponent
      },
      {
        path: 'rebate',
        component: RebateFormComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },

    ]),
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdSelectModule, MdGridListModule,
    MdToolbarModule, MdSidenavModule, MdListModule, MdInputModule,
    MdCardModule, MdDatepickerModule, MdNativeDateModule, MdSlideToggleModule,
    MdTooltipModule, MdIconModule, MdMenuModule, MdAutocompleteModule, MdDialogModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
    BillingCycleService,
    PackageDataService
  ],
  entryComponents: [
    ContactListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
