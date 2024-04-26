<template>
    <div class="">
        <div class="mx-auto" ref="markdownContent">
            <!-- Markdown Content -->
        </div>
    </div>
</template>


<script setup>
import useGlobalState from '../composables/useGlobalState';


let props = defineProps(['markdownContent']);

let state = useGlobalState();

let markdownContent = ref();


const options = {
                    htmlTags: true, // Enables HTML tags in source
                    htmlSanitize: false, // Disables HTML tag sanitization
                };


onMounted( async () => {

    let script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathpix-markdown-it@1.0.40/es5/bundle.js";
    document.head.append(script);

    script.onload = function() {
      const isLoaded = window.loadMathJax();
      if (isLoaded) {
        console.log('Styles loaded!')
      }

      if (markdownContent) {
        renderLikeStream(props.markdownContent);
      }
    };

    setThemeClass();
});

let renderLikeStream = async (text) => {
    // split the text into words
    const words = text.split(' ');
    let stream = '';


    // wait 1 seccond
    if (state.streamChat.value === true) {
        await new Promise(r => setTimeout(r, 800));
    }

    // for every word add to the stream and render
    for (let i = 0; i < words.length; i++) {
        // if the streamChat is false render the whole text at once
        if(state.streamChat.value === false) {
            const html = window.render(text, options);
            markdownContent.value.innerHTML = html;
            break;
        }
        stream += words[i] + ' ';
        const html = window.render(stream, options);
        markdownContent.value.innerHTML = html;
        await new Promise(r => setTimeout(r, 50));

    }

}


let setThemeClass = () => {
    // Add or remove the dark class from the html element
    let theme = document.documentElement.getAttribute('class');
    if (theme === 'dark') {
        markdownContent.value.classList.add('markdown-body-dark');
    } else {
        markdownContent.value.classList.add('markdown-body-light');
    }
}


</script>