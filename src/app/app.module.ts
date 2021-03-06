import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ConsumptionComponent } from './consumption/consumption.component';
import { BrandComponent } from './brand/brand.component';
import { SummaryComponent } from './summary/summary.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { PapaParseModule } from 'ngx-papaparse';
import { ConsumptionService } from './consumption.service';
import { BarchartComponent } from './consumption/barchart/barchart.component';
import { TableComponent } from './consumption/table/table.component';
import { ConnectionmapComponent } from './consumption/connectionmap/connectionmap.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ConsumptionComponent,
        BrandComponent,
        SummaryComponent,
        BarchartComponent,
        TableComponent,
        ConnectionmapComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NgSelectModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        PapaParseModule,
        ROUTING
    ],
    providers: [ConsumptionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
