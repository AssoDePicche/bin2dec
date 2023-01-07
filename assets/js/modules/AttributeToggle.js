export default class AttributeToggle {
  static disable(component) {
    let state = component.getAttribute("disabled");

    if (state) {
      return component.removeAttribute("disabled");
    }

    return component.setAttribute("disabled", "false");
  }
}
