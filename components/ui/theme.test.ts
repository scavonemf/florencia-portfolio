import { applyTheme, getIsDark, toggleTheme } from '../../lib/theme'

describe('theme utilities', () => {
  it('should default to light when no preference is set and no dark system match', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      })),
    })

    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')

    const result = applyTheme()

    expect(result).toBe(false)
    expect(getIsDark()).toBe(false)
  })

  it('should enable dark when localStorage.theme is dark', () => {
    localStorage.theme = 'dark'
    document.documentElement.classList.remove('dark')

    const result = applyTheme()

    expect(result).toBe(true)
    expect(getIsDark()).toBe(true)
  })

  it('should toggle dark mode and persist choice', () => {
    document.documentElement.classList.remove('dark')
    const result = toggleTheme()

    expect(result).toBe(true)
    expect(localStorage.theme).toBe('dark')
    expect(getIsDark()).toBe(true)

    const result2 = toggleTheme()
    expect(result2).toBe(false)
    expect(localStorage.theme).toBe('light')
    expect(getIsDark()).toBe(false)
  })
})
