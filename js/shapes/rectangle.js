// rectangle.js
import { center } from "../canvas.js";
import { makeSelectable } from "../select.js";
import { makeDraggable } from "../drag.js";
import { updateLayers } from "../layers.js";
import { pushState } from "../undo.js";

function createRectangle() {
  const el = document.createElement("div");
  el.classList.add("canvas-el", "rectangle");
  el.style.position = "absolute";
  el.style.left = Math.max(20, center.offsetWidth  / 2 - 70) + "px";
  el.style.top  = Math.max(20, center.offsetHeight / 2 - 40) + "px";

  makeSelectable(el);
  makeDraggable(el);
  center.appendChild(el);
  updateLayers();
  pushState();
}

export { createRectangle };
