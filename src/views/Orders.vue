<script setup>
import GlassCard from '../components/ui/GlassCard.vue';
import OrdersTable from '../components/dashboard/OrdersTable.vue';
</script>

<template>
    <div class="space-y-6">
        <h1 class="text-3xl font-bold text-heading font-display">Orders</h1>
        <!-- Reusing the dashboard orders table component -->
        <OrdersTable />
    </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
</style>
