(function () {
  // Utility to detect the type of object
  function getObjectType(element) {
    const tag = element.tagName.toLowerCase();
    if (tag === "img") return "image";
    if (tag === "select") return "drop-down";
    if (tag === "input") return element.type || "input";
    if (tag === "textarea") return "text";
    if (tag === "button") return "button";
    if (tag === "a") return "link";
    if (element.hasAttribute("contenteditable")) return "editable text";
    return "text";
  }

  // Function to format current timestamp
  function getTimestamp() {
    return new Date().toISOString();
  }

  // Log page view
  console.log(`${getTimestamp()} , view , page`);

  // Log all click events
  document.addEventListener("click", function (event) {
    const target = event.target;
    const objectType = getObjectType(target);
    console.log(`${getTimestamp()} , click , ${objectType}`);
  });

  // Log all hover events (mouseover)
  document.addEventListener("mouseover", function (event) {
    const target = event.target;
    const objectType = getObjectType(target);
    console.log(`${getTimestamp()} , view , ${objectType}`);
  });
})();
