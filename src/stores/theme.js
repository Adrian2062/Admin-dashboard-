import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
    const theme = useStorage('vue-project-theme', 'dark')

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        applyTheme()
    }

    function applyTheme() {
        const root = document.documentElement
        if (theme.value === 'dark') {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
    }

    // Initial application
    applyTheme()

    // Watch for external changes (optional, but good for reactivity)
    watch(theme, () => {
        applyTheme()
    })

    return {
        theme,
        toggleTheme
    }
})
