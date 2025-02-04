type view =
  | StudentView
  | SupervisorView

type suitability = Suitable | Unsuitable | Unknown

type studentProject = {
  rank: int,
  name: string,
  supervisor: string,
  demand: int,
  suitability: suitability,
}

type project = {
  date: Js.Date.t,
  name: string,
  supervisor: string,
  demand: int,
  difficulty: int,
  tags: array<string>,
}
