<template>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div 
  :class="showMobileSidebar ? '' : ''"
  class="relative z-50 lg:hidden transition-opacity ease-linear duration-300" 
  role="dialog" aria-modal="true">

    <div 
    :class="showMobileSidebar ? 'translate-x-0' : '-translate-x-full'"
      class="fixed inset-0 flex transition ease-in-out duration-300 transform">
      <div class="relative mr-16 flex w-full max-w-xs flex-1">

        <div @click="toggleMobileSidebar" class="absolute bg-white left-full top-0 flex w-16  justify-center py-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <SidebarContents />

      </div>
    </div>
  </div>


  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <SidebarContents />
  </div>


  <!-- Main Content -->
  <div class="lg:pl-72 h-screen">

    <!-- Top Bar -->
    <div class="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl ">
      <div class="flex h-16 items-center gap-x-4 border-b border-gray-200 dark:border-slate-900 bg-white dark:bg-slate-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
        
        <!-- Open Sidebar Button -->
        <button @click="toggleMobileSidebar" type="button" class="-m-2.5 p-2.5 text-gray-700 dark:text-slate-200 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex-1 flex items-center">
            <div class="flex-1">
              <h1 class="lg:ml-6 truncate text-lg font-semibold text-gray-700 dark:text-slate-200">
                {{ route.params.project.replace(/-/g, " ") }}
              </h1>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <ThemeSwitch />
        
      </div>
    </div>

    <!-- Chat -->
    <Chat />
   
  </div>
</div>



</template>


<script setup>

let showMobileSidebar = ref(false);
let route = useRoute();


let toggleMobileSidebar = () => {
  showMobileSidebar.value = !showMobileSidebar.value;
}



</script>
