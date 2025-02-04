let fetchApi = (uri, ~bodyStr: string="", ~method: Fetch.method) => {
  open Promise
  let body = switch method {
  | #GET => resolve(None)
  | _ => resolve(Some(Fetch.Body.string(bodyStr)))
  }
  body->then(body => {
    Fetch.fetch(
      uri,
      {
        method,
        ?body,
        headers: Fetch.Headers.empty,
      },
    )
    ->catch(err => {
      reject(err)
    })
    ->then(resp => {
      resolve(resp)
    })
  })
}
