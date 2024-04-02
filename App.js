import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React JS" 
);
// createElement takes 3 parameters, 1st EventTarget, 2nd, attributes of that tag like id & class, 3rd what text we need to show
// console.log(heading); // this is nothing but an JS object not only h1 tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // now our render method will convert this our heading object of js to h1 tag.


// Few examples of React create Element.

// ex: 01:-
// <div id="parent">
//             <div id="child">
//                 <h1>Hello i am h1 tag</h1>
//             </div>
//         </div>

const ex1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello i am h1 tag")
  )
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(ex1);




// ex: 02:-
// <div id="parent">
//             <div id="child">
//                 <h1>Hello i am h1 tag</h1>
//                 <h2>Hello i am h2 tag</h2>
//             </div>
//         </div>

const ex2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div",
  { id: "child" },
  [
    React.createElement("h1", {}, "Hello i am h1 tag"),
    React.createElement("h2", {}, "Hello i am h2 tag"),
  ])
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(ex2);



// ex: 03:-
// <div id="parent">
//             <div id="child1">
//                 <h1>Hello i am h1 tag</h1>
//                 <h2>Hello i am h2 tag</h2>
//             </div>
//             <div id="child2">
//                 <h1>Hello i am h1 tag</h1>
//                 <h2>Hello i am h2 tag</h2>
//             </div>
//         </div>

const ex3 = React.createElement(
    "div",
    { id: "parent" },[React.createElement("div",
    { id: "child1" },
    [
      React.createElement("h1", {}, "Hello i am h1 tag from chiled1"),
      React.createElement("h2", {}, "Hello i am h2 tag from chiled1"),
    ]),
    React.createElement("div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "Hello i am h1 tag from chiled2"),
      React.createElement("h2", {}, "Hello i am h2 tag from chiled2"),
    ])]
  );

const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(ex3);


// Note About JSX:-
// So this is all about only 10 to 12 lines of code but what if the code goes in 1000 lines and MutationRecord,
// then at that we can not affort to do all like this right, soo to avoid all this kind of stuff,
// we have something like "JSX", pepoles say that React can only be written in JSX but NO,
// we can also write it using simple Javascript and this is what happen in background of JSA as well.