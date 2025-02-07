import { useParams } from "react-router";

export function Concert() {
  let params = useParams()

  return (
    <div>Concert id is: {params.id} </div>
  )
}
