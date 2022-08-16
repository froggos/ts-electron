import { elementFactory } from "./functions";

const v_principal = document.getElementById("ventana");

let div_col      : any = elementFactory("div", { class: 'col'}, "Se logrará?");
let div_row      : any = elementFactory("div", { class: 'row' }, div_col);
let div_container: any = elementFactory("div", { class: 'container' }, div_row);

v_principal?.append(div_container);
