<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ChevronDown } from 'lucide-vue-next';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isCollapsed: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();
const isOpen = ref(false);

const isActive = computed(() => {
  if (props.item.route) {
    return route.path === props.item.route;
  }
  if (props.item.children) {
    return props.item.children.some(child => route.path === child.route);
  }
  return false;
});

const toggleSubmenu = () => {
  if (props.isCollapsed) return;
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="mb-1">
    <!-- Single Link -->
    <router-link
      v-if="!item.children"
      :to="item.route"
      class="group relative flex items-center px-3 py-2.5 rounded-xl transition-all duration-300"
      :class="[
        isActive 
          ? 'bg-primary/10 text-primary shadow-neon-glow border border-primary/20' 
          : 'text-main hover:text-heading hover:bg-black/5 dark:hover:bg-white/5'
      ]"
    >
      <!-- Active Indicator (Left Line) -->
      <div 
        v-if="isActive"
        class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_10px_var(--color-primary)]"
      ></div>

      <!-- Icon Wrapper -->
      <div 
        class="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300"
        :class="[
          isActive 
            ? 'bg-primary/20 text-primary' 
            : 'bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 text-main group-hover:text-heading'
        ]"
      >
        <component :is="item.icon" :size="20" stroke-width="1.5" />
      </div>

      <!-- Label -->
      <span 
        class="ml-3 font-medium transition-all duration-300 overflow-hidden whitespace-nowrap"
        :class="[isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100']"
      >
        {{ item.label }}
      </span>
      
      <!-- Tooltip for collapsed mode -->
      <div 
        v-if="isCollapsed"
        class="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 dark:bg-black text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 border border-white/10 shadow-xl"
      >
        {{ item.label }}
      </div>
    </router-link>

    <!-- Submenu Parent -->
    <button
      v-else
      @click="toggleSubmenu"
      class="w-full group relative flex items-center px-3 py-2.5 rounded-xl transition-all duration-300"
      :class="[
        isActive 
          ? 'text-heading' 
          : 'text-main hover:text-heading hover:bg-black/5 dark:hover:bg-white/5'
      ]"
    >
      <!-- Icon Wrapper -->
      <div 
        class="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300"
        :class="[
          isActive 
            ? 'bg-primary/20 text-primary' 
            : 'bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10'
        ]"
      >
        <component :is="item.icon" :size="20" stroke-width="1.5" />
      </div>

      <!-- Label & Chevron -->
      <div 
        class="flex items-center justify-between flex-1 ml-3 overflow-hidden transition-all duration-300"
        :class="[isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100']"
      >
        <span class="font-medium">{{ item.label }}</span>
        <ChevronDown 
          :size="16" 
          class="transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </button>

    <!-- Submenu Children -->
    <div 
      v-if="item.children && !isCollapsed"
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: isOpen ? `${item.children.length * 50}px` : '0px' }"
    >
      <div class="mt-1 ml-5 pl-4 border-l border-black/10 dark:border-white/10 space-y-1">
        <router-link
          v-for="child in item.children"
          :key="child.route"
          :to="child.route"
          class="block px-3 py-2 text-sm rounded-lg transition-all duration-200"
          :class="[
            route.path === child.route 
              ? 'text-heading bg-black/5 dark:bg-white/5 shadow-inner' 
              : 'text-main hover:text-heading hover:bg-black/5 dark:hover:bg-white/5'
          ]"
        >
          {{ child.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>
