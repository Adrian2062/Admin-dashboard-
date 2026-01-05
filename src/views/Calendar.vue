<script setup>
import { ref, computed } from 'vue';
import GlassCard from '../components/ui/GlassCard.vue';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-vue-next';

// --- State ---
const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());
const isEventModalOpen = ref(false);

const newEvent = ref({
  title: '',
  date: '',
  color: 'bg-neon-purple-DEFAULT'
});

// Mock Initial Events
const events = ref([
    { id: 1, title: 'Project Launch', date: '2025-01-15', color: 'bg-emerald-500' },
    { id: 2, title: 'Team Meeting', date: '2025-01-20', color: 'bg-blue-500' },
    { id: 3, title: 'Code Review', date: '2025-01-22', color: 'bg-neon-purple-DEFAULT' },
]);

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// --- Computed ---

const monthName = computed(() => {
    return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long', year: 'numeric' });
});

const calendarGrid = computed(() => {
    const year = currentYear.value;
    const month = currentMonth.value;
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const grid = [];
    
    // Prev Month Days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        grid.push({
            day: daysInPrevMonth - i,
            isCurrentMonth: false,
            dateString: getDateString(year, month - 1, daysInPrevMonth - i)
        });
    }
    
    // Current Month Days
    for (let i = 1; i <= daysInMonth; i++) {
        grid.push({
            day: i,
            isCurrentMonth: true,
            dateString: getDateString(year, month, i)
        });
    }
    
    // Next Month Days (to fill 42 cells grid - 6 rows)
    const remainingCells = 42 - grid.length;
    for (let i = 1; i <= remainingCells; i++) {
        grid.push({
            day: i,
            isCurrentMonth: false,
            dateString: getDateString(year, month + 1, i)
        });
    }
    
    return grid;
});

// --- Methods ---

function getDateString(year, month, day) {
    const d = new Date(year, month, day);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
}

function prevMonth() {
    if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
    } else {
        currentMonth.value--;
    }
}

function nextMonth() {
    if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
    } else {
        currentMonth.value++;
    }
}

function getEventsForDate(dateString) {
    return events.value.filter(e => e.date === dateString);
}

function openAddEventModal(dateString = null) {
    const now = new Date();
    
    let defaultDate;
    if (dateString) {
        defaultDate = dateString;
    } else {
         const m = String(currentMonth.value + 1).padStart(2, '0');
         const d = String(now.getDate()).padStart(2, '0');
         defaultDate = `${currentYear.value}-${m}-${d}`;
    }
    
    newEvent.value = {
        title: '',
        date: defaultDate,
        color: 'bg-primary'
    };
    isEventModalOpen.value = true;
}

function closeAddEventModal() {
    isEventModalOpen.value = false;
}

function addEvent() {
    if (!newEvent.value.title || !newEvent.value.date) return;
    
    events.value.push({
        id: Date.now(),
        ...newEvent.value
    });
    
    closeAddEventModal();
}
</script>

