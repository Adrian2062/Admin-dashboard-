<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import GlassCard from '../components/ui/GlassCard.vue';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-vue-next';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  isLoading.value = true;
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false;
    router.push('/');
  }, 1500);
};
</script>

<template>
  <GlassCard class="p-8">
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple-DEFAULT to-blue-600 shadow-neon-glow mb-4">
        <Activity class="text-white" :size="24" />
      </div>
      <h1 class="text-2xl font-bold text-heading font-display mb-2">Welcome Back</h1>
      <p class="text-main text-sm">Enter your credentials to access your dashboard.</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div class="space-y-1">
        <label class="text-xs font-medium text-main ml-1">Email Address</label>
        <div class="relative">
          <Mail :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            v-model="email"
            type="email" 
            placeholder="admin@antigravity.dev"
            class="w-full bg-gray-50 dark:bg-midnight-950 border border-gray-200 dark:border-glass-border rounded-xl py-2.5 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/50"
            required
          />
        </div>
      </div>

      <div class="space-y-1">
        <label class="text-xs font-medium text-main ml-1">Password</label>
        <div class="relative">
          <Lock :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            v-model="password"
            type="password" 
            placeholder="••••••••"
            class="w-full bg-gray-50 dark:bg-midnight-950 border border-gray-200 dark:border-glass-border rounded-xl py-2.5 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/50"
            required
          />
        </div>
      </div>

      <div class="flex items-center justify-between text-xs">
        <label class="flex items-center gap-2 text-main cursor-pointer hover:text-heading">
          <input type="checkbox" class="rounded border-glass-border bg-gray-50 dark:bg-midnight-950 text-primary focus:ring-0 focus:ring-offset-0" />
          Remember me
        </label>
        <a href="#" class="text-primary hover:text-heading transition-colors">Forgot password?</a>
      </div>

      <button 
        type="submit"
        class="w-full py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-neon-glow transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
        :disabled="isLoading"
      >
        <span v-if="!isLoading">Sign In</span>
        <ArrowRight v-if="!isLoading" :size="18" class="group-hover:translate-x-1 transition-transform" />
        <div v-else class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </button>
    </form>

    <div class="mt-6 text-center text-xs text-gray-500">
      Don't have an account? 
      <a href="#" class="text-neon-blue-DEFAULT hover:text-white transition-colors">Contact Support</a>
    </div>
  </GlassCard>
</template>
