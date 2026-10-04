import React, { useState } from 'react'

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roll_number: '',
  })
  const [message, setMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('Submitting...')

    try {
      const response = await fetch('http://localhost:8000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || 'Unable to submit student data')
      }

      setMessage(data.message)
      setFormData({ name: '', email: '', roll_number: '' })
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div>
      <h2>Student Basic Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="roll_number">Roll Number</label>
          <input
            id="roll_number"
            name="roll_number"
            type="text"
            value={formData.roll_number}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
