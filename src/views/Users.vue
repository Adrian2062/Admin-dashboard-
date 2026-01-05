<script setup>
import GlassCard from '../components/ui/GlassCard.vue';
import { Search, MoreVertical, UserPlus } from 'lucide-vue-next';

// Dummy users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'Editor', status: 'Offline' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Active' },
];
</script>

<template>
  <div class="space-y-6">
     <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 class="text-3xl font-bold text-heading font-display">Users</h1>
      <div class="flex gap-3">
         <div class="relative">
            <Search :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search users..." class="bg-card border border-glass rounded-xl py-2 pl-10 pr-4 text-main focus:outline-none focus:border-primary transition-colors" />
         </div>
         <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-neon-glow hover:bg-primary/90 transition-colors">
            <UserPlus :size="18" />
            Add User
         </button>
      </div>
    </div>

    <GlassCard class="overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-primary/5 text-main text-xs uppercase font-semibold">
          <tr>
            <th class="px-6 py-4">Name</th>
            <th class="px-6 py-4">Role</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-glass">
            <tr v-for="user in users" :key="user.id" class="hover:bg-primary/5 transition-colors">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500"></div>
                        <div>
                             <p class="font-medium text-heading">{{ user.name }}</p>
                             <p class="text-xs text-main">{{ user.email }}</p>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 text-main">{{ user.role }}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 text-xs rounded-lg" :class="user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-500/10 text-gray-500'">
                        {{ user.status }}
                    </span>
                </td>
                <td class="px-6 py-4 text-right">
                    <button class="p-2 hover:bg-white/10 rounded-lg text-main transition-colors">
                        <MoreVertical :size="18" />
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
.text-primary { color: var(--color-primary); }
.border-glass { border-color: var(--color-border); }
.divide-glass { border-color: var(--color-border); }
</style>
