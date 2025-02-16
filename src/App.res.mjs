// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as StudentView from "./StudentView.res.mjs";
import * as SupervisorView from "./assets/SupervisorView.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

function App(props) {
  var match = React.useState(function () {
        return "StudentView";
      });
  var setView = match[1];
  var view = match[0];
  var tmp;
  tmp = view === "StudentView" ? JsxRuntime.jsx(StudentView.make, {}) : JsxRuntime.jsx(SupervisorView.make, {});
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("img", {
                              className: "h-20",
                              alt: "Logo",
                              src: "/logo.jpeg"
                            }),
                        JsxRuntime.jsx("h1", {
                              children: "Project Allocation",
                              className: "mx-auto text-xl font-bold"
                            })
                      ],
                      className: "flex flex-row items-center justify-between p-4 bg-white shadow-md sticky top-0"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("button", {
                                      children: "Student View",
                                      className: "p-2 mr-2 " + (
                                        view === "StudentView" ? "bg-blue-500 text-white" : "bg-gray-200"
                                      ),
                                      onClick: (function (param) {
                                          setView(function (param) {
                                                return "StudentView";
                                              });
                                        })
                                    }),
                                JsxRuntime.jsx("button", {
                                      children: "Supervisor View",
                                      className: "p-2 " + (
                                        view === "SupervisorView" ? "bg-blue-500 text-white" : "bg-gray-200"
                                      ),
                                      onClick: (function (param) {
                                          setView(function (param) {
                                                return "SupervisorView";
                                              });
                                        })
                                    })
                              ],
                              className: "flex flex-row"
                            }),
                        JsxRuntime.jsx("div", {
                              children: tmp,
                              className: "flex flex-row"
                            })
                      ],
                      className: "flex flex-col my-8 mx-auto gap-4 w-3/4"
                    })
              ],
              className: "bg-gray-200 flex flex-col h-screen"
            });
}

var make = App;

export {
  make ,
}
/* react Not a pure module */
