<template>
  <div class="min-h-screen bg-midnight-950 flex items-center justify-center relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-antigravity-gradient"></div>
    <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple-DEFAULT/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
    
    <!-- Content -->
    <div class="relative z-10 w-full max-w-md p-6">
      <slot />
    </div>
  </div>
</template>
