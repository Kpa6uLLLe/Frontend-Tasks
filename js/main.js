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

function getData(labelWeights, labelColors) {
  try{
    return {
      datasets: [{
        data: labelWeights,
        cutout:"80%",
        rotation: 270,
        hoverOffset: 0,
        borderWidth: 0,
        backgroundColor: labelColors
      }]
    }
  }
  catch{
    return
  }
}
function getConfig(labelWeights, labelColors) {
 return {
      type: 'doughnut',
      data: getData(labelWeights, labelColors),
      options: {
        plugins,
        layout,
        onHover
      },
      plugins: [mouseOutCatcher, totalCounter]
  }
}


const countries = ['Россия', 'Казахстан', 'Узбекистан'];
const cities = ['Тюмень', 'Петербург', 'Нур-Султан','Алма-Аты', 'Ташкент'];
const soldAmountCountries = [1435, 1066, 370];
const soldAmountCountriesPlanned = [2500, 1000, 350];
const soldAmountCities = [370, 1065, 370, 696, 370];
const soldAmountCitiesPlanned = [500, 2000, 330, 670, 350];
const profitCountries = [65, 49, 16];
const profitCountriesPlanned = [113.24, 44.505, 16.716];
const profitCities = [16, 49, 16, 33, 16];
const profitCitiesPlanned = [33.24, 80, 14, 30.505, 16.716];
const backgroundColorCities = ['rgb(187, 35, 44)', 'rgb(0, 95, 167)', 'rgb(249, 166, 32)', 'rgb(128, 128, 128)', 'rgb(38, 36, 36)'];
const backgroundColorCountries = ['rgb(187, 35, 44)', 'rgb(240, 161, 33)', 'rgb(54, 52, 52)'];
document.querySelectorAll('.countries').forEach((legend) => {
  let innerHtml = "";
  countries.forEach((country) => {
    innerHtml += '<div class="legend_line"><div class="legend_point"></div>-   ' + country + "</div>";
  });
  legend.innerHTML = innerHtml;
});
document.querySelectorAll('.countries').forEach((legend) => {
  legend.childNodes.forEach((legend_point, i) => {
    legend_point.firstChild.style.background = backgroundColorCountries[i];
  });
});
document.querySelectorAll('.cities').forEach((legend) => {
  let innerHtml = "";
  cities.forEach((city) => {
    innerHtml += '<div class="legend_line"><div class="legend_point"></div>-  ' + city + "</div>";
  });
  legend.innerHTML = innerHtml;
});
document.querySelectorAll('.cities').forEach((legend) => {
  legend.childNodes.forEach((legend_point, i) => {
    legend_point.firstChild.style.background = backgroundColorCities[i];
  });
});
const totalCounter = {
  id: 'totalCounter',
  afterUpdate(chart, args, options) {
    total = 0;
    chart.getDatasetMeta(0).data.forEach((item) => {
      total += item.$context.parsed;
    });
    chart.canvas.nextElementSibling.getElementsByClassName("tooltip-amount")[0].innerHTML = total;
  }
}
const mouseOutCatcher = {
  id: 'mouseOutCatcher',
  beforeEvent(chart, args, pluginOptions) {
    const event = args.event;
    let amount = 0;
    if (event.type === 'mouseout') {
      chart.getDatasetMeta(0).data.forEach((item, i) => {
        item.outerRadius = 100;
        amount+= item.$context.parsed;
      });
      ctx.nextElementSibling.getElementsByClassName("tooltip-amount")[0].innerHTML = amount;
      ctx.nextElementSibling.nextElementSibling.childNodes.forEach((item) => {
        item.classList.remove("legend_highlighted");
      });
    }
  }
}
const plugins = {
  tooltip: {
    enabled: false
  }
}
const layout = {
  padding: {
    bottom: 10
  }
}
const onHover = function(event, chartElement) {
  if(chartElement.length != 1){
    return;
  }
  if(previousHover != null){
    previousHover[0].element.outerRadius = 100;
    ctx.nextElementSibling.nextElementSibling.childNodes[previousHover[0].index].classList.remove("legend_highlighted");
  }
  chartElement[0].element.outerRadius = 106;
  previousHover = chartElement;
  ctx.nextElementSibling.getElementsByClassName("tooltip-amount")[0].innerHTML = chartElement[0].element.$context.parsed;
  ctx.nextElementSibling.nextElementSibling.childNodes[chartElement[0].index].classList.add("legend_highlighted");
}
let previousHover;
let config = [getConfig(soldAmountCountries, backgroundColorCountries),
getConfig(soldAmountCities, backgroundColorCities),
getConfig(profitCountries, backgroundColorCountries),
getConfig(profitCities, backgroundColorCities)]
let configPlanned = [getConfig(soldAmountCountriesPlanned, backgroundColorCountries),
getConfig(soldAmountCitiesPlanned, backgroundColorCities),
getConfig(profitCountriesPlanned, backgroundColorCountries),
getConfig(profitCitiesPlanned, backgroundColorCities)
]
const ctxArray = document.querySelectorAll('.graph');
ctxArray.forEach((item) => {
  item.addEventListener('mouseover', () => {
    ctx = item;
  });
  item.addEventListener('mouseout', () => {
    previousHover = null;
  })
});
let chartArray = [];
ctxArray.forEach((item, i) => {
  chartArray.push(new Chart(item, config[i]));
});
document.querySelectorAll('.switch-btn').forEach((item) => {
  let leftItem = item.previousElementSibling;
  let rightItem = item.nextElementSibling;
  item.addEventListener('click', () => {
    if(item.classList.contains('switch-on')) {
      item.classList.remove('switch-on');
      rightItem.classList.remove('switch-text-on');
      leftItem.classList.add('switch-text-on');
      temp = [];
      ctxArray.forEach((item, i) => {
        if(chartArray[i] != null){
          chartArray[i].destroy();
        }
        temp.push(new Chart(item, config[i]));
      });
      chartArray = temp;
    }
    else {
      item.classList.add('switch-on');
      leftItem.classList.remove('switch-text-on');
      rightItem.classList.add('switch-text-on');
      temp = [];
      ctxArray.forEach((item, i) => {
        if(chartArray[i] != null){
          chartArray[i].destroy();
        }
        temp.push(new Chart(item, configPlanned[i]));
      });
      chartArray = temp;
    }


  });
});
