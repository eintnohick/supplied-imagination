$(function(){
	
	$('[data-toggle="nav"]').on('click',function(){
		$('.nav-responsive').toggleClass('active');
	});
	
	$('[data-view="more"]').on('click',function(){
		html='<div class="col col-event">';
		html+='<div class="event">';
		html+='<a class="event-link" href="#">';
		html+='<img class="img-full" src="img/event-1.png" alt="">';
		html+='<div class="event-inset"><span class="icon-user"></span>Jane Doe &bull; 30 mins</div>';
		html+='</a>';
		html+='<div class="event-body">';
		html+='<div class="event-title truncate">Apple Keynote</div>';
		html+='<div class="event-text truncate">Apr 20, 2020 &bull; Coolray Field</div>';
		html+='</div>';
		html+='</div>';
		html+='</div>';
		html+='<div class="col col-event">';
		html+='<div class="event">';
		html+='<a class="event-link" href="#">';
		html+='<img class="img-full" src="img/event-2.png" alt="">';
		html+='<div class="event-inset"><span class="icon-user"></span>Eric Chan &bull; 2 hrs</div>';
		html+='</a>';
		html+='<div class="event-body">';
		html+='<div class="event-title truncate">Basic Title that Truncates When It Runs Out of Space</div>';
		html+='<div class="event-text truncate">May 3, 2020 &bull; Atlanta Symphony Orchestra</div>';
		html+='</div>';
		html+='</div>';
		html+='</div>';
		$('#events').append(html);
	});
	
	$('[data-toggle="timeframe"]').on('click',function(){
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	$('a[href="#"]').on('click',function(e){
		e.preventDefault();
		console.log('nothing doing');
	});
	
    $('.input-range').rangepicker({
        type:'double',
        startValue:20,
        endValue:60,
        translateSelectLabel:function(currentPosition,totalPosition){
            return parseInt(100*(currentPosition/totalPosition));
        }
    });
	
});
