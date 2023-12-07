import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display = "";

onButtonClick(item: string): void {
  if (item === "clear") {
    this.display = "";
  } else if (item === "backspace") {
    let string = this.display.toString();
    this.display = string.slice(0, string.length - 1);
  } else if (this.display !== "" && item === "equal") {
    try {
      const result = new Function('return ' + this.display)();
      this.display = result.toString();
    } catch (error) {
      this.display = 'Error';
    }
  } else if (this.display === "" && item === "equal") {
    this.display = "Null";
    setTimeout(() => (this.display = ""), 2000);
  } else {
    this.display += item;
  }

  let texto = this.display;

  texto = texto
    .replaceAll("//", "/")
    .replaceAll("++", "+")
    .replaceAll("--", "-")
    .replaceAll("**", "*")
    .replaceAll("..", ".")
    .replaceAll("+-", "-")
    .replaceAll("+*", "*")
    .replaceAll("+/", "/")
    .replaceAll("-+", "+")
    .replaceAll("-*", "*")
    .replaceAll("-/", "/")
    .replaceAll("*+", "+")
    .replaceAll("*-", "-")
    .replaceAll("*/", "/")
    .replaceAll("/+", "+")
    .replaceAll("/-", "-")
    .replaceAll("/*", "*")
    .replaceAll(".+", "+")
    .replaceAll(".-", "-")
    .replaceAll(".*", "*")
    .replaceAll("./", "/");

  this.display = texto;
}
}
