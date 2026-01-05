<script setup>
import GlassCard from '../../components/ui/GlassCard.vue';
import RevenueChart from '../../components/dashboard/RevenueChart.vue';

// Using existing components to compose the reports page
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-heading font-display">Analytics Reports</h1>
    <GlassCard class="p-6">
        <h2 class="text-xl font-bold text-heading mb-4">Revenue Overview</h2>
        <!-- Reusing the Revenue Chart -->
        <RevenueChart />
    </GlassCard>
    <!-- Placeholder for more reports -->
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
</style>
