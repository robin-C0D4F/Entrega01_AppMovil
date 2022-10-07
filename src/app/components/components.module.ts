import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations : [
        HeaderComponent,
    ],
    imports : [
        CommonModule,
        IonicModule
    ],
    exports : [
        HeaderComponent
    ]
})

export class ComponentsModules{

}