<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div 
    class="glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-neon-glow/20 group"
    :class="className"
  >
    <!-- Shine Effect -->
    <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none"></div>
    
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Reliance on global style.css for .glass-card */
</style>
