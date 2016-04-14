$(function(){
  
if(localStorage.state){
	$(".slider").remove();
	$("#container").css({visibility:'visible'});
}else{
	//另一种
	$slides=$(".slides li")
	$slides.swipeLeft(function(){
	  var cur,next;
	  cur=$(this);
	  if($(this).next().length){
	    next=$(this).next();
	  }else{
	  	return;
	    next=$slides.first();
	  }
	  cur.removeClass("active");
	  setTimeout(function(){
	    next.addClass("active");
	  },0);
	  setTimeout(function(){
	     next.removeClass("zuoce");
	  },0)
	})


		$slides.swipeRight(function(){
		  var cur,prev;
		  cur=$(this);
		  if($(this).prev().length){
		    prev=$(this).prev();
		  }else{
		  	return;
		    prev=$slides.last();
		  }
		  cur.removeClass("active");
		  setTimeout(function(){
		    prev.addClass("active");
		  },0);
		  setTimeout(function(){
		     prev.removeClass("zuoce");
		  },0)
		})
		
  $("#enter").tap(function(){
  	$(".slider").remove();
  	$("#container").css({visibility:'visible'});
  	localStorage.state='true';
  })
}
  var lanmus=[
    {id:1,name:'社会'},
    {id:2,name:'明星'},
    {id:3,name:'时尚'},
    {id:4,name:'娱乐'},
  ]
  //把栏目id记录到li身上
  $(".tabs li").each(function(i){
  	$(this).data('index',lanmus[i].id);
  })
 //每个li点击的时候
  $(".tabs li").click(function(){
  	var lanmuId=$(this).data('index');
  	var shuju=liebiaos.filter(function(v,i){

  		return v.cateid==lanmuId;
  		
  	})
  	$("#list").empty();
  	
  	shuju.forEach(function(v,i){
  		var el=$("#yangben").clone();
	  	  el.attr('id','');
	  	  el.find('.card-title').text(v.title);
	  	  el.find("p").text(v.content);
  		$("#list").append(el);
  	})
  })
 
	var moren=liebiaos.filter(function(v,i){
		return v.cateid==1;
	})
	moren.forEach(function(v,i){
		var el=$("#yangben").clone();
	  	  el.attr('id','');
	  	  el.find('.card-title').text(v.title);
	  	  el.find("p").text(v.content);
  		 $("#list").append(el);
	})
})