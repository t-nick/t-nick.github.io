var goods = {
	"28292" : {
		"img" : "https://cdn2.iconfinder.com/data/icons/sewing/512/clothes_dress_hanger_price-128.png",
		"name" : "Dress",
		"cost" : 500,
		"size" : "S",
		"sklad" : "да"
	},
	"23729" : {
		"img" : "https://cdn1.iconfinder.com/data/icons/fashion-flat-1/48/16-128.png",
		"name" : "Blazer green",
		"cost" : 650,
		"size" : "L, XL",
		"sklad" : "да"
	},
	"11223" : {
		"img" : "https://cdn4.iconfinder.com/data/icons/clothes-and-accessories-men-and-women/1024/women-blazer-128.png",
		"name" : "Blazer blue",
		"cost" : 720,
		"size" : "M",
		"sklad" : "да"
	},
	"11423" : {
		"img" : "https://cdn3.iconfinder.com/data/icons/clothes-accessories-set-1/512/Jersey-128.png",
		"name" : "T-Shirt",
		"cost" : 400,
		"size" : "M, L",
		"sklad" : "да"
	},
	"11623" : {
		"img" : "https://cdn2.iconfinder.com/data/icons/winter-sport-vol-1/512/21-01-128.png",
		"name" : "Scarf",
		"cost" : 100,
		"size" : "M",
		"sklad" : "да"
	},
	"11624" : {
		"img" : "https://cdn0.iconfinder.com/data/icons/care-colored-1/213/long-pants-clothes-128.png",
		"name" : "Pants",
		"cost" : 700,
		"size" : "S",
		"sklad" : "нет"
	},
	"11625" : {
		"img" : "https://cdn4.iconfinder.com/data/icons/green-shopper/128/clothes.png",
		"name" : "Shirt",
		"cost" : 350,
		"size" : "M",
		"sklad" : "да"
	},
	"11626" : {
		"img" : "https://cdn1.iconfinder.com/data/icons/losk-and-style/70/.svg-128.png",
		"name" : "Bow",
		"cost" : 200,
		"size" : "L",
		"sklad" : "нет"
	},
	"11627" : {
		"img" : "https://cdn0.iconfinder.com/data/icons/fashion-and-clothes-4/64/clothes_clothing_fashion_skirt-128.png",
		"name" : "Skirt",
		"cost" : 300,
		"size" : "S, M",
		"sklad" : "да"
	},
	"11628" : {
		"img" : "https://cdn0.iconfinder.com/data/icons/ballicons/128/shirt-128.png",
		"name" : "Shirt",
		"cost" : 500,
		"size" : "S, XS",
		"sklad" : "да"
	}
};

var out = '';
for (var key in goods) {
	out+='<div class="item">';	
	out+='<div class="item_img" ><img src="'+goods[key].img+'">'+'</div>';
	out+='<p class="item_descrip">Название: '+goods[key].name  + '</p>';
	out+='<p class="item_descrip">Цена: '+'<span class="item_descrip__red">'+goods[key].cost +'</span>' +' грн'+ '</p>';
	out+='<p class="item_descrip">Наличие: '+goods[key].sklad  + '</p>';
	out+='<p class="item_descrip">Размер: '+goods[key].size + '</p>';
	out+='</div>';
}
document.getElementById('out').innerHTML = out;




