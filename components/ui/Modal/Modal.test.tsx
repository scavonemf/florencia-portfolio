import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  it('renders children when open and calls onClose when Close button is clicked', () => {
    const onClose = jest.fn()

    render(
      <Modal open={true} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    )

    expect(screen.getByText('Modal content')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not render when closed', () => {
    const onClose = jest.fn()
    render(
      <Modal open={false} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    )

    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })
})
