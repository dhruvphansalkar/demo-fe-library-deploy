import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxPageComponent } from './pages/checkbox-page/checkbox-page.component';
import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';
import { GoToTopButtonPageComponent } from './pages/go-to-top-button-page/go-to-top-button-page.component';
import { TextAreaPageComponent } from './pages/text-area-page/text-area-page.component';
import { InputTextPageComponent } from './pages/input-text-page/input-text-page.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { DemoComponent } from './demo.component';
import { PillTabPageComponent } from './pages/pill-tab-page/pill-tab-page.component';
import { AccordianPageComponent } from './pages/accordian-page/accordian-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { NavPageComponent } from './pages/nav-page/nav-page.component';
import { SwitchPageComponent } from './pages/switch-page/switch-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { DropdownPageComponent } from './pages/dropdown-page/dropdown-page.component';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';
import { PaginatorPageComponent } from './pages/paginator-page/paginator-page.component';
import { RadioButtonPageComponent } from './pages/radio-button-page/radio-button-page.component';
import { TreeMenuPageComponent } from './pages/tree-menu-page/tree-menu-page.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'prefix'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'footer', component: FooterPageComponent
  },
  {
    path: 'go-to-top-button-demo',
    component: GoToTopButtonPageComponent
  },
  {
    path: 'button-examples',
    component: ButtonPageComponent
  },
  {
    path: 'pill-tab-example',
    component: PillTabPageComponent
  },
  {
    path: 'text-area-examples',
    component: TextAreaPageComponent
  },
  {
    path: 'dropdown-examples',
    component: DropdownPageComponent
  },
  {
    path: 'nav-page',
    component: NavPageComponent
  },
  {
    path: 'accordian-examples',
    component: AccordianPageComponent
  },
  {
    path: 'header',
    component: HeaderPageComponent
  },
  {
    path: 'checkbox-page',
    component: CheckboxPageComponent
  },
  {
    path: 'input-text-page',
    component: InputTextPageComponent
  },
  {
    path: 'tooltip-page',
    component: TooltipPageComponent
  },
  {
    path: 'switch-page',
    component: SwitchPageComponent
  },
  {
    path: 'datepicker',
    component: DatePickerPageComponent
  },
  {
    path: 'sidebar-page',
    component: SidebarPageComponent
  },
  {
    path: 'spinner-example',
    component: SpinnerPageComponent
  },
  {
    path: 'paginator-example',
    component: PaginatorPageComponent
  },
  {
    path: 'radio-button-example',
    component: RadioButtonPageComponent
  },
  {
    path: 'tree-menu-page',
    component: TreeMenuPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
