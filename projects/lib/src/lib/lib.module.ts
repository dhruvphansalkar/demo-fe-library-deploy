import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { PillTabsModule } from './modules/pill-tabs/pill-tabs.module';
import { AccordionModule } from './modules/accordion/accordion.module';
import { DatePickerModule } from './modules/date-picker/date-picker.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { FooterModule } from './modules/footer/footer.module';
import { GoToTopButtonModule } from './modules/go-to-top-button/go-to-top-button.module';
import { HeaderModule } from './modules/header/lib-header.module';
import { NavModule } from './modules/nav/lib-nav.module';
import { SidebarModule } from './modules/sidebar/lib-sidebar.module';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { TooltipModule } from './modules/tooltip/tooltip.module';
import { TextIconModule } from './modules/text-icon/text-icon.module';
import { InputElementsModule } from './modules/input-elements/input-elements.module';
import { TreeMenuModule } from './modules/tree-menu/tree-menu.module';


@NgModule({
  declarations: [LibComponent],
  imports: [
    AccordionModule,
    DatePickerModule,
    DropdownModule,
    FooterModule,
    GoToTopButtonModule,
    HeaderModule,
    NavModule,
    PillTabsModule,
    SidebarModule,
    SpinnerModule,
    TooltipModule,
    InputElementsModule,
    TreeMenuModule
  ],
  exports: [
    AccordionModule,
    DatePickerModule,
    DropdownModule,
    FooterModule,
    GoToTopButtonModule,
    HeaderModule,
    NavModule,
    PillTabsModule,
    SidebarModule,
    SpinnerModule,
    TooltipModule,
    TextIconModule,
    InputElementsModule,
    TreeMenuModule
  ]
})
export class LibModule { }
