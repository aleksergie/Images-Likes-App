import { data } from "./persons";
import { Model } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

let personModel = new Model(data);
let targetElement = document.querySelector(".container__polaroids");
let personView = new View(targetElement);
let controller = new Controller(personModel, personView);