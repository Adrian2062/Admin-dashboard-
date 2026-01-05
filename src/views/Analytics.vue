<script setup>
import GlassCard from '../components/ui/GlassCard.vue';
import { AreaChart, Activity, TrendingUp } from 'lucide-vue-next';

// Placeholder data would go here
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-heading font-display">Analytics</h1>
      <button class="px-4 py-2 bg-primary text-white rounded-xl shadow-neon-glow hover:bg-primary/90 transition-colors">
        Download Report
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GlassCard class="p-6">
        <div class="flex items-center gap-4">
          <div class="p-3 bg-primary/10 text-primary rounded-xl">
            <Activity :size="24" />
          </div>
          <div>
            <p class="text-sm text-main">Total Sessions</p>
            <h3 class="text-2xl font-bold text-heading">124,592</h3>
          </div>
        </div>
      </GlassCard>
      <GlassCard class="p-6">
        <div class="flex items-center gap-4">
           <div class="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
            <TrendingUp :size="24" />
          </div>
          <div>
            <p class="text-sm text-main">Conversion Rate</p>
            <h3 class="text-2xl font-bold text-heading">2.4%</h3>
          </div>
        </div>
      </GlassCard>
       <GlassCard class="p-6">
        <div class="flex items-center gap-4">
           <div class="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
            <AreaChart :size="24" />
          </div>
          <div>
            <p class="text-sm text-main">Avg. Duration</p>
            <h3 class="text-2xl font-bold text-heading">4m 32s</h3>
          </div>
        </div>
      </GlassCard>
    </div>

    <!-- Chart Placeholder -->
    <GlassCard class="h-[400px] flex items-center justify-center text-main">
      [Detailed Analytics Chart Component Would Go Here]
    </GlassCard>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.bg-primary { background-color: var(--color-primary); }
.text-primary { color: var(--color-primary); }
</style>
