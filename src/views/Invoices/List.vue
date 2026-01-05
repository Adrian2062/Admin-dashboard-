<script setup>
import GlassCard from '../../components/ui/GlassCard.vue';
import { FileText, Download, MoreVertical, Search } from 'lucide-vue-next';

const invoices = [
    { id: 'INV-001', client: 'Acme Corp', amount: '$1,200.00', date: 'Oct 24, 2024', status: 'Paid' },
    { id: 'INV-002', client: 'Global Tech', amount: '$3,450.00', date: 'Oct 22, 2024', status: 'Pending' },
    { id: 'INV-003', client: 'Stark Ind', amount: '$10,000.00', date: 'Oct 20, 2024', status: 'Paid' },
];
</script>

<template>
  <div class="space-y-6">
     <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 class="text-3xl font-bold text-heading font-display">Invoices List</h1>
         <div class="relative">
            <Search :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search invoices..." class="bg-card border border-glass rounded-xl py-2 pl-10 pr-4 text-main focus:outline-none focus:border-primary transition-colors" />
         </div>
    </div>

    <GlassCard class="overflow-hidden">
         <table class="w-full text-left">
            <thead class="bg-primary/5 text-main text-xs uppercase font-semibold">
            <tr>
                <th class="px-6 py-4">Invoice ID</th>
                <th class="px-6 py-4">Client</th>
                <th class="px-6 py-4">Amount</th>
                <th class="px-6 py-4">Date</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4 text-right">Actions</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-glass">
                <tr v-for="inv in invoices" :key="inv.id" class="hover:bg-primary/5 transition-colors">
                     <td class="px-6 py-4 font-medium text-heading">{{ inv.id }}</td>
                     <td class="px-6 py-4 text-main">{{ inv.client }}</td>
                     <td class="px-6 py-4 font-semibold text-heading">{{ inv.amount }}</td>
                     <td class="px-6 py-4 text-main">{{ inv.date }}</td>
                      <td class="px-6 py-4">
                        <span class="px-2 py-1 text-xs rounded-lg" :class="inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'">
                            {{ inv.status }}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right flex justify-end gap-2">
                         <button class="p-2 hover:bg-white/10 rounded-lg text-main transition-colors" title="Download">
                            <Download :size="16" />
                        </button>
                        <button class="p-2 hover:bg-white/10 rounded-lg text-main transition-colors">
                            <MoreVertical :size="16" />
                        </button>
                    </td>
                </tr>
            </tbody>
         </table>
    </GlassCard>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.bg-card { background-color: var(--bg-card); }
.bg-primary { background-color: var(--color-primary); }
.border-glass { border-color: var(--color-border); }
.divide-glass { border-color: var(--color-border); }
</style>
