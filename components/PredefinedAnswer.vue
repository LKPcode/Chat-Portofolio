<template>

        <div class="pl-8 pr-4 md:px-0 py-5 bg-gray-50">
          <div class="relative mx-auto max-w-2xl  px-4 sm:px-6 lg:px-8 min-h-full"> 
              <div class="absolute -ml-9 w-6 h-6 rounded-full bg-orange-500"></div>
              <span class="font-semibold">You</span>
              <div class="mt-1">
                {{ props.prompt }}
              </div>
          </div>
        </div>

        <div class="flex-grow w-full"
        style="flex-grow: 1000000;">
        <!-- style="flex-grow: 1000000;" // To push it to the top  -->
          <div class="ml-8 mr-4 relatve md:mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:px-8 ">
            <div class="absolute -ml-9 w-6 h-6 rounded-full bg-gray-300"></div>
              <span class="font-semibold">Portofolio AI</span>
              <!-- Your content -->
              <div class="mb-12">
              <!-- Markdown -->
                <RenderMarkdown :key="text" :markdownContent="text" />
            </div>
          </div>
        </div>


</template>

<script setup>

let props = defineProps(['prompt']);

const text = ref('')

onMounted( async () => {

    let response = await fetch(`/AI-Answer/README.md`)
    text.value = await response.text();
});


</script>