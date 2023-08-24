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

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel_input'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});
