/**
 *
 *
 * Index.js - Contains the business logic for the main application component.
 *
 *
 */

const appConfiguration = {
  window: {
    width: 1200,
    height: 800,
    title: "Monkey Shoulder"
  }
}

if (fs.fileExists("./config.json")) {
  appConfiguration = JSON.parse(fs.readFile("./config.json"))
} else {
  fs.writeFile("./config.json", JSON.stringify(appConfiguration, null, 2))
}

function updateNumberOne(buffer) {
  var element = getElementById("numberOneLabel");
  element.setText(buffer);
}

function updateNumberTwo(buffer) {
  var element = getElementById("numberTwoLabel");
  element.setText(buffer);
}