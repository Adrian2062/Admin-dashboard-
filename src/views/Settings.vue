<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '../stores/theme';
import GlassCard from '../components/ui/GlassCard.vue';
import { Moon, Sun, Bell, Shield, Globe, Smartphone } from 'lucide-vue-next';

const themeStore = useThemeStore();
const notifications = ref(true);
const marketing = ref(false);

const isDark = computed(() => themeStore.theme === 'dark');
</script>

<template>
  <div class="max-w-4xl mx-auto pb-10">
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-heading font-display">Settings</h1>
        <p class="text-main mt-1">Manage your application preferences and security.</p>
    </div>

    <div class="space-y-6">
        <!-- Appearance -->
        <GlassCard>
            <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl bg-primary/20 text-primary">
                    <component :is="isDark ? Moon : Sun" :size="24" />
                </div>
                <div>
                    <h3 class="text-lg font-bold text-heading">Appearance</h3>
                    <p class="text-sm text-main">Customize how the theme looks on your device.</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <button 
                  @click="themeStore.theme = 'dark'; themeStore.applyTheme()"
                  class="p-4 border rounded-xl flex flex-col items-center gap-3 transition-colors"
                  :class="isDark ? 'border-primary bg-primary/5' : 'border-glass hover:bg-white/5'"
                >
                    <div class="w-full h-20 bg-gray-900 rounded-lg border border-gray-700"></div>
                    <span class="text-sm font-medium text-heading">Dark Mode</span>
                </button>
                 <button 
                  @click="themeStore.theme = 'light'; themeStore.applyTheme()"
                   class="p-4 border rounded-xl flex flex-col items-center gap-3 transition-colors"
                   :class="!isDark ? 'border-primary bg-primary/5' : 'border-glass hover:bg-white/5'"
                 >
                    <div class="w-full h-20 bg-gray-100 rounded-lg border border-gray-300"></div>
                    <span class="text-sm font-medium text-heading">Light Mode</span>
                </button>
            </div>
        </GlassCard>

        <!-- Notifications -->
         <GlassCard>
            <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl bg-blue-500/20 text-blue-500">
                    <Bell :size="24" />
                </div>
                <div>
                    <h3 class="text-lg font-bold text-heading">Notifications</h3>
                    <p class="text-sm text-main">Manage what alerts you receive.</p>
                </div>
            </div>
            <div class="space-y-4">
                <div class="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div class="flex items-center gap-3">
                        <Globe :size="20" class="text-main" />
                        <div>
                             <p class="font-medium text-heading">Browser Push Notifications</p>
                             <p class="text-xs text-main">Get alerts on your desktop</p>
                        </div>
                    </div>
                    <!-- Toggle Switch -->
                    <button 
                        @click="notifications = !notifications"
                        class="w-12 h-6 rounded-full transition-colors relative flex items-center"
                        :class="notifications ? 'bg-primary' : 'bg-gray-700'"
                    >
                        <div 
                            class="w-4 h-4 rounded-full bg-white shadow-sm absolute transition-transform"
                            :class="notifications ? 'translate-x-7' : 'translate-x-1'"
                        ></div>
                    </button>
                </div>
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
.border-primary { border-color: var(--color-primary); }
</style>
