<script setup>
import GlassCard from '../components/ui/GlassCard.vue';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-vue-next';

</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <!-- Header / Banner -->
    <div class="relative h-48 rounded-2xl overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-neon-purple-DEFAULT to-blue-600 opacity-80"></div>
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover mix-blend-overlay" alt="Cover" />
        <button class="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
            <Camera :size="20" />
        </button>
    </div>

    <!-- Profile Info -->
    <div class="-mt-20 px-6 relative z-10 flex flex-col md:flex-row items-end md:items-center gap-6">
        <div class="relative group">
            <div class="w-32 h-32 rounded-2xl p-1 bg-card border-4 border-card shadow-glass-md transition-colors">
                <div class="w-full h-full rounded-xl bg-gradient-to-tr from-neon-purple-DEFAULT to-blue-500 flex items-center justify-center text-4xl font-bold text-white uppercase">
                    AP
                </div>
            </div>
            <button class="absolute bottom-2 right-2 p-1.5 bg-neon-purple-DEFAULT rounded-lg text-white shadow-lg hover:bg-neon-purple-DEFAULT/90 transition-colors">
                <Camera :size="16" />
            </button>
        </div>
        <div class="flex-1 mb-2">
            <h1 class="text-3xl font-bold text-heading font-display">Adrian Poudyal</h1>
            <p class="text-main">Senior Administrator</p>
        </div>
        <div class="flex gap-3 mb-2">
             <button class="px-4 py-2 bg-black/5 dark:bg-white/10 border border-glass-border rounded-xl text-sm font-medium text-heading hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                Cancel
            </button>
            <button class="px-4 py-2 bg-neon-purple-DEFAULT text-white rounded-xl text-sm font-medium hover:bg-neon-purple-DEFAULT/90 transition-colors shadow-neon-glow">
                Save Changes
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Sidebar Info -->
        <GlassCard class="space-y-6 h-fit">
            <div class="flex items-center gap-3 text-main">
                <User :size="18" class="text-gray-500" />
                <span class="text-sm">Administrator</span>
            </div>
             <div class="flex items-center gap-3 text-main">
                <Mail :size="18" class="text-gray-500" />
                <span class="text-sm">adrian@antigravity.dev</span>
            </div>
             <div class="flex items-center gap-3 text-main">
                <Phone :size="18" class="text-gray-500" />
                <span class="text-sm">+1 (555) 000-0000</span>
            </div>
             <div class="flex items-center gap-3 text-main">
                <MapPin :size="18" class="text-gray-500" />
                <span class="text-sm">San Francisco, CA</span>
            </div>
        </GlassCard>

        <!-- Edit Form -->
        <GlassCard class="md:col-span-2">
            <h3 class="text-lg font-bold text-heading mb-6">Profile Settings</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="text-sm text-main">First Name</label>
                    <input type="text" value="Adrian" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" />
                </div>
                 <div class="space-y-2">
                    <label class="text-sm text-main">Last Name</label>
                    <input type="text" value="Poudyal" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" />
                </div>
                 <div class="space-y-2">
                    <label class="text-sm text-main">Email Address</label>
                    <input type="email" value="adrian@antigravity.dev" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" />
                </div>
                 <div class="space-y-2">
                    <label class="text-sm text-main">Phone Number</label>
                    <input type="tel" value="+1 (555) 000-0000" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" />
                </div>
                <div class="col-span-1 md:col-span-2 space-y-2">
                    <label class="text-sm text-main">Bio</label>
                    <textarea rows="4" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors resize-none">Senior Administrator enjoying building futuristic interfaces.</textarea>
                </div>
            </div>
        </GlassCard>
    </div>
  </div>
</template>
