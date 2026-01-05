<script setup>
import GlassCard from '../components/ui/GlassCard.vue';
import { FileText, Download } from 'lucide-vue-next';

const invoices = [
    { id: 'INV-001', client: 'Acme Corp', amount: '$1,200.00', date: 'Oct 24, 2024', status: 'Paid' },
    { id: 'INV-002', client: 'Global Tech', amount: '$3,450.00', date: 'Oct 22, 2024', status: 'Pending' },
];
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-heading font-display">Invoices</h1>
        <button class="px-4 py-2 bg-primary text-white rounded-xl shadow-neon-glow hover:bg-primary/90 transition-colors">
            Create Invoice
        </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard v-for="invoice in invoices" :key="invoice.id" class="p-6 relative group">
            <div class="flex justify-between items-start mb-4">
                 <div class="p-3 bg-primary/10 text-primary rounded-xl">
                    <FileText :size="24" />
                </div>
                <span class="px-2 py-1 text-xs rounded-lg bg-emerald-500/10 text-emerald-500" v-if="invoice.status === 'Paid'">Paid</span>
                <span class="px-2 py-1 text-xs rounded-lg bg-amber-500/10 text-amber-500" v-else>Pending</span>
            </div>
            <h3 class="text-xl font-bold text-heading mb-1">{{ invoice.amount }}</h3>
            <p class="text-sm text-main mb-4">{{ invoice.client }} - {{ invoice.id }}</p>
            <div class="flex justify-between items-center pt-4 border-t border-glass">
                <span class="text-xs text-main">{{ invoice.date }}</span>
                 <button class="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                    <Download :size="16" />
                </button>
            </div>
        </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.bg-primary { background-color: var(--color-primary); }
.text-primary { color: var(--color-primary); }
.border-glass { border-color: var(--color-border); }
</style>
