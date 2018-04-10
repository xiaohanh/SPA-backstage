$(function(){
 var $menubar=$(".menu-bar");
 var $lastMenuBar=null;
 var $menuItem=$(".item");

	$menubar.click(function(e){
		var $menu =$(e.target).parents('li');
		var $items=$menu.find('.menu-items');
		var display=$items.css("display")==="none"? "block":"none";
		
		$items.css('display',display);
		
		if($lastMenuBar !==null &&$lastMenuBar.get(0)!=$menu.get(0) ){
			$lastMenuBar.find('.menu-items').css("display","none");
		}
		$lastMenuBar=$menu;	
		
	});
	
	
	$menuItem.click(function(e){
		var $item=$(e.currentTarget);
		location.hash=$item.find("p").attr("data-href");
});
});
