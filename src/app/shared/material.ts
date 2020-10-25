import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {

}
