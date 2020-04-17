import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailComposeComponent } from './mailcompose.component';



const routes = [
    {
        path: 'mailcompose',
        component: MailComposeComponent
    }
];



@NgModule({
    declarations: [
        MailComposeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
       ],
    exports: [
        MailComposeComponent
    ]
})

export class MailComposeModule {
}
