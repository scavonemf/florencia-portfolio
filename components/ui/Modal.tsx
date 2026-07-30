'use client'

interface ModalProps {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-200 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            {children}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
