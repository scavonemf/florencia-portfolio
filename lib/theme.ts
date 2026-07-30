function getShouldBeDark() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

export function applyTheme() {
  const isDark = getShouldBeDark()
  document.documentElement.classList.toggle('dark', isDark)
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  return isDark
}

// export const themeInitScript = `(function(){var isDark=localStorage.theme==='dark'||(!('theme' in localStorage)&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',isDark);})();`

const THEME_CHANGE_EVENT = 'theme-change'

function subscribe(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback)
}

export function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.theme = isDark ? 'dark' : 'light'
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  return isDark
}

export { subscribe as subscribeTheme }