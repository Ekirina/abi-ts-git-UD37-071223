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
  title = 'TA37Calculadora';
}
const display: HTMLElement | null = document.querySelector("#display");
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
const calculator: HTMLElement | null = document.querySelector(".calculator");

const btnNumbers: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-number");

const btnOperators: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-operator");

const btnClear: HTMLElement | null = document.querySelector(".clear");

const btnEqual: HTMLElement | null = document.querySelector(".btn-equal");

buttons.forEach((item: HTMLButtonElement) => {
  item.addEventListener("click",() => {

    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string: string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";   
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }

    let texto: string = display.textContent;

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

    display.textContent = texto;
  });
});