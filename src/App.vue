<template>
  <div class="flex h-screen bg-gray-50 text-gray-900">
    <!-- Sidebar -->
    <div
      :class="`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-white transition-all duration-300 border-r border-gray-200 shadow-sm relative`"
    >
      <div class="p-4 flex items-center justify-between">
        <h1 v-if="sidebarOpen" class="text-xl font-bold text-blue-600">
          Admin
        </h1>
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="p-2 hover:bg-gray-100 rounded"
        >
          <svg
            v-if="sidebarOpen"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <nav class="mt-8 space-y-2 px-2">
        <div v-for="item in menuItems" :key="item.id">
          <button
            @click="activeTab = item.id"
            :class="`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              activeTab === item.id
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`"
          >
            <component :is="item.icon" class="w-5 h-5"></component>
            <span v-if="sidebarOpen" class="font-medium">{{ item.label }}</span>
          </button>
          <!-- Nested Menu Example -->
          <div
            v-if="item.subMenu && activeTab === item.id"
            class="ml-8 mt-2 space-y-1"
          >
            <button
              v-for="sub in item.subMenu"
              :key="sub.id"
              class="w-full text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm flex items-center gap-2"
              @click="activeSubTab = sub.id"
            >
              <span>{{ sub.label }}</span>
            </button>
          </div>
        </div>
      </nav>

      <div class="absolute bottom-4 left-2 right-2">
        <button
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          <span v-if="sidebarOpen" class="font-medium">Logout</span>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-auto">
      <!-- Header -->
      <div
        class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm"
      >
        <h2 class="text-2xl font-bold text-gray-900">
          {{ menuItems.find((item) => item.id === activeTab)?.label }}
        </h2>
        <div class="flex items-center gap-4">
          <button class="p-2 hover:bg-gray-100 rounded-lg relative">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span
              class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
            ></span>
          </button>
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            A
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-8">
        <!-- Dashboard Tab -->
        <div v-if="activeTab === 'home'" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(stat, idx) in stats"
              :key="idx"
              class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition shadow-sm"
            >
              <div
                :class="`w-12 h-12 ${stat.color} rounded-lg mb-4 flex items-center justify-center`"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <p class="text-gray-600 text-sm font-medium">{{ stat.label }}</p>
              <p class="text-3xl font-bold mt-2 text-gray-900">
                {{ stat.value }}
              </p>
              <p
                :class="`text-sm mt-2 font-medium ${
                  stat.change.startsWith('+')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`"
              >
                {{ stat.change }} from last month
              </p>
              <!-- Optional progress bar -->
              <div class="w-full bg-gray-100 h-2 rounded-full mt-2">
                <div
                  :style="{ width: stat.progress + '%' }"
                  class="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                ></div>
              </div>
            </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Revenue Overview
              </h3>
              <div
                class="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-500"
              >
                Chart placeholder (line chart)
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Sales by Category
              </h3>
              <div
                class="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-500"
              >
                Chart placeholder (pie chart)
              </div>
            </div>
          </div>

          <!-- Recent Users Table -->
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div
              class="p-6 border-b border-gray-200 flex justify-between items-center"
            >
              <h3 class="text-lg font-bold text-gray-900">Recent Users</h3>
              <input
                type="text"
                placeholder="Search..."
                v-model="userSearch"
                class="px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead
                  class="bg-gray-50 text-left text-sm font-semibold border-b border-gray-200"
                >
                  <tr>
                    <th class="px-6 py-3 text-gray-900">Name</th>
                    <th class="px-6 py-3 text-gray-900">Email</th>
                    <th class="px-6 py-3 text-gray-900">Role</th>
                    <th class="px-6 py-3 text-gray-900">Status</th>
                    <th class="px-6 py-3 text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="user in filteredUsers"
                    :key="user.id"
                    class="hover:bg-gray-50 transition"
                  >
                    <td class="px-6 py-4 font-medium text-gray-900">
                      {{ user.name }}
                    </td>
                    <td class="px-6 py-4 text-gray-600">{{ user.email }}</td>
                    <td class="px-6 py-4 text-gray-600">{{ user.role }}</td>
                    <td class="px-6 py-4">
                      <span
                        :class="`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`"
                      >
                        {{ user.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 flex gap-2">
                      <button
                        class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        class="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Users Tab -->
        <div v-else-if="activeTab === 'users'" class="space-y-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              User Management
            </h3>
            <p class="text-gray-600">Add, edit, and manage users.</p>
          </div>
        </div>

        <!-- Analytics Tab -->
        <div v-else-if="activeTab === 'analytics'" class="space-y-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
            <p class="text-gray-600">
              Graphs, KPIs, and trends would appear here.
            </p>
          </div>
        </div>

        <!-- Settings Tab -->
        <div v-else-if="activeTab === 'settings'" class="space-y-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Settings</h3>
            <p class="text-gray-600">
              Theme, notifications, profile settings, etc.
            </p>
          </div>
        </div>
        <!-- Calendar Tab -->
        <div v-else-if="activeTab === 'calendar'">
          <section
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <!-- Header -->
            <div
              class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6"
            >
              <div class="flex items-center gap-2">
                <button
                  @click="prevMonth"
                  class="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  ‹
                </button>
                <button
                  @click="nextMonth"
                  class="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  ›
                </button>
                <h2 class="ml-3 text-lg font-semibold text-gray-800">
                  {{ monthYearLabel }}
                </h2>
              </div>

              <button
                @click="openAddEvent"
                class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
              >
                Add Event +
              </button>
            </div>

            <!-- Calendar Grid -->
            <div
              class="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden"
            >
              <!-- Weekdays -->
              <div
                v-for="day in weekDays"
                :key="day"
                class="bg-gray-50 py-3 text-center text-sm font-medium text-gray-500"
              >
                {{ day }}
              </div>

              <!-- Dates -->
              <div
                v-for="day in calendarDays"
                :key="day.key"
                class="relative bg-white h-28 p-2 hover:bg-gray-50 transition"
                :class="{
                  'text-gray-400': !day.currentMonth,
                  'ring-2 ring-indigo-500': day.today,
                }"
                @click="selectDate(day.date)"
              >
                <div class="text-sm font-medium">
                  {{ day.date.getDate() }}
                </div>

                <!-- Events -->
                <div class="mt-1 space-y-1">
                  <span
                    v-for="event in day.events"
                    :key="event.id"
                    class="block text-xs truncate px-2 py-0.5 rounded bg-indigo-100 text-indigo-700"
                  >
                    {{ event.title }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Add Event Modal -->
          <div
            v-if="showAddEvent"
            class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <div class="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
              <h3 class="text-lg font-semibold mb-4">Add Event</h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    v-model="newEvent.title"
                    type="text"
                    class="w-full border rounded-lg px-3 py-2 text-sm"
                    placeholder="Event title"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    v-model="newEvent.date"
                    type="date"
                    class="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div class="flex justify-end gap-2 mt-6">
                <button
                  @click="closeAddEvent"
                  class="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  @click="addEvent"
                  class="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Sidebar
const sidebarOpen = ref(true);
const activeTab = ref("home");
const activeSubTab = ref(null);

// Menu
const menuItems = [
  { id: "home", label: "Dashboard", icon: "HomeIcon" },
  {
    id: "users",
    label: "Users",
    icon: "UsersIcon",
    subMenu: [
      { id: "user-list", label: "User List" },
      { id: "roles", label: "Roles" },
    ],
  },
  { id: "analytics", label: "Analytics", icon: "AnalyticsIcon" },
  { id: "settings", label: "Settings", icon: "SettingsIcon" },
  { id: "calendar", label: "Calendar", icon: "CalendarIcon" },
];

// Stats
const stats = [
  {
    label: "Total Users",
    value: "12,345",
    change: "+12%",
    color: "bg-blue-500",
    progress: 80,
  },
  {
    label: "Revenue",
    value: "$45,231",
    change: "+8%",
    color: "bg-green-500",
    progress: 65,
  },
  {
    label: "Orders",
    value: "2,543",
    change: "-3%",
    color: "bg-purple-500",
    progress: 45,
  },
  {
    label: "Conversion",
    value: "3.24%",
    change: "+2%",
    color: "bg-orange-500",
    progress: 70,
  },
];

// Users
const recentUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james@example.com",
    role: "Editor",
    status: "Active",
  },
];

// User Search
const userSearch = ref("");
const filteredUsers = computed(() => {
  if (!userSearch.value) return recentUsers;
  return recentUsers.filter((u) =>
    u.name.toLowerCase().includes(userSearch.value.toLowerCase())
  );
});
// =====================
// Calendar Logic
// =====================
const currentDate = ref(new Date());
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = ref([]);
const showAddEvent = ref(false);
const newEvent = ref({ title: "", date: "" });

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function openAddEvent() {
  newEvent.value = {
    title: "",
    date: formatDate(new Date()),
  };
  showAddEvent.value = true;
}

function closeAddEvent() {
  showAddEvent.value = false;
}

function addEvent() {
  if (!newEvent.value.title || !newEvent.value.date) return;

  events.value.push({
    id: Date.now(),
    title: newEvent.value.title,
    date: newEvent.value.date,
  });

  showAddEvent.value = false;
}

function selectDate(date) {
  newEvent.value.date = formatDate(date);
}

const monthYearLabel = computed(() =>
  currentDate.value.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
);

const calendarDays = computed(() => {
  const days = [];
  const first = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    1
  );
  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());

  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = formatDate(d);

    days.push({
      key: d.toISOString(),
      date: d,
      today: d.toDateString() === new Date().toDateString(),
      currentMonth: d.getMonth() === currentDate.value.getMonth(),
      events: events.value.filter((e) => e.date === key),
    });
  }

  return days;
});

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
}
</script>
