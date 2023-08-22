document.querySelectorAll('.accordion_button').forEach((item) => {
 item.addEventListener('click', () => {
   let content = item.nextElementSibling;
   if(content.style.maxHeight){
     document.querySelectorAll('.accordion_content').forEach((content) => content.style.maxHeight = null);

   } else {
     document.querySelectorAll('.accordion_content').forEach((content) => content.style.maxHeight = null);
     content.style.maxHeight = content.scrollHeight + 'px';
   }
 });
});
