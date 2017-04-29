;(function($){
	
$.fn.SelectStyle = function (){
	$(this).each( function(){
		$(this).addClass("hidden")
		var select_cont = $("<div class='select_cont'>"),
			select_block = $("<div class='select_block'>"),
			num = $(this).find("option").length,
			options = $(this).find("option"),
			that = $(this),
			opened = false

		select_block[0].addEventListener("click", function(){
			if(opened == false){
				$(this).height((num+1)*40 + "")
				select_cont.addClass("opened")
				opened = true
			}else{
				$(this).height(40 + "")
				select_cont.removeClass("opened")
				opened = false
			}
		})

		if(num > 0){
			var i = 0, 
				selected = null
			while(i < num){
				var option_item = 
					$("<div class='option_item "+ ((options.eq(i).is(':selected')) ? ' selected' : '' ) +"' data-value='"+ options.eq(i).val() + "'>").html(options.eq(i).text())
				options.eq(i).is(':selected') ? selected = true : null 
	
				option_item[0].addEventListener("click", function(){
					that.find("option").removeAttr("selected")
					;(function(x){
						var i2 = 0
						var ind = $(x).data("value")
					
						while(i2 < num){
							if(options.eq(i2).val() == ind){
								that.find("option").eq(i2).attr("selected", "selected")
							}
							i2++;
						}
						$(x).parent().find(".div_option").eq(0).remove()
						$(x).clone(true).prependTo(select_block)
						$(".option_item").removeClass("selected") 
						$(x).addClass("selected")
					})(this)
				})
				if(i == 0 && selected == null){
					select_block.prepend(option_item.clone(true)) 
				}else if(selected != null){
					select_block.find(".option_item").eq(0).remove()
					select_block.prepend(option_item.clone(true).removeClass("selected"))
					selected = null 
				}
				select_block.append(option_item) 
				i++;
			}
		}
		select_cont.append(select_block)
		select_cont.insertBefore($(this))
		console.log(value);
	})
}
})(jQuery);
