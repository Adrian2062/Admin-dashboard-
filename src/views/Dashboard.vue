<script setup>
import { DollarSign, ShoppingBag, Users, Activity } from 'lucide-vue-next';
import StatCard from '../components/dashboard/StatCard.vue';
import RevenueChart from '../components/dashboard/RevenueChart.vue';
import OrdersTable from '../components/dashboard/OrdersTable.vue';
import GlassCard from '../components/ui/GlassCard.vue';

const kpis = [
  {
    title: 'Total Revenue',
    value: '$54,230',
    trend: 12.5,
    trendLabel: 'vs last month',
    icon: DollarSign,
    iconColor: 'text-neon-purple-DEFAULT',
    iconBg: 'bg-neon-purple-DEFAULT/10'
  },
  {
    title: 'Total Orders',
    value: '1,245',
    trend: 8.2,
    trendLabel: 'vs last month',
    icon: ShoppingBag,
    iconColor: 'text-neon-blue-DEFAULT',
    iconBg: 'bg-neon-blue-DEFAULT/10'
  },
  {
    title: 'New Users',
    value: '3,892',
    trend: -2.4,
    trendLabel: 'vs last month',
    icon: Users,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10'
  },
  {
    title: 'Active Sessions',
    value: '890',
    trend: 5.7,
    trendLabel: 'current',
    icon: Activity,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10'
  }
];
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold text-heading font-display tracking-tight">Dashboard Overview</h1>
        <p class="text-main mt-1">Welcome back, get your latest updates here.</p>
      </div>
      <div class="flex gap-3">
        <button class="px-4 py-2 bg-black/5 dark:bg-midnight-900 border border-glass-border rounded-xl text-sm font-medium text-heading hover:bg-black/10 dark:hover:bg-white/5 transition-colors">
          Download Report
        </button>
        <button class="px-4 py-2 bg-neon-purple-DEFAULT text-white rounded-xl text-sm font-medium hover:bg-neon-purple-DEFAULT/90 transition-colors shadow-neon-glow">
          + New Project
        </button>
      </div>
    </div>

    <!-- KPIs -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        v-for="kpi in kpis" 
        :key="kpi.title"
        v-bind="kpi"
      />
    </div>

    <!-- Charts & Tables Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Chart (2/3 width) -->
      <div class="lg:col-span-2 h-[400px]">
        <RevenueChart />
      </div>

      <!-- Secondary Chart / Info (1/3 width) - Using a placeholder or another chart here -->
      <GlassCard class="h-full">
        <h3 class="text-heading font-bold text-lg mb-4">Traffic Source</h3>
        <div class="flex items-center justify-center h-[300px] text-gray-500 text-sm">
          <!-- Placeholder for Traffic Chart, circular chart potentially -->
           <div class="relative w-48 h-48 rounded-full border-8 border-black/5 dark:border-midnight-800 flex items-center justify-center">
             <div class="absolute inset-0 rounded-full border-8 border-neon-purple-DEFAULT border-t-transparent animate-spin-slow"></div>
             <span class="font-bold text-heading text-xl">82%</span>
           </div>
        </div>
        <div class="flex justify-center gap-6 mt-4">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-neon-purple-DEFAULT"></div>
                <span class="text-xs text-main">Direct</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-black/10 dark:bg-midnight-800"></div>
                <span class="text-xs text-main">Organic</span>
            </div>
        </div>
      </GlassCard>
    </div>

    <!-- Orders Table -->
    <OrdersTable />
  </div>
</template>
