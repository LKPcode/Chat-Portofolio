<template>
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-slate-900 bg-gray-50 dark:bg-slate-800 px-6 pb-4">
      <div class="flex h-16 shrink-0 items-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" 
      stroke="#ea580b" stroke-width="2"/>
      <path d="M9 8L15 8" stroke="#ea580b" stroke-width="2" stroke-linecap="round"/>
      </svg>

        <div class="pl-4 text-xl font-semibold text-orange-600">Chat Portofolio</div>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
 
              <li v-for="project in profile" >
                <NuxtLink :to="`/${project.id}`" 
                :class="{'text-orange-600 bg-gray-100 dark:bg-slate-700': selectedProject === project.id, 'text-gray-700 dark:text-slate-200 hover:text-orange-600 hover:bg-gray-100': selectedProject !== project.id}"
                class="text-gray-700 hover:text-orange-600 hover:bg-gray-100 hover:dark:bg-slate-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                  <span 
                  :class="{'text-orange-600 border-orange-600': selectedProject === project.id}"
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white dark:bg-slate-800 text-gray-400 border-gray-200 group-hover:border-orange-600 group-hover:text-orange-600">
                    {{ project.name.charAt(0) }}
                  </span>
                  <span class="truncate"> {{ project.name }} </span>
                </NuxtLink>
              </li>
             
            
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">My Projects</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">

              <li v-for="project in projects" >
                <NuxtLink :to="`/${project.id}`" 
                :class="{'text-orange-600 bg-gray-100 dark:bg-slate-700': selectedProject === project.id, 'text-gray-700 dark:text-slate-200 hover:text-orange-600 hover:bg-gray-100': selectedProject !== project.id}"
                class="text-gray-700 hover:text-orange-600 hover:bg-gray-100 hover:dark:bg-slate-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                  <span 
                  :class="{'text-orange-600 border-orange-600': selectedProject === project.id}"
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white dark:bg-slate-800 text-gray-400 dark:text-white border-gray-200 group-hover:border-orange-600 group-hover:text-orange-600">
                    {{ project.name.charAt(0) }}
                  </span>
                  <span class="truncate"> {{ project.name }} </span>
                </NuxtLink>
              </li>
              
            </ul>
          </li>

          <!-- <li class="mt-auto">
            <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-orange-600">
              <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </li> -->

      


        </ul>


                <button
                  class="text-gray-700 dark:text-white  hover:text-orange-600 hover:dark:text-white hover:bg-gray-100 hover:dark:bg-slate-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="truncate  "> Settings </span>
                </button>

      </nav>
    </div>
</template>


<script setup>

let route = useRoute();
let selectedProject = ref(route.params.project);

watch( () => route.params, (params) => {
    console.log('params', params);
    selectedProject.value = params.project;
});

let profile = ref([
    {
        name: 'Hi I\'m Loukas',
        id: "Hi-I-am-Loukas"
    }

])

let projects = ref([
    {
        name: 'CITELY.AI',
        description: 'Describe the project called CITELY.AI',
        id: 'CITELY.AI'
    },
    {
        name: 'E2EE Discord',
        description: 'Describe the project called Project 2',
        id: 'E2EE-Discord'
    },
    {
        name: 'Reddit Redesign',
        description: 'Describe the project called Project 3',
        id: 'Reddit-Redesign'
    },
    {
        name: 'ChatGPT color organizer',
        description: 'Describe the project called Project 4',
        id: 'chatgpt-color-organiser'
    },
    {
        name: 'Proof Of Existence',
        description: 'Describe the project called Project 5',
        id: 'Proof-Of-Existence'
    },
    {
        name: 'On The Spot',
        description: 'Describe the project called Project 6',
        id: 'On-The-Spot'
    },
    {
        name: 'DeLottery',
        description: 'Describe the project called Project 7',
        id: 'DeLottery'
    },
    {
        name: 'Chat Portofolio',
        description: 'Describe the project called Project 7',
        id: 'Chat-Portofolio'
    },
    
])


</script>