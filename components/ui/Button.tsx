// src/components/ui/Button.tsx
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "text-[13px] px-[22px] py-[9px] rounded-lg transition-all duration-300 inline-block font-medium text-center"
  const variants = {
    primary: "bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-85 disabled:opacity-50",
    secondary: "border border-neutral-200/60 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}