<template>


<div class="toggle-switch">
  <label class="switch-label">
    <input @click="toggleDarkMode" v-model="darkMode" :checked="darkMode" type="checkbox" class="checkbox">
    <span class="slider"></span>
  </label>
</div>  

</template>


<script setup>

let darkMode = ref(false);

onMounted(() => {

    // Check if the user has set a preference for dark mode
    // document.documentElement.getAttribute('class') === 'dark' ? darkMode.value = false : darkMode.value = true;
    // check local storage
    if (localStorage.getItem('darkMode') === 'true') {
        darkMode.value = true;
    } else {
        darkMode.value = false;
    }

    

    setTimeout(() => {
    document.documentElement.setAttribute('class', darkMode.value ? 'light' : 'dark');

        enforceTheme();
    }, 0);
});

// watch(() => darkMode, (value) => {
//     console.log('darkMode', value);
//     // Add or remove the dark class from the html element
//     // document.documentElement.setAttribute('class', 'light');
//     // toggleDarkMode();

// });

let enforceTheme = () => {
    if (!darkMode.value) {
        document.documentElement.setAttribute('class', 'dark');
        // replace the class .markdown-body-light everywhere to .markdown-body-dark
        document.querySelectorAll('.markdown-body-light').forEach(function(element) {
            element.classList.remove('markdown-body-light');
            element.classList.add('markdown-body-dark');
        });
    } else {
        document.documentElement.setAttribute('class', 'light');
        // replace the class .markdown-body-dark everywhere to .markdown-body-light
        document.querySelectorAll('.markdown-body-dark').forEach(function(element) {
            element.classList.remove('markdown-body-dark');
            element.classList.add('markdown-body-light');
        });
    }

}

let toggleDarkMode = () => {
    console.log('toggleDarkMode', darkMode.value);
    if (darkMode.value) {
        document.documentElement.setAttribute('class', 'dark');
        // replace the class .markdown-body-light everywhere to .markdown-body-dark
        document.querySelectorAll('.markdown-body-light').forEach(function(element) {
            element.classList.remove('markdown-body-light');
            element.classList.add('markdown-body-dark');
        });
        localStorage.setItem('darkMode', 'false');

    } else {
        document.documentElement.setAttribute('class', 'light');
        // replace the class .markdown-body-dark everywhere to .markdown-body-light
        document.querySelectorAll('.markdown-body-dark').forEach(function(element) {
            element.classList.remove('markdown-body-dark');
            element.classList.add('markdown-body-light');
        });
        localStorage.setItem('darkMode', 'true');
    }

}



</script>

<style scoped>

.toggle-switch {
  position: relative;
  width: 100px;
  height: 50px;
  --light: white;
  --dark: #1e293b;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
  scale: 0.5;
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: var(--dark);
  border-radius: 25px;
  cursor: pointer;
  border: 3px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: #f3f4f6;
}
/* 
.checkbox:checked ~ .switch-label {
  border: 3px solid #f3f4f6;
} */

.slider::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
  box-shadow: inset 12px -4px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  -webkit-transform: translateX(50px);
  -ms-transform: translateX(50px);
  transform: translateX(50px);
  background-color: #f97315;
  -webkit-box-shadow: none;
  box-shadow: none;
}


</style>