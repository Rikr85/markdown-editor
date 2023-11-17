/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
//console.log('Hello world!'); 

//C:\Users\Diseño\Downloads\Documents\markdown-editor\marked\
//const marked = require('./marked/bin');

//import marked from './marked.js';
// const marked = require('marked');
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html'); 

const renderToMarkdown = (markdown) => {
    // htmlView.innerHTML = 'asfaljsfjasjdf';
    htmlView.innerHTML = markdown;
    
    // htmlView.innerHTML = marked(markdown, {sanitize: true});
} 
markdownView.addEventListener('keyup', e => {
    // console.log(e.target.value);
    
    const currentContent = e.target.value;
    renderToMarkdown(currentContent)
    
})


