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

document.querySelectorAll('.item_category').forEach((item) => {
item.innerHTML = "Кресла театральные";
});
document.querySelectorAll('.item_name').forEach((item) => {
item.innerHTML = "Театральное кресло Прайм";
});
document.querySelectorAll('.item_article').forEach((item) => {
item.innerHTML = 'Артикул: <div class="article_numbers">789-2341</div>';
});
document.querySelectorAll('.item_price').forEach((item) => {
item.innerHTML = 'От: <div class="price_numbers">6762</div> Р';
});
document.querySelectorAll('.item_mod_discount').forEach((item) => {
item.innerHTML = '<div class="discount_icon"></div> акция';
});
document.querySelectorAll('.item_mod_hot').forEach((item) => {
item.innerHTML = '<div class="hot_icon"></div> хит продаж';
});
document.querySelectorAll('.item_mod_new').forEach((item) => {
item.innerHTML = '<div class="new_icon"></div> новинка';
});
document.querySelectorAll('.item_mod_instock').forEach((item) => {
item.innerHTML = '<div class="instock_icon"></div> В наличии';
});
