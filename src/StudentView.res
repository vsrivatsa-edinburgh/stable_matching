type response
@val external fetch: string => promise<response> = "fetch"
@send external json: response => promise<'a> = "json"

@val external jsonToStudentProject: Js.Json.t => Types.studentProject = "jsonToStudentProject"

let defaultStudentProjects: array<Types.studentProject> = [
  {
    rank: 1,
    name: "Sample Project",
    supervisor: "Sample Supervisor",
    demand: 1,
    suitability: Suitable,
  },
  {
    rank: 2,
    name: "Sample Project 2",
    supervisor: "Sample Supervisor 2",
    demand: 2,
    suitability: Unsuitable,
  },
  {
    rank: 3,
    name: "Sample Project 3",
    supervisor: "Sample Supervisor 3",
    demand: 10,
    suitability: Unknown,
  },
]

@react.component
let make = () => {
  let (projects, setProjects) = React.useState(() => [])

  React.useEffect0(() => {
    open Utils
    open Promise
    fetchApi("/api/projects", ~method=#POST)
    ->then(res => {
      let statusCode = res->Fetch.Response.status->Int.toString
      if statusCode->String.charAt(0) == "2" {
        let json = res->Fetch.Response.json
        json->then(
          json =>
            setProjects(
              _ => json->JSON.Decode.array->Option.getOr([])->Array.map(jsonToStudentProject),
            )->resolve,
        )
      } else {
        setProjects(_ => defaultStudentProjects)
        Js.log("Error: " ++ statusCode)->resolve
      }
    })
    ->catch(error => Js.log(error)->resolve)
    ->ignore
    None
  })

  <div className="flex flex-col min-w-full container mx-auto gap-4">
    <h2 className="font-semibold text-lg">
      {React.string("Your projects (" ++ projects->Array.length->Int.toString ++ ")")}
    </h2>
    <table className="min-w-full bg-white items-start">
      <thead />
      <tbody>
        <tr draggable={true}>
          <td className="font-semibold border px-4 py-2"> {React.string("Rank")} </td>
          <td className="font-semibold border px-4 py-2"> {React.string("Project")} </td>
          <td className="font-semibold border px-4 py-2"> {React.string("Supervisor")} </td>
          <td className="font-semibold border px-4 py-2"> {React.string("Demand")} </td>
          <td className="font-semibold border px-4 py-2"> {React.string("Suitability")} </td>
        </tr>
        {projects
        ->Array.mapWithIndex((project, index) => {
          <tr
            className={switch project.suitability {
            | Suitable => "bg-green-100"
            | Unsuitable => "bg-red-100"
            | Unknown => "bg-white"
            }}
            key={index->Int.toString}
            draggable={true}>
            <td className="border px-4 py-2"> {React.string(project.rank->Int.toString)} </td>
            <td className="border px-4 py-2"> {React.string(project.name)} </td>
            <td className="border px-4 py-2"> {React.string(project.supervisor)} </td>
            <td className="border px-4 py-2"> {React.string(project.demand->Int.toString)} </td>
            <td className="border px-4 py-2">
              {React.string(
                switch project.suitability {
                | Suitable => "Suitable"
                | Unsuitable => "Unsuitable"
                | Unknown => "Unknown"
                },
              )}
            </td>
          </tr>
        })
        ->React.array}
      </tbody>
    </table>
  </div>
}
