var numberOfCubes = 100;

$(document).ready(function(){
    function background(){
            var diviceWidth = window.innerWidth
            var diviceHeight = window.innerHeight

        function makeCubes(){
            for(var i = 0; i < numberOfCubes; i++){  
                var y = Math.random() * diviceHeight
                var y2 = y + 10
                var y3 = y2 + 10
                var y4 = y + 10
                var y5 = y + 20
                var x = Math.random() * diviceWidth
                var x2 = x + 20
                var x3 = x2 + 0
                var x4 = x3 + 0
                var x5 = x 
                $('<div class="triangle1"></div>').css({left: x + 'px', top: y + 'px',}).appendTo('body');
                $('<div class="triangle2"></div>').css({left: x2 + 'px', top: y + 'px',}).appendTo('body');
                $('<div class="triangle3"></div>').css({left: x3 + 'px', top: y2 + 'px',}).appendTo('body');
                $('<div class="triangle4"></div>').css({left: x4 + 'px', top: y3 + 'px',}).appendTo('body');
                $('<div class="triangle5"></div>').css({left: x5 + 'px', top: y4 + 'px',}).appendTo('body');
                $('<div class="triangle6"></div>').css({left: x5 + 'px', top: y5 + 'px',}).appendTo('body');
                
            }
    }
        makeCubes()        
        console.log(squares.length)
    }
    background()
});

document.body.style.overflow = 'hidden';