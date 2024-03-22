import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app2";

  user: any = null;

  constructor() {}

  setUser() {
    this.user = this.user ? null : { name: "Larios" };
    localStorage.setItem("userData", JSON.stringify(this.user));
    window.dispatchEvent(new Event("storage"));
  }
}
