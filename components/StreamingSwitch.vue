<template>
    
<div class="checkbox-wrapper-35 mt-6">
  <input @change="toggle" :checked='state.streamChat.value' name="switch" :id="`switch${rand_id}`" type="checkbox" class="switch" >
  <label :for="`switch${rand_id}`">
    <span class="switch-x-text">Streaming is </span>
    <span class="switch-x-toggletext">
      <span class="switch-x-unchecked"><span class="switch-x-hiddenlabel">Unchecked: </span>Off</span>
      <span class="switch-x-checked"><span class="switch-x-hiddenlabel">Checked: </span>On</span>
    </span>
  </label>
</div>



</template>

<script setup>

import { UAParser } from 'ua-parser-js';


let state = useGlobalState();

let rand_id = Math.random().toString(36).substring(7);

onMounted( async () => {
    await nextTick();
    console.log('mounted')

    // wait 200 ms for the DOM to be updated
    await new Promise(r => setTimeout(r, 200));
    // if localStorage is not set, set the default value, otherwise get the value 
    // based on browser compatibility from localStorage
    if(!localStorage.getItem('streamChat')) {
        console.log('streamChat not set in localStorage, setting default value')
        let isCompatible = isBrowserCompatible();
        state.browserIsCompatible.value = isCompatible;
        state.streamChat.value = isCompatible;
        localStorage.setItem('streamChat', state.streamChat.value);
        changeStreamMode();
    }else {
        state.streamChat.value = JSON.parse(localStorage.getItem('streamChat'));
        state.browserIsCompatible.value = isBrowserCompatible();
        changeStreamMode();
    }
});

const toggle = () => {
    state.streamChat.value = !state.streamChat.value;
    localStorage.setItem('streamChat', state.streamChat.value);
    changeStreamMode();
    
}

const changeStreamMode = () => {
    let main = document.getElementById('main-chat');
    let main_child = document.getElementById('main-chat-child');
    if(main && main_child){

        if(state.streamChat.value === false) {
            console.log('streaming mode off')
            main.style.display = 'block';
            main.style.flexDirection = '';
            main_child.style.height = '100%';
        }else {
            console.log('streaming mode on')
            main.style.display = 'flex';
            main.style.flexDirection = 'column-reverse';
            main_child.style.height = '';
            main_child.style.flexGrow = '1';
        }   
    }
}



const isBrowserCompatible = () => {

  const { browser, engine } = UAParser(window.navigator.userAgent);

  console.log(browser.name);
  console.log(engine.name);

  return !(engine.name == 'WebKit')

}

</script>


<style scoped>
.checkbox-wrapper-35 .switch {
  display: none;
}

.checkbox-wrapper-35 .switch + label {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #78768d;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-wrapper-35 .switch + label::before,
  .checkbox-wrapper-35 .switch + label::after {
  content: '';
  display: block;
}

.checkbox-wrapper-35 .switch + label::before {
  background-color: #05012c;
  border-radius: 500px;
  height: 15px;
  margin-right: 8px;
  -webkit-transition: background-color 0.125s ease-out;
  transition: background-color 0.125s ease-out;
  width: 25px;
}

.checkbox-wrapper-35 .switch + label::after {
  background-color: #fff;
  border-radius: 13px;
  box-shadow: 0 3px 1px 0 rgba(37, 34, 71, 0.05), 0 2px 2px 0 rgba(37, 34, 71, 0.1), 0 3px 3px 0 rgba(37, 34, 71, 0.05);
  height: 13px;
  left: 1px;
  position: absolute;
  top: 1px;
  -webkit-transition: -webkit-transform 0.125s ease-out;
  transition: -webkit-transform 0.125s ease-out;
  transition: transform 0.125s ease-out;
  transition: transform 0.125s ease-out, -webkit-transform 0.125s ease-out;
  width: 13px;
}

.checkbox-wrapper-35 .switch + label .switch-x-text {
  display: block;
  margin-right: .3em;
}

.checkbox-wrapper-35 .switch + label .switch-x-toggletext {
  display: block;
  font-weight: bold;
  height: 15px;
  overflow: hidden;
  position: relative;
  width: 25px;
}

.checkbox-wrapper-35 .switch + label .switch-x-unchecked,
  .checkbox-wrapper-35 .switch + label .switch-x-checked {
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
  transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
  transition: transform 0.125s ease-out, opacity 0.125s ease-out;
  transition: transform 0.125s ease-out, opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
}

.checkbox-wrapper-35 .switch + label .switch-x-unchecked {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

.checkbox-wrapper-35 .switch + label .switch-x-checked {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.checkbox-wrapper-35 .switch + label .switch-x-hiddenlabel {
  position: absolute;
  visibility: hidden;
}

.checkbox-wrapper-35 .switch:checked + label::before {
  background-color: #ffb500;
}

.checkbox-wrapper-35 .switch:checked + label::after {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
}

.checkbox-wrapper-35 .switch:checked + label .switch-x-unchecked {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.checkbox-wrapper-35 .switch:checked + label .switch-x-checked {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
} 

</style>