<template>
  <div class="space-y-6 relative">
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 class="text-3xl font-bold text-heading font-display">Calendar</h1>
      <div class="flex items-center gap-2 text-sm text-main">
        Home <ChevronRight :size="14"/> Calendar
      </div>
    </div>

    <!-- Calendar Card -->
    <GlassCard class="p-6">
        <!-- Controls -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
             <div class="flex items-center gap-2">
                <button @click="prevMonth" class="p-2 border border-glass-border rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-heading"><ChevronLeft :size="20" /></button>
                <button @click="nextMonth" class="p-2 border border-glass-border rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-heading"><ChevronRight :size="20" /></button>
                <button @click="openAddEventModal()" class="px-4 py-2 bg-primary text-white rounded-lg shadow-neon-glow hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <Plus :size="18"/> Add Event
                </button>
            </div>
            
            <h2 class="text-xl font-bold text-heading uppercase tracking-wider">{{ monthName }}</h2>

             <div class="flex bg-black/5 dark:bg-card border border-glass-border rounded-lg p-1">
                <button class="px-3 py-1 rounded bg-white dark:bg-gray-700 shadow-sm text-xs font-semibold text-heading">Month</button>
                <button class="px-3 py-1 rounded hover:bg-white/10 text-xs font-medium text-main transition-colors">Week</button>
                <button class="px-3 py-1 rounded hover:bg-white/10 text-xs font-medium text-main transition-colors">Day</button>
            </div>
        </div>

        <!-- Grid -->
        <div class="border border-glass-border rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
            <!-- Days Header -->
            <div class="grid grid-cols-7 border-b border-glass-border bg-primary/5">
                <div v-for="day in daysOfWeek" :key="day" class="p-3 text-xs font-semibold text-main uppercase text-center border-r border-glass-border last:border-r-0">
                    {{ day }}
                </div>
            </div>
            <!-- Days Cells -->
             <div class="grid grid-cols-7 auto-rows-fr">
                <div v-for="(cell, index) in calendarGrid" :key="index" 
                    @click="openAddEventModal(cell.dateString)"
                    class="min-h-[120px] p-2 border-r border-b border-glass-border last:border-r-0 relative transition-colors cursor-pointer group"
                    :class="cell.isCurrentMonth ? 'text-heading hover:bg-black/10 dark:hover:bg-white/10' : 'text-main/40 bg-black/5 dark:bg-white/5'"
                >
                    <div class="flex justify-between items-start">
                         <span class="text-sm font-medium block mb-2">{{ cell.day }}</span>
                         <Plus :size="14" class="opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                    </div>
                    
                    <!-- Events -->
                    <div class="space-y-1">
                        <div 
                            v-for="event in getEventsForDate(cell.dateString)" 
                            :key="event.id"
                            class="px-2 py-1 rounded text-xs text-white font-medium shadow-sm border-l-2 border-white/50 truncate hover:brightness-110" 
                            @click.stop
                            :class="event.color"
                        >
                            {{ event.title }}
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </GlassCard>

    <!-- Add Event Modal -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="isEventModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeAddEventModal"></div>
            <GlassCard class="relative w-full max-w-md p-6 z-10">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold text-heading">Add New Event</h3>
                    <button @click="closeAddEventModal" class="text-main hover:text-heading"><X :size="20" /></button>
                </div>
                
                <div class="space-y-4">
                    <div class="space-y-1">
                        <label class="text-sm text-main">Event Title</label>
                        <input v-model="newEvent.title" type="text" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" placeholder="Meeting..." />
                    </div>
                    
                    <div class="space-y-1">
                        <label class="text-sm text-main">Date</label>
                        <input v-model="newEvent.date" type="date" class="w-full bg-black/5 dark:bg-midnight-950/50 border border-glass-border rounded-xl px-4 py-2.5 text-heading placeholder-main focus:outline-none focus:border-neon-purple-DEFAULT transition-colors" />
                    </div>

                    <div class="space-y-1">
                         <label class="text-sm text-main">Color Tag</label>
                         <div class="flex gap-3">
                             <button @click="newEvent.color = 'bg-primary'" class="w-8 h-8 rounded-full bg-primary ring-2 ring-offset-2 ring-offset-transparent transition-all" :class="newEvent.color === 'bg-primary' ? 'ring-primary' : 'ring-transparent'"></button>
                             <button @click="newEvent.color = 'bg-blue-500'" class="w-8 h-8 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-offset-transparent transition-all" :class="newEvent.color === 'bg-blue-500' ? 'ring-blue-500' : 'ring-transparent'"></button>
                             <button @click="newEvent.color = 'bg-emerald-500'" class="w-8 h-8 rounded-full bg-emerald-500 ring-2 ring-offset-2 ring-offset-transparent transition-all" :class="newEvent.color === 'bg-emerald-500' ? 'ring-emerald-500' : 'ring-transparent'"></button>
                             <button @click="newEvent.color = 'bg-amber-500'" class="w-8 h-8 rounded-full bg-amber-500 ring-2 ring-offset-2 ring-offset-transparent transition-all" :class="newEvent.color === 'bg-amber-500' ? 'ring-amber-500' : 'ring-transparent'"></button>
                             <button @click="newEvent.color = 'bg-red-500'" class="w-8 h-8 rounded-full bg-red-500 ring-2 ring-offset-2 ring-offset-transparent transition-all" :class="newEvent.color === 'bg-red-500' ? 'ring-red-500' : 'ring-transparent'"></button>
                         </div>
                    </div>

                    <div class="pt-4 flex gap-3">
                        <button @click="closeAddEventModal" class="flex-1 py-2.5 rounded-xl border border-glass-border text-main hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium">Cancel</button>
                        <button @click="addEvent" class="flex-1 py-2.5 rounded-xl bg-primary text-white shadow-neon-glow hover:bg-primary/90 transition-colors font-medium">Save Event</button>
                    </div>
                </div>
            </GlassCard>
        </div>
    </transition>
  </div>
</template>

<style scoped>
.text-heading { color: var(--color-text-heading); }
.text-main { color: var(--color-text-main); }
.border-glass-border { border-color: var(--color-border); }
</style>
