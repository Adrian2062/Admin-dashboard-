<script setup>
import { computed } from 'vue';
import { useSidebarStore } from '../../stores/sidebar';
import { menuItems } from '../../menuConfig';
import SidebarItem from './SidebarItem.vue';
import { ChevronsLeft, Activity } from 'lucide-vue-next';

const sidebarStore = useSidebarStore();
const isCollapsed = computed(() => sidebarStore.isCollapsed);
</script>

<template>
  <aside 
    class="fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-out"
    :class="[
      isCollapsed ? 'w-20' : 'w-72',
      'p-4' 
    ]"
  >
    <!-- Glass Container -->
    <div class="h-full flex flex-col bg-midnight-900/80 backdrop-blur-xl border border-glass-border rounded-2xl shadow-glass-md overflow-hidden relative">
      
      <!-- Brand Logo -->
      <div class="h-20 flex items-center px-5 border-b border-glass-border">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-neon-glow">
            <Activity class="text-white" :size="24" />
          </div>
          <span 
            class="font-display font-bold text-xl tracking-wide text-heading transition-opacity duration-300"
            :class="[isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100']"
          >
            Vue Project
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto px-3 py-6 space-y-6 custom-scrollbar">
        <div v-for="(category, index) in menuItems" :key="index">
          <h3 
            v-if="!isCollapsed"
            class="px-3 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider transition-opacity duration-300"
          >
            {{ category.category }}
          </h3>
          <div class="space-y-1">
            <SidebarItem 
              v-for="item in category.items" 
              :key="item.label" 
              :item="item" 
              :is-collapsed="isCollapsed" 
            />
          </div>
        </div>
      </nav>

      <!-- Footer / Collapse Toggle -->
      <div class="p-4 border-t border-glass-border bg-black/20">
        <button 
          @click="sidebarStore.toggleCollapse"
          class="w-full flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronsLeft 
            :size="20" 
            class="transition-transform duration-300"
            :class="{ 'rotate-180': isCollapsed }"
          />
          <span 
            class="ml-2 font-medium transition-all duration-300" 
            :class="[isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100']"
          >
            Collapse Sidebar
          </span>
        </button>
      </div>

    </div>
  </aside>

  <!-- Mobile Overlay -->
  <div 
    v-if="sidebarStore.isMobileOpen" 
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
    @click="sidebarStore.closeMobile"
  ></div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
</style>
