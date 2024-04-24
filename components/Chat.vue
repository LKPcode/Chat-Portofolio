
<template>
      <!-- A display 'flex column-reverse' or 'block' gets added to the main element depending if streamChat is true or false -->
     <main id="main-chat" 
           class="scroll-bar relative h-[calc(100vh-65px)] flex overflow-auto transition-[height] duration-1000">

      <div id="main-chat-child" class="flex-grow flex flex-col transition-width duration-200">


      <div v-if="route.params.project=='Hi-I-am-Loukas'" class="pl-8 pr-4 md:px-0 py-5 bg-gray-50 dark:bg-slate-800 dark:text-white">
        <div class="relative mx-auto max-w-2xl  px-4 sm:px-6 lg:px-8 min-h-full"> 
            <div class="absolute -ml-9 w-6 h-6 rounded-full bg-orange-500"></div>
            <span class="font-semibold">You</span>
            <div class="mt-1">
              Who is Loukas?
            </div>
        </div>
        </div>
        <div v-else class="pl-8 pr-4 md:px-0 py-5 bg-gray-50  dark:bg-slate-800 dark:text-white">
        <div class="relative mx-auto max-w-2xl  px-4 sm:px-6 lg:px-8 min-h-full"> 
            <div class="absolute -ml-9 w-6 h-6 rounded-full bg-orange-500"></div>
            <span class="font-semibold">You</span>
            <div class="mt-1">Describe the project called {{ route.params.project }} </div>
        </div>
        </div>

<div class="flex-grow w-full dark:bg-slate-700">
        <div class="ml-8 mr-4 relatve md:mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:px-8  ">
          <div class="absolute -ml-9 w-6 h-6 rounded-full bg-gray-300 dark:bg-slate-300"></div>
            <div class="font-semibold dark:text-white flex justify-between items-center">
             <span>Portofolio AI</span> 
             <a v-if="info" :href="info.github_repo" target="_blank" >
              <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 98 96"  xmlns="http://www.w3.org/2000/svg">
                <path class="fill-black dark:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" 
                /></svg>
             </a>
            </div>
            <!-- Your content -->
            <div class="mb-12">
            <!-- Markdown -->
              <RenderMarkdown :key="text" :markdownContent="text" />
          </div>
        </div>
</div>

       
        <PredefinedAnswer v-for="prompt_ in promptHistory" :prompt="prompt_" />

        <div class="sticky  bottom-0 px-5 pt-2 bg-white dark:bg-slate-700">
          <div class="max-w-2xl mx-auto relative">
              <input placeholder="Ask a question..."
                    @keyup.enter="addQuestion"
                    v-model="prompt"  
                    class="block font-light w-full mx-auto p-3 px-4 rounded-xl ring-1 ring-orange-500 bg-gray-50 dark:bg-slate-800 dark:text-white ring-inset outline-none" type="text" >
            <div class="absolute -right-2 top-1/2 transform -translate-y-1/2">
              <button @click="addQuestion" class="absolute group right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl ">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> 
                  <path class="fill-gray-400 dark:fill-slate-700 group-hover:fill-orange-600" 
                  fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 10.4142L14.2929 11.7071C14.6834 12.0976 15.3166 12.0976 15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929L12.7941 7.37993C12.7791 7.36486 12.7637 7.35031 12.748 7.33627C12.5648 7.12998 12.2976 7 12 7C11.7024 7 11.4352 7.12998 11.252 7.33627C11.2363 7.3503 11.2209 7.36486 11.2059 7.37993L8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071L11 10.4142L11 16Z" 
                  fill=""></path> </g></svg>
              </button>
            </div>
          </div>
          <div class="text-xs py-1.5 text-gray-400  text-center">
            <span v-if="state.browserIsCompatible.value">This is a Fake LLM Chatbot, every output are predefined.</span>
            <span v-else>For a better experience use a Chromium based browser or Firefox.</span>
          </div>
        </div>

      </div>

    </main>


</template>


<script setup>

let route = useRoute();
let prompt = ref('');
let promptHistory = ref([]);
let state = useGlobalState();

const text = ref('')
const info = ref({})

onMounted( async () => {
   
    const project = route.params.project;
    text.value = await getProject(project);

    info.value = await getInfo(project);
    console.log('info', info.value);

});

watch( () => route.params, async (params) => {
    console.log('params', params);
    const project = params.project;
    text.value = await getProject(project);
});

let addQuestion = async () => {
    promptHistory.value.push(prompt.value);
    prompt.value = '';
    // scroll to bottom
    const main = document.getElementById('main-chat');
    if(state.streamChat.value === false) {
        await new Promise(r => setTimeout(r, 300));
        main.scrollTo({ top: 10000000, behavior: 'smooth' })
    }else {
        main.scrollTo(0,0)
    }
}


let getProject = async (project) => {
    // fetch /projects/test.md
    const response = await fetch(`/projects/${project}/README.md`);
    // get the text
    let content = await response.text();

    if (!response.ok) {
        console.error('Failed to fetch project:', response.status, response.statusText);
        content = `## Oh No!\nThere was a 404 Error.\nI could not find the project called **${project}** .\nI'm sorry 😢.`;
    }

    // update the paths in the markdown
    content = updateMarkdownPaths(content, project);
    console.log('text', content);

    // let main = document.getElementById('main-chat');
    // main.scrollTop = -1000000;

    return content;
}

let getInfo = async (project) => {
    // fetch /projects/test.md
    const response = await fetch(`/projects/${project}/info.json`);
    // get the text
    let info = await response.text();
    info = JSON.parse(info);

    if (!response.ok) {
        console.error('Failed to fetch project info, no info.json provided in the project folder:', response.status, response.statusText);
    }

  return info;
}


function updateMarkdownPaths(content, path) {
  // Regular expression to find all instances of links that do not start with 'http://' or 'https://'
  // and match either './' or direct file/folder names followed by any characters except whitespace,
  // up to a space, the end of the line, or a markdown link closing parenthesis ']'
  const regex = /(\]\(((?!http:\/\/|https:\/\/)(\.\/)?([^\s\):]+)))/g;

  // Replace './' or prepend path to the direct file/folder names
  return content.replace(regex, (match, p1, p2, p3, p4) => {
    if (p3) {
      // If './' is found, replace it with the new path
      return p1.replace(p3, `./projects/${path}/`);
    } else {
      // If './' is not found, prepend the path to the existing file/folder name
      return p1.replace(p4, `projects/${path}/${p4}`);
    }
  });
}



</script>