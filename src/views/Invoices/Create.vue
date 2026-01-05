<script setup>
import GlassCard from '../../components/ui/GlassCard.vue';
import { Save } from 'lucide-vue-next';
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-heading font-display">Create Invoice</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Form Section -->
        <GlassCard class="lg:col-span-2 p-6 space-y-6">
             <div class="grid grid-cols-2 gap-4">
                 <div class="space-y-1">
                    <label class="text-xs font-medium text-main ml-1">Client Name</label>
                    <input type="text" class="w-full bg-card border border-glass rounded-xl p-3 text-heading focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Acme Corp"/>
                 </div>
                 <div class="space-y-1">
                    <label class="text-xs font-medium text-main ml-1">Due Date</label>
                    <input type="date" class="w-full bg-card border border-glass rounded-xl p-3 text-heading focus:outline-none focus:border-primary transition-colors"/>
                 </div>
             </div>

             <div class="space-y-1">
                <label class="text-xs font-medium text-main ml-1">Items Description</label>
                <textarea class="w-full bg-card border border-glass rounded-xl p-3 text-heading focus:outline-none focus:border-primary transition-colors h-32" placeholder="Enter invoice details..."></textarea>
             </div>
             
             <div class="flex justify-end pt-4">
                 <button class="px-6 py-3 bg-primary text-white rounded-xl shadow-neon-glow hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <Save :size="18" /> Save Invoice
                 </button>
             </div>
        </GlassCard>

        <!-- Summary Section -->
        <GlassCard class="p-6 h-fit">
            <h3 class="font-bold text-heading mb-4">Invoice Summary</h3>
            <div class="space-y-3 text-sm">
                <div class="flex justify-between text-main">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                </div>
                <div class="flex justify-between text-main">
                    <span>Tax (10%)</span>
                    <span>$0.00</span>
                </div>
                 <div class="flex justify-between text-main">
                    <span>Discount</span>
                    <span>$0.00</span>
                </div>
                <div class="h-px bg-glass-border my-2"></div>
                <div class="flex justify-between font-bold text-heading text-lg">
                    <span>Total</span>
                    <span>$0.00</span>
                </div>
            </div>
        </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.bg-card { background-color: var(--bg-card); }
.bg-primary { background-color: var(--color-primary); }
.border-glass { border-color: var(--color-border); }
.bg-glass-border { background-color: var(--color-border); }
</style>
