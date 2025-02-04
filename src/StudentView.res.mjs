// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Utils from "./Utils.res.mjs";
import * as React from "react";
import * as Core__JSON from "@rescript/core/src/Core__JSON.res.mjs";
import * as Core__Option from "@rescript/core/src/Core__Option.res.mjs";
import * as Core__Promise from "@rescript/core/src/Core__Promise.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

var defaultStudentProjects = [
  {
    rank: 1,
    name: "Sample Project",
    supervisor: "Sample Supervisor",
    demand: 1,
    suitability: "Suitable"
  },
  {
    rank: 2,
    name: "Sample Project 2",
    supervisor: "Sample Supervisor 2",
    demand: 2,
    suitability: "Unsuitable"
  },
  {
    rank: 3,
    name: "Sample Project 3",
    supervisor: "Sample Supervisor 3",
    demand: 10,
    suitability: "Unknown"
  }
];

function StudentView(props) {
  var match = React.useState(function () {
        return [];
      });
  var setProjects = match[1];
  var projects = match[0];
  React.useEffect((function () {
          Core__Promise.$$catch(Utils.fetchApi("/api/projects", undefined, "POST").then(function (res) {
                    var statusCode = res.status.toString();
                    if (statusCode.charAt(0) === "2") {
                      var json = res.json();
                      return json.then(function (json) {
                                  return Promise.resolve(setProjects(function (param) {
                                                  return Core__Option.getOr(Core__JSON.Decode.array(json), []).map(function (prim) {
                                                              return jsonToStudentProject(prim);
                                                            });
                                                }));
                                });
                    }
                    setProjects(function (param) {
                          return defaultStudentProjects;
                        });
                    return Promise.resolve((console.log("Error: " + statusCode), undefined));
                  }), (function (error) {
                  return Promise.resolve((console.log(error), undefined));
                }));
        }), []);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h2", {
                      children: "Your projects (" + projects.length.toString() + ")",
                      className: "font-semibold text-lg"
                    }),
                JsxRuntime.jsxs("table", {
                      children: [
                        JsxRuntime.jsx("thead", {}),
                        JsxRuntime.jsxs("tbody", {
                              children: [
                                JsxRuntime.jsxs("tr", {
                                      children: [
                                        JsxRuntime.jsx("td", {
                                              children: "Rank",
                                              className: "font-semibold border px-4 py-2"
                                            }),
                                        JsxRuntime.jsx("td", {
                                              children: "Project",
                                              className: "font-semibold border px-4 py-2"
                                            }),
                                        JsxRuntime.jsx("td", {
                                              children: "Supervisor",
                                              className: "font-semibold border px-4 py-2"
                                            }),
                                        JsxRuntime.jsx("td", {
                                              children: "Demand",
                                              className: "font-semibold border px-4 py-2"
                                            }),
                                        JsxRuntime.jsx("td", {
                                              children: "Suitability",
                                              className: "font-semibold border px-4 py-2"
                                            })
                                      ],
                                      draggable: true
                                    }),
                                projects.map(function (project, index) {
                                      var match = project.suitability;
                                      var tmp;
                                      switch (match) {
                                        case "Suitable" :
                                            tmp = "Suitable";
                                            break;
                                        case "Unsuitable" :
                                            tmp = "Unsuitable";
                                            break;
                                        case "Unknown" :
                                            tmp = "Unknown";
                                            break;
                                        
                                      }
                                      var match$1 = project.suitability;
                                      var tmp$1;
                                      switch (match$1) {
                                        case "Suitable" :
                                            tmp$1 = "bg-green-100";
                                            break;
                                        case "Unsuitable" :
                                            tmp$1 = "bg-red-100";
                                            break;
                                        case "Unknown" :
                                            tmp$1 = "bg-white";
                                            break;
                                        
                                      }
                                      return JsxRuntime.jsxs("tr", {
                                                  children: [
                                                    JsxRuntime.jsx("td", {
                                                          children: project.rank.toString(),
                                                          className: "border px-4 py-2"
                                                        }),
                                                    JsxRuntime.jsx("td", {
                                                          children: project.name,
                                                          className: "border px-4 py-2"
                                                        }),
                                                    JsxRuntime.jsx("td", {
                                                          children: project.supervisor,
                                                          className: "border px-4 py-2"
                                                        }),
                                                    JsxRuntime.jsx("td", {
                                                          children: project.demand.toString(),
                                                          className: "border px-4 py-2"
                                                        }),
                                                    JsxRuntime.jsx("td", {
                                                          children: tmp,
                                                          className: "border px-4 py-2"
                                                        })
                                                  ],
                                                  className: tmp$1,
                                                  draggable: true
                                                }, index.toString());
                                    })
                              ]
                            })
                      ],
                      className: "min-w-full bg-white items-start"
                    })
              ],
              className: "flex flex-col min-w-full container mx-auto gap-4"
            });
}

var make = StudentView;

export {
  defaultStudentProjects ,
  make ,
}
/* react Not a pure module */
