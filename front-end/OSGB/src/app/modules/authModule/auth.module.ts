import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from '../authModule/components/auth.component';
import { AuthService } from './services/auth-service.service';

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AuthRoutingModule,
    ],
    providers: [AuthService],
    entryComponents: [AuthComponent],
})

export class AuthModule {
}
