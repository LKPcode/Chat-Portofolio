# Chat Portofolio

Demo: [Chat Portofolio](https://loukas.dev)

A Web Portofolio to present my projects and skills. It was inspired by the ChatGPT User Interface.

Every project is displayed in a chat-like interface, and rendered in a stream like fashion. There is no connection to a real LLM, all answers are predefined based on the markdown files in the */public/projects* folder.

Created with Nuxt3.js and TailwindCSS.

####  To link your own projects:
- Add a markdown file in the **/public/projects** folder and follow the same structure as the existing ones.
- Change the *projects* array in the **/components/SidebarContents.vue** file to include the new project.


## Installation

```bash
npm install
```

```bash
npm run dev
```


Safari WebKit is not supported yet as it does not render markdown images correctly. If a user is using Safari or IOS WebKit, the default is to disable chat streaming.



