import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsheetComponent } from './actionsheet/actionsheet';
import { UserlistComponent } from './userlist/userlist';
@NgModule({
	declarations: [ActionsheetComponent,
    UserlistComponent],
	imports: [BrowserModule],
	exports: [ActionsheetComponent,
    UserlistComponent]
})
export class ComponentsModule {}
