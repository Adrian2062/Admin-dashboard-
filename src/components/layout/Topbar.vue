<script setup>
import { computed } from 'vue';
import { useSidebarStore } from '../../stores/sidebar';
import { useThemeStore } from '../../stores/theme';
import { Menu, Search, Bell, User, Settings, LogOut, Moon, Sun } from 'lucide-vue-next';

const sidebarStore = useSidebarStore();
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.theme === 'dark');
</script>

<template>
  <header class="h-20 fixed top-0 right-0 left-0 z-40 px-6 flex items-center justify-between glass-panel lg:left-64 transition-all duration-300" 
    :class="{ '!left-20': sidebarStore.isCollapsed }">
    
    <!-- Mobile Toggle -->
    <button @click="sidebarStore.toggleMobile" class="lg:hidden p-2 hover:bg-white/10 rounded-lg text-heading">
      <Menu :size="24" />
    </button>

    <!-- Search Bar -->
    <div class="hidden md:flex items-center flex-1 max-w-lg ml-4">
      <div class="relative w-full group">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-main group-focus-within:text-primary transition-colors" :size="20" />
        <input 
          type="text" 
          placeholder="Search for everything..." 
          class="w-full bg-white dark:bg-black/20 border border-glass-border rounded-xl py-2.5 pl-10 pr-4 text-heading placeholder-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
        />
      </div>
    </div>

    <!-- Right Side Actions -->
    <div class="flex items-center gap-4">
      <!-- Theme Toggle -->
      <button 
        @click="themeStore.toggleTheme()"
        class="p-2 rounded-xl transition-all duration-300 group"
        :class="isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-black/5 text-gray-500 hover:text-gray-900'"
        title="Toggle Theme"
      >
        <component :is="isDark ? Sun : Moon" :size="20" class="transition-transform group-hover:rotate-12" />
      </button>

      <!-- Notifications -->
      <button class="relative p-2 rounded-xl transition-all duration-300 group"
      :class="isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-black/5 text-gray-500 hover:text-gray-900'"
      >
        <Bell :size="20" class="transition-transform group-hover:swing" />
        <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary shadow-neon-glow"></span>
      </button>

      <!-- Profile Dropdown -->
      <div class="relative group">
        <button class="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <div class="text-right hidden sm:block">
             <p class="text-sm font-medium text-heading">Admin User</p>
             <p class="text-xs text-main">Super Admin</p>
          </div>
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
            AP
          </div>
        </button>

        <!-- Dropdown Menu -->
        <div class="absolute right-0 top-full mt-2 w-48 py-2 bg-white dark:bg-midnight-900 border border-glass-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
          <a href="/profile" class="flex items-center gap-3 px-4 py-2 text-sm text-main hover:bg-black/5 dark:hover:bg-white/5 hover:text-heading transition-colors">
            <User :size="16" /> Profile
          </a>
          <a href="/settings" class="flex items-center gap-3 px-4 py-2 text-sm text-main hover:bg-black/5 dark:hover:bg-white/5 hover:text-heading transition-colors">
            <Settings :size="16" /> Settings
          </a>
           <div class="h-px bg-glass-border my-1"></div>
          <a href="/login" class="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut :size="16" /> Logout
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Additional specific overrides for topbar light mode elements if not using variables */
</style>
