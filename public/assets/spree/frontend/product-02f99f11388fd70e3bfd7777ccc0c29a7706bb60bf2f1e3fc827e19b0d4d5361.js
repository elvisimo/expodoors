(function(){Spree.ready(function(e){var a,t;return Spree.addImageHandlers=function(){var a;return a=e("#product-images ul.thumbnails"),e("#main-image").data("selectedThumb",e("#main-image img").attr("src")),a.find("li").eq(0).addClass("selected"),a.find("a").on("click",function(t){return e("#main-image").data("selectedThumb",e(t.currentTarget).attr("href")),e("#main-image").data("selectedThumbId",e(t.currentTarget).parent().attr("id")),a.find("li").removeClass("selected"),e(t.currentTarget).parent("li").addClass("selected"),!1}),a.find("li").on("mouseenter",function(a){return e("#main-image img").attr("src",e(a.currentTarget).find("a").attr("href"))}),a.find("li").on("mouseleave",function(){return e("#main-image img").attr("src",e("#main-image").data("selectedThumb"))})},Spree.showVariantImages=function(a){var t,i,r;return e("li.vtmb").hide(),e("li.tmb-"+a).show(),t=e("#"+e("#main-image").data("selectedThumbId")),t.hasClass("vtmb-"+a)?void 0:(r=e(e("#product-images ul.thumbnails li:visible.vtmb").eq(0)),r.length>0||(r=e(e("#product-images ul.thumbnails li:visible").eq(0))),i=r.find("a").attr("href"),e("#product-images ul.thumbnails li").removeClass("selected"),r.addClass("selected"),e("#main-image img").attr("src",i),e("#main-image").data("selectedThumb",i),e("#main-image").data("selectedThumbId",r.attr("id")))},Spree.updateVariantPrice=function(a){var t;return t=a.data("price"),t?e(".price.selling").text(t):void 0},a=e('#product-variants input[type="radio"]'),a.length>0&&(t=e('#product-variants input[type="radio"][checked="checked"]'),Spree.showVariantImages(t.attr("value")),Spree.updateVariantPrice(t)),Spree.addImageHandlers(),a.click(function(){return Spree.showVariantImages(this.value),Spree.updateVariantPrice(e(this))})})}).call(this);