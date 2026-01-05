<script setup>
import { computed } from 'vue';
import { useSidebarStore } from '../../stores/sidebar';
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';

const sidebarStore = useSidebarStore();
const isCollapsed = computed(() => sidebarStore.isCollapsed);
</script>

<template>
  <div class="min-h-screen bg-antigravity-gradient bg-fixed text-gray-300 font-sans selection:bg-neon-purple-DEFAULT selection:text-white relative overflow-hidden">
    
    <!-- Ambient Background Glows -->
    <div class="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-purple-DEFAULT/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
    <div class="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content Area -->
    <div 
      class="relative flex flex-col min-h-screen transition-all duration-300 ease-out z-10"
      :class="[isCollapsed ? 'lg:pl-24' : 'lg:pl-80']"
    >
      <Topbar />

      <main class="flex-1 p-6 pt-24 overflow-x-hidden">
        <!-- Content Transition -->
        <router-view v-slot="{ Component }">
          <transition 
            enter-active-class="transition ease-out duration-300" 
            enter-from-class="opacity-0 translate-y-4" 
            enter-to-class="opacity-100 translate-y-0" 
            leave-active-class="transition ease-in duration-200" 
            leave-from-class="opacity-100 translate-y-0" 
            leave-to-class="opacity-0 translate-y-4"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Glass Footer -->
      <footer class="mt-auto py-6 px-8 text-center text-sm text-gray-600 border-t border-glass-border mx-6 mb-4 rounded-2xl bg-white/5 backdrop-blur-sm">
        <p>&copy; 2024 Antigravity Admin. Built with Vue 3 & Tailwind.</p>
      </footer>
    </div>
  </div>
</template>
