<script setup>
import GlassCard from '../ui/GlassCard.vue';
import { ArrowUpRight, ArrowDownRight } from 'lucide-vue-next';

defineProps({
  title: String,
  value: String,
  trend: Number,
  trendLabel: String,
  icon: Object,
  iconColor: {
    type: String,
    default: 'text-neon-purple-DEFAULT'
  },
  iconBg: {
    type: String,
    default: 'bg-neon-purple-DEFAULT/10'
  }
});
</script>

<template>
  <GlassCard class="h-full flex flex-col justify-between">
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="text-sm text-main font-medium mb-1">{{ title }}</p>
        <h3 class="text-3xl font-bold text-heading font-display tracking-tight">{{ value }}</h3>
      </div>
      <div 
        class="p-3 rounded-xl flex items-center justify-center transition-colors duration-300"
        :class="iconBg"
      >
        <component :is="icon" :class="iconColor" :size="24" />
      </div>
    </div>
    
    <div class="flex items-center gap-2 mt-auto">
      <div 
        class="flex items-center text-xs font-bold px-2 py-1 rounded-lg"
        :class="trend > 0 ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'"
      >
        <ArrowUpRight v-if="trend > 0" :size="14" class="mr-1" />
        <ArrowDownRight v-else :size="14" class="mr-1" />
        {{ Math.abs(trend) }}%
      </div>
      <span class="text-xs text-gray-500">{{ trendLabel }}</span>
    </div>
  </GlassCard>
</template>
