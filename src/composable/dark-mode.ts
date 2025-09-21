import { ref } from 'vue'

export function useDarkMode() {
  const htmlTag = document.getElementsByTagName('html')[0]
  const isDarkMode = ref(htmlTag?.classList.contains('dark'))

  function loadDarkMode() {
    if (
      localStorage.getItem('dark-mode') === 'dark' ||
      (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      isDarkMode.value = true
    } else {
      document.documentElement.classList.remove('dark')
      isDarkMode.value = false
    }
  }

  function toggleDarkMode() {
    if (isDarkMode.value) {
      htmlTag?.classList.remove('dark')
      localStorage.setItem('dark-mode', 'light')
    } else {
      htmlTag?.classList.add('dark')
      localStorage.setItem('dark-mode', 'dark')
    }

    isDarkMode.value = htmlTag?.classList.contains('dark')
  }

  function setDarkMode(mode: 'dark' | 'light') {
    if (mode === 'light') {
      htmlTag?.classList.remove('dark')
      localStorage.setItem('dark-mode', 'light')
    } else if (mode === 'dark') {
      htmlTag?.classList.add('dark')
      localStorage.setItem('dark-mode', 'dark')
    }

    isDarkMode.value = htmlTag?.classList.contains('dark')
  }

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
    loadDarkMode
  }
}
