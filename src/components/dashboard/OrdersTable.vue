<script setup>
import { ref, computed } from 'vue';
import GlassCard from '../ui/GlassCard.vue';
import { Eye, Edit, Trash2, Search, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const orders = ref([
  { id: '#ORD-001', customer: 'Alex Thompson', amount: '$120.50', status: 'Completed', date: 'Oct 24, 2024' },
  { id: '#ORD-002', customer: 'Sarah Miller', amount: '$450.00', status: 'Pending', date: 'Oct 24, 2024' },
  { id: '#ORD-003', customer: 'Michael Chen', amount: '$78.20', status: 'Processing', date: 'Oct 23, 2024' },
  { id: '#ORD-004', customer: 'Emma Wilson', amount: '$1,200.00', status: 'Completed', date: 'Oct 23, 2024' },
  { id: '#ORD-005', customer: 'James Brown', amount: '$32.00', status: 'Cancelled', date: 'Oct 22, 2024' },
]);

const statusColors = {
  Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Pending: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Processing: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
};
</script>

<template>
  <GlassCard>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <h3 class="text-heading font-bold text-lg">Recent Orders</h3>
      <div class="relative w-full md:w-64">
        <Search :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-main" />
        <input 
          type="text" 
          placeholder="Search orders..." 
          class="bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl py-2 pl-9 pr-4 text-sm text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT/50 transition-all w-full"
        />
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-left border-b border-glass-border">
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider">Order ID</th>
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider">Customer</th>
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider">Amount</th>
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider">Status</th>
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider">Date</th>
            <th class="pb-3 text-xs font-medium text-main uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-glass-border">
          <tr v-for="order in orders" :key="order.id" class="group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <td class="py-4 text-sm font-medium text-heading">{{ order.id }}</td>
            <td class="py-4 text-sm text-main">{{ order.customer }}</td>
            <td class="py-4 text-sm font-bold text-heading">{{ order.amount }}</td>
            <td class="py-4">
              <span 
                class="px-2.5 py-1 text-xs font-medium rounded-lg border"
                :class="statusColors[order.status]"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="py-4 text-sm text-main">{{ order.date }}</td>
            <td class="py-4 text-right">
              <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="p-1.5 text-main hover:text-heading hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors">
                  <Eye :size="16" />
                </button>
                <button class="p-1.5 text-main hover:text-neon-blue-DEFAULT hover:bg-neon-blue-DEFAULT/10 rounded-lg transition-colors">
                  <Edit :size="16" />
                </button>
                <button class="p-1.5 text-main hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                  <Trash2 :size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between mt-6 pt-4 border-t border-glass-border">
      <span class="text-sm text-main">Showing 1-5 of 20</span>
      <div class="flex items-center gap-2">
        <button class="p-2 text-main hover:text-heading hover:bg-black/5 dark:hover:bg-white/10 rounded-lg disabled:opacity-50">
          <ChevronLeft :size="18" />
        </button>
        <button class="p-2 text-main hover:text-heading hover:bg-black/5 dark:hover:bg-white/10 rounded-lg">
          <ChevronRight :size="18" />
        </button>
      </div>
    </div>
  </GlassCard>
</template>
