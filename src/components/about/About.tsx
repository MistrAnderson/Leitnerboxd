import { useNavigate } from "react-router";
import Button, { CorrectButton, WrongButton } from "../button/Button";

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate("/quiz")}>Quiz</Button>
      <WrongButton onClick={() => console.log("wrong clicked")}>Wrong</WrongButton>
      <CorrectButton onClick={() => console.log("correct clicked")}>Correct</CorrectButton>
    </div>
  )
}
