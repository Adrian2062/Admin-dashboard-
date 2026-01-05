<script setup>
import GlassCard from '../../components/ui/GlassCard.vue';

</script>

<template>
  <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-heading font-display">Live View</h1>
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse">
            <div class="w-2 h-2 rounded-full bg-red-500"></div>
            <span class="text-xs font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard class="p-10 flex flex-col items-center justify-center min-h-[400px]">
             <div class="text-center">
                <p class="text-main mb-2">Active Users Now</p>
                <h2 class="text-6xl font-bold text-heading mb-4">842</h2>
                <div class="w-full h-1 bg-glass-border rounded-full overflow-hidden">
                    <div class="h-full bg-primary w-3/4 animate-pulse"></div>
                </div>
            </div>
        </GlassCard>
         <GlassCard class="p-6 relative overflow-hidden">
             <!-- Placeholder map or live stream graphic -->
             <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
             <div class="relative z-10 flex items-center justify-center h-full text-main">
                 [Live Map Component Placeholder]
             </div>
        </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.bg-primary { background-color: var(--color-primary); }
</style>
