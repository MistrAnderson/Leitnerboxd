import { add } from "@/store/cardsData/cardsSlice"
import { useAppDispatch } from "@/store/hooks"
import React, { useState } from "react"

export default function CardForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({question: "", answer: ""})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(add({...formData}))
    setFormData({question: "", answer: ""})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="question" value={formData.question} onChange={handleChange} placeholder="Question" />
      <input name="answer" value={formData.answer} onChange={handleChange} placeholder="Answer" />
      <button type="submit">Add Card</button>
    </form>
  )
}
