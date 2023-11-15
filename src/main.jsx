import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootCreateElements = ReactDOM.createRoot(
  document.getElementById("root-create-elements")
);

root.render(
  <ul className="restaurant__list">
    <li className="restaurant">
      Restaurant Name: {restaurants[0].name}
      <h3>Menu:</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </li>
    <li className="restaurant">
      Restaurant Name: {restaurants[1].name}
      <h3>Menu:</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </li>
    <li className="restaurant">
      Restaurant Name: {restaurants[2].name}
      <h3>Menu:</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </li>
    <li className="restaurant">
      Restaurant Name: {restaurants[3].name}
      <h3>Menu:</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </li>
  </ul>
);

rootCreateElements.render(
  React.createElement("ul", { className: "restaurant__list" }, [
    React.createElement("li", { className: "restaurant" }, [
      `Restaurant Name: ${restaurants[0].name}`,
      React.createElement("h3", null, "Menu:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[0].menu[0].name}`),
        React.createElement("li", null, `${restaurants[0].menu[1].name}`),
        React.createElement("li", null, `${restaurants[0].menu[2].name}`),
      ]),
      React.createElement("h3", null, "Review:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[0].reviews[0].text}`),
        React.createElement("li", null, `${restaurants[0].reviews[1].text}`),
      ]),
    ]),
    React.createElement("li", { className: "restaurant" }, [
      `Restaurant Name: ${restaurants[1].name}`,
      React.createElement("h3", null, "Menu:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[1].menu[0].name}`),
        React.createElement("li", null, `${restaurants[1].menu[1].name}`),
      ]),
      React.createElement("h3", null, "Review:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[1].reviews[0].text}`),
        React.createElement("li", null, `${restaurants[1].reviews[1].text}`),
        React.createElement("li", null, `${restaurants[1].reviews[2].text}`),
      ]),
    ]),
    React.createElement("li", { className: "restaurant" }, [
      `Restaurant Name: ${restaurants[2].name}`,
      React.createElement("h3", null, "Menu:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[2].menu[0].name}`),
        React.createElement("li", null, `${restaurants[2].menu[1].name}`),
        React.createElement("li", null, `${restaurants[2].menu[2].name}`),
      ]),
      React.createElement("h3", null, "Review:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[2].reviews[0].text}`),
      ]),
    ]),
    React.createElement("li", { className: "restaurant" }, [
      `Restaurant Name: ${restaurants[3].name}`,
      React.createElement("h3", null, "Menu:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[3].menu[0].name}`),
        React.createElement("li", null, `${restaurants[3].menu[1].name}`),
      ]),
      React.createElement("h3", null, "Review:"),
      React.createElement("ul", null, [
        React.createElement("li", null, `${restaurants[3].reviews[0].text}`),
        React.createElement("li", null, `${restaurants[3].reviews[1].text}`),
      ]),
    ]),
  ])
);
