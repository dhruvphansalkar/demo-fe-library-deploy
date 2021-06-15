import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './components/page/page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { CheckboxPageComponent } from './pages/checkbox-page/checkbox-page.component';
import { GoToTopButtonPageComponent } from './pages/go-to-top-button-page/go-to-top-button-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { LibModule } from 'projects/lib/src/lib/lib.module';
import { PillTabPageComponent } from './pages/pill-tab-page/pill-tab-page.component';
import { DemoComponent } from './demo.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { TextAreaPageComponent } from './pages/text-area-page/text-area-page.component';
import { InputTextPageComponent } from './pages/input-text-page/input-text-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownPageComponent } from './pages/dropdown-page/dropdown-page.component';
import { NavPageComponent } from './pages/nav-page/nav-page.component';
import { SwitchPageComponent } from './pages/switch-page/switch-page.component';
import { DemoRoutingModule } from './demo-routing.module';
import { AccordianPageComponent } from './pages/accordian-page/accordian-page.component';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { PaginatorPageComponent } from './pages/paginator-page/paginator-page.component';
import { RadioButtonPageComponent } from './pages/radio-button-page/radio-button-page.component';
import { TreeMenuPageComponent } from './pages/tree-menu-page/tree-menu-page.component';
import { TreeMenuModule } from '../../../../../lib/src/lib/modules/tree-menu/tree-menu.module';

const components = [
  DemoComponent,
  HomeComponent,
  PageComponent,
];

const pages = [
  ButtonPageComponent,
  CheckboxPageComponent,
  InputTextPageComponent,
  NavPageComponent,
  GoToTopButtonPageComponent,
  HeaderPageComponent,
  NavPageComponent,
  FooterPageComponent,
  DropdownPageComponent,
  TooltipPageComponent,
  SwitchPageComponent,
  DatePickerPageComponent,
  TextAreaPageComponent,
  AccordianPageComponent,
  PillTabPageComponent,
  SidebarPageComponent,
  SpinnerPageComponent,
  PaginatorPageComponent,
  RadioButtonPageComponent,
  TreeMenuPageComponent
];

@NgModule({
  declarations: [...components, ...pages],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    NgbModule,
    LibModule,
    TreeMenuModule
  ],
  exports: [...components, ...pages],
})
export class DemoModule { }
