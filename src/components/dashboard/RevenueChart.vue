<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '../../stores/theme';
import GlassCard from '../ui/GlassCard.vue';
import VueApexCharts from 'vue3-apexcharts';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.theme === 'dark');

const series = ref([
  {
    name: 'Revenue',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Expenses',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]);

const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
    zoom: { enabled: false },
    background: 'transparent'
  },
  colors: ['#b026ff', '#3b82f6'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      stops: [0, 90, 100]
    }
  },
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { 
        colors: isDark.value ? '#9ca3af' : '#64748b' // gray-400 vs slate-500
      }
    }
  },
  yaxis: {
    labels: {
      style: { 
        colors: isDark.value ? '#9ca3af' : '#64748b' 
      },
      formatter: (val) => `$${val}k`
    }
  },
  grid: {
    borderColor: isDark.value ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    strokeDashArray: 4,
    yaxis: { lines: { show: true } }
  },
  tooltip: {
    theme: isDark.value ? 'dark' : 'light',
    style: { fontSize: '12px' },
    x: { show: false },
    marker: { show: false }
  },
  legend: {
    show: true,
    labels: { 
        colors: isDark.value ? '#d1d5db' : '#0f172a' // gray-300 vs slate-900
    },
    itemMargin: { horizontal: 10, vertical: 0 }
  }
}));
</script>

<template>
  <GlassCard class="h-full">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-heading font-bold text-lg">Revenue Analytics</h3>
      <select class="bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-lg text-sm text-main px-3 py-1 focus:outline-none focus:border-neon-purple-DEFAULT">
        <option>This Week</option>
        <option>Last Week</option>
        <option>This Month</option>
      </select>
    </div>
    <div class="h-[300px] w-full">
      <VueApexCharts type="area" height="100%" :options="chartOptions" :series="series" />
    </div>
  </GlassCard>
</template>
