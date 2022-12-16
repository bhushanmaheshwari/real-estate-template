import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit() {}

  login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
