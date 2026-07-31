import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'

describe('Contact section', () => {
  it('renders the form and updates input values', () => {
    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('placeholderName')
    const emailInput = screen.getByPlaceholderText('tu@email.com')
    const messageInput = screen.getByPlaceholderText('placeholderMessage')
    const submitButton = screen.getByRole('button', { name: 'btnSubmit' })

    fireEvent.change(nameInput, { target: { value: 'Florencia' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hola!' } })

    expect(nameInput).toHaveValue('Florencia')
    expect(emailInput).toHaveValue('test@example.com')
    expect(messageInput).toHaveValue('Hola!')
    expect(submitButton).toBeInTheDocument()
  })
})
