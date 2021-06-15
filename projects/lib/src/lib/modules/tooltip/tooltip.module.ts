import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDemoDirective } from '../../directives/tooltip-demo.directive';


@NgModule({
    declarations: [TooltipDemoDirective],
    imports: [
        CommonModule
    ],
    exports: [TooltipDemoDirective]
})
export class TooltipModule { }
