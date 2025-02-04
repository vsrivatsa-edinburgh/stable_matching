@react.component
let make = () => {
  let (view, setView) = React.useState(() => Types.StudentView)

  {
    <div className="bg-gray-200 flex flex-col h-screen">
      <div
        className="flex flex-row items-center justify-between p-4 bg-white shadow-md sticky top-0">
        <img src="/logo.jpeg" alt="Logo" className="h-20" />
        <h1 className="mx-auto text-xl font-bold"> {React.string("Project Allocation")} </h1>
      </div>
      <div className="flex flex-col my-8 mx-auto gap-4 w-3/4">
        <div className="flex flex-row">
          <button
            className={`p-2 mr-2 ${view === StudentView
                ? "bg-blue-500 text-white"
                : "bg-gray-200"}`}
            onClick={_ => setView(_ => StudentView)}>
            {React.string("Student View")}
          </button>
          <button
            className={`p-2 ${view === SupervisorView ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={_ => setView(_ => SupervisorView)}>
            {React.string("Supervisor View")}
          </button>
        </div>
        <div className="flex flex-row">
          {switch view {
          | StudentView => <StudentView />
          | SupervisorView => <SupervisorView />
          }}
        </div>
      </div>
    </div>
  }
}
