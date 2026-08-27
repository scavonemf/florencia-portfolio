import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '../Hero/Hero'

describe('Hero section', () => {
  it('renders CTA buttons and opens modal', () => {
    render(<Hero />)

    expect(screen.getByRole('button', { name: 'ctaPrimary' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Florencia Scavone\'s CV in PDF format' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'ctaPrimary' }))

    expect(screen.getByLabelText('Close modal')).toBeInTheDocument()
  })
})
