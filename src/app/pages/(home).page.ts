import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    template: `
        <h1>This is a shell for /, /categories and /products but not for /signIn</h1>
        ===> 
        <br>
        <router-outlet></router-outlet>
        <br>
        <===
    `,
    imports: [RouterModule]
})
export default class IndexPageComponent {

}