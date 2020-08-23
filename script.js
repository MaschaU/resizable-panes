(function() {
    var animationArea = $("#wrapper");
    var bar = $("#splitter");
    var wrapperOffset = animationArea.offset().left;
    var point;
    var barLocation;
    

    bar.on("mousedown", function() {
        animationArea.on("mousemove.mover", function(e) {
            point = e.pageX;
            barLocation = point;
            $("#day").css({
                width: barLocation-wrapperOffset-10+"px"
            });
            bar.css({ left: barLocation-wrapperOffset-10+"px" 
            });
        })
            .on("mouseup mouseleave", function(e) {
                $(e.currentTarget).off(".mover");
            });
    });
})();