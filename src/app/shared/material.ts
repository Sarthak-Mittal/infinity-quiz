import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule {

}
