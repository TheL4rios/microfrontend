import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  {
    path: "x/2",
    component: TestComponent,
  },
  {
    path: "**",
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
