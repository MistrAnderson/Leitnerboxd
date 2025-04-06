import { add } from "@/store/cardsData/cardsSlice"
import { useAppDispatch } from "@/store/hooks"
import React, { useState } from "react"
import Button from "../button/Button"
import style from './cardForm.module.css'

export default function CardForm({ onAddCard }) {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({question: "", answer: ""})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(add({...formData}))
    setFormData({question: "", answer: ""})
    onAddCard()
  }

  return (
    <div>
      <p className={style.header1}>Add Card</p>

      <form onSubmit={handleSubmit} className={style.form}>

        <div>
          <label>Question</label>
          <textarea name="question" value={formData.question} onChange={handleChange} placeholder="What's the best operating system ?" />
        </div>

        <div>
          <label>Answer</label>
          <textarea name="answer" value={formData.answer} onChange={handleChange} placeholder="Linux" />
        </div>

        <Button type="submit">Add</Button>
      </form>
    </div>
  )
}
