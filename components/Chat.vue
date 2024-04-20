
<template>
     <main id="main-chat" class="relative h-[calc(100vh-65px)] overflow-auto flex flex-col-reverse transition-width">

      <div class="flex-grow flex flex-col transition-width duration-200">


      <div v-if="route.params.project=='Hi-I-am-Loukas'" class="pl-8 pr-4 md:px-0 py-5 bg-gray-50">
        <div class="relative mx-auto max-w-2xl  px-4 sm:px-6 lg:px-8 min-h-full"> 
            <div class="absolute -ml-9 w-6 h-6 rounded-full bg-orange-500"></div>
            <span class="font-semibold">You</span>
            <div class="mt-1">
              Who is Loukas?
            </div>
        </div>
        </div>
        <div v-else class="pl-8 pr-4 md:px-0 py-5 bg-gray-50">
        <div class="relative mx-auto max-w-2xl  px-4 sm:px-6 lg:px-8 min-h-full"> 
            <div class="absolute -ml-9 w-6 h-6 rounded-full bg-orange-500"></div>
            <span class="font-semibold">You</span>
            <div class="mt-1">Describe the project called {{ route.params.project }}</div>
        </div>
        </div>

<div class="flex-grow w-full">
        <div class="ml-8 mr-4 relatve md:mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:px-8  ">
          <div class="absolute -ml-9 w-6 h-6 rounded-full bg-gray-300"></div>
            <span class="font-semibold">Portofolio AI</span>
            <!-- Your content -->
            <div class="mb-12">
            <!-- Markdown -->
              <RenderMarkdown :key="text" :markdownContent="text" />
          </div>
        </div>
</div>

       
        <PredefinedAnswer v-for="prompt_ in promptHistory" :prompt="prompt_" />

        <div class="sticky  bottom-0 p-5 pt-2 bg-white">
        <div class="max-w-2xl mx-auto">
            <input placeholder="Ask a question..."
                  @keyup.enter="addQuestion"
                  v-model="prompt"  
                  class="block font-light w-full mx-auto p-3 px-4 rounded-xl ring-1 ring-orange-500 bg-gray-50 ring-inset outline-none" type="text" >
        </div>
        </div>

      </div>

    </main>


</template>


<script setup>

let route = useRoute();
let prompt = ref('');
let promptHistory = ref([]);

const text = ref('')

onMounted( async () => {
    const project = route.params.project;
    text.value = await getProject(project);
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
    main.scrollTo(0,0)
}


let getProject = async (project) => {
    // wait 1 seccond
    await new Promise(r => setTimeout(r, 1000));
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