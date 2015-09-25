$(document).ready(function() {
/*拖拽填充表格*/
  $(document).on("dragstart",'.draglist',function (ev) {			//开始拖拽备选栏目
      ev.stopPropagation();	
        
      var ele = ev.target;
      var eleDrag = ev.originalEvent;
      eleDrag.dataTransfer.effectAllowed = "move";
      eleDrag.dataTransfer.setData("text", ele.id);
      return true;
  });

  $(document).on("dragstart",'.placed',function (ev) {			//开始拖拽已放置在框架中的栏目
      ev.stopPropagation();
		
      var ele = ev.target;
      var eleDrag = ev.originalEvent;
      eleDrag.dataTransfer.effectAllowed = "move";
      eleDrag.dataTransfer.setData("text", $(ele).attr('colId'));
      return true;
  });

  $(document).on("dragover",'.place',function (e) {
      e.preventDefault();
  });

  $(document).on("drop",'.place',function (ev) {					//拖拽元素进入目标元素头上，同时鼠标松开的时候
      var ele = ev.target;
      var eleDrop = ev.originalEvent;
      var draggedId=eleDrop.dataTransfer.getData("text");
      if ($(ele).attr("class")=="placed") {
          return false;
      }else{
          var dragged=$("#"+draggedId);
          dragged.attr("draggable","false").addClass('gray').removeAttr('title');
          $(".placed[colId="+draggedId+"]").text('').removeClass('placed').removeClass('gray').addClass('place');
          $(ele).text(dragged.text()).addClass('gray').attr('colId',draggedId);
          $(ele).removeClass('place').addClass("placed");
      }

      return false;		//return flase 可以阻止在Firefox中拖拽打开新标签
  });
});

