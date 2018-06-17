/*header*/
var $headerGallery = document.getElementById("header-image-gallery");
var $headerImage = $headerGallery.querySelectorAll(".header-image");

var selectedImage = 0;

function gallery ()
{
    selectedImage++
  
    for (var i = 0; i < $headerImage.length; i++)
    {
        if(i === selectedImage)
        {
            $headerImage[i].style.opacity = "1";
        }
        else
        {
            $headerImage[i].style.opacity = "0";
        }
    }   
    if (selectedImage === $headerImage.length - 1)
    {
        selectedImage = -1;
    }
}

$headerGallery.addEventListener("click", gallery);

//-------------------------------------------------------------------------

/*menu*/
var $gnbMenu = document.getElementById("menu");
var $gnbMenuItem = $gnbMenu.querySelectorAll (".menus");

var _add = true;
var _remove = false;


function addSelected ()
{
    var $twoDepthItemReset = $gnbMenu.querySelectorAll("li");

    for (var i = 0 ; i < $gnbMenuItem.length; i++)
    {
        for (var j = 0; j < $twoDepthItemReset.length; j++)
        {
            $twoDepthItemReset[j].classList.remove("ani");
        }
    }
    var $el = this;

    _add = true;
    //console.log($el);
       
    for (var i = 0; i < $gnbMenuItem.length; i++)
    {
        if ($el === $gnbMenuItem[i])
        {
            $gnbMenuItem[i].classList.add("selected");

            var $twoDepth = $gnbMenuItem[i].querySelector("ul");
            var $twoDepthItem = $twoDepth.querySelectorAll("li");

            var l = 0
            function menuAni ()
            {
                if (_add)
                    { 
                    if (l < $twoDepthItem.length)
                    {
                    $twoDepthItem[l].classList.add("ani");
                    console.log("2")
                    }
                    else
                    {clearInterval(menuAni);}
                    l++
                }else{l = 0;}
            }
            
            var countTimer = setInterval(menuAni, 50);
        }   
    }
}
//////////////////////////////////////////////////////////////
function removeSelected ()
{
    _add = false;
    for (var i = 0; i < $gnbMenuItem.length; i++)
    {
        if ($gnbMenuItem[i].classList.contains("selected"))
        {
            $gnbMenuItem[i].classList.remove("selected");

            var $twoDepth = $gnbMenuItem[i].querySelector("ul");
            var $twoDepthItem = $twoDepth.querySelectorAll("li");
            for (var i = 0; i < $twoDepthItem.length; i++)
            {
                if ($twoDepthItem[i].classList.contains("ani"))
                {$twoDepthItem[i].classList.remove("ani");}
            }
        }
    }
    return _add;
}
//////////////////////////////////////////////////////////////    
for (var i = 0; i < $gnbMenuItem.length; i++)
{
    $gnbMenuItem[i].addEventListener ("mouseenter", addSelected);
//////////////////////////////////////////////////////////////
    $gnbMenuItem[i].addEventListener ("mouseleave", removeSelected);
}
//////////////////////////////////////////////////////////////

//-------------------------------------------------------------------------

/*plot summary*/
var $plotSummaryEl = document.getElementById("plot-summary-container");
var $posterEl = document.getElementById("poster-box");
var $posterBtn = $posterEl.querySelector(".poster-btn");

function mouseOver ()
{
    var $el = this; var $parent = $el.parentElement;
    if (!$parent.classList.contains("open-poster"))
    {
        $posterEl.style.transform = "translateX(20px)";
        $posterBtn.style.color = "#ebb010";
    }
}
function mouseOut ()
{
    var $el = this; var $parent = $el.parentElement;
    if (!$parent.classList.contains("open-poster"))
    {
        $posterEl.style.transform = "translateX(0px)";
        $posterBtn.style.color = "#373737";
    }
}
$posterEl.addEventListener("mouseenter", mouseOver);
$posterEl.addEventListener("mouseleave", mouseOut);
//////////////////////////////////////////////////////////////
var _posterAni = true;
function openClosePoster ()
{
    var $el = this; var $parent = $el.parentElement; var $grandparents = $parent.parentElement;
    if (!$grandparents.classList.contains("open-poster") && _posterAni)
    {
        $plotSummaryEl.classList.add("open-poster");
        $posterEl.style.transform = "translateX(0px)";
        $posterBtn.style.color = "#000";
        $posterBtn.style.backgroundColor = "#ebb010";

        var $posterList =  $posterEl.querySelectorAll("li");
        var posterNumber = -1;
        function posterAni ()
        {
            console.log(posterNumber);
            posterNumber++
            if (posterNumber < $posterList.length)
            {
                $posterList[posterNumber].classList.add("poster-ani");
            }
            else
            {
                for (var i = 0; i < $posterList.length; i++)
                {
                    $posterList[i].classList.add("poster-img");
                    $posterList[i].classList.remove("poster-ani");
                }
                _posterAni = false;
                clearInterval(posterAniTime);
            }
        }
        var posterAniTime = setInterval(posterAni, 400);
    }
    ////////////////
    else if ($grandparents.classList.contains("open-poster") && !_posterAni)
    {
        $plotSummaryEl.classList.remove("open-poster");

        var $posterList =  $posterEl.querySelectorAll("li")
        for (var i = 0; i < $posterList.length; i++)
        {
            $posterList[i].classList.remove("poster-img");
        }
        $posterBtn.style.backgroundColor = "transparent"
        _posterAni = true;
    }
    return _posterAni;
}

$posterBtn.addEventListener("click", openClosePoster);


//-------------------------------------------------------------------------

/*storyline*/
var $gallery = document.getElementById('storyline');
var $view = $gallery.querySelector('#story-view-box');
var $viewContainer = $view.querySelector('#story-container');
var $viewItem = $viewContainer.querySelectorAll('.story-box');
var $list = $gallery.querySelector('#story-btn');
var $listItem = $list.querySelectorAll('a');


//갤러리의 width 값.
var _galleryW = 968;
var _cuId = 0;
var _exId = 0;

//전체 이미지의 개수.
var _max = $viewItem.length;

function galleryResize()
{
    $viewContainer.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < $viewItem.length; i++)
    {
        $viewItem[i].style.width = _galleryW + 'px';
    }
}
function gallerySlide()
{
    var duration = 400 + 100 * Math.abs(_cuId - _exId);
    $viewContainer.style.transform = 'translate3d('+ _galleryW * _cuId * -1 + 'px, 0, 0)';
    $viewContainer.style.transitionProperty = 'transform';

    $viewContainer.style.transitionDuration = duration + 'ms';

    $viewContainer.style.transitionTimeFunction = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
}
$viewContainer.addEventListener('transitionend', function()
{
    $viewContainer.style.transitionProperty = null;
    $viewContainer.style.transitionDuration = null;
    $viewContainer.style.transitionTimeFunction = null;
});

function listClick(id){
    function onClickList(event)
    {
        event.preventDefault();
        var $el = this, $parent = $el.parentElement;
        if(!$parent.classList.contains('selected'))
        {
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            //////
            for (var i = 0; i < $viewItem.length; i++)
            {$viewItem[i].style.opacity = "0";}
            $viewItem[_cuId].style.opacity = "1";
            //////
            gallerySlide();
            //////
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click', onClickList);
}


//초기화.
function init()
{
    galleryResize();
    for(var i = 0; i < $listItem.length; i++)
    {
        listClick(i);
    }
}
init();

//-------------------------------------------------------------------------

/*character*/
var $menu = document.getElementById('character-container');
var $menuItems = $menu.querySelectorAll('.character');
var $menuItemsEl = $menu.querySelectorAll('.name');
var _max = $menuItems.length;
var _isOpen = false;
var _isAni = false;

function characterMenu(id)
    {
        var $close = $menuItems[id].querySelector('.close');
        function onClickMenu(e)
        {
            e.preventDefault();
            var $parent = this.parentElement;
            
            if(_isAni) return;
            if(!$parent.classList.contains('selected'))
            {
                menuItemClassReset();
                $parent.classList.add('selected');
                _isOpen = true;
                _isAni = true; 
                    
                for(var i = 0; i < _max; i++)
                {
                    var width = 0;
                    if(i === id)
                    {
                        width = "100%"
                    }else{
                        width = "0"
                    }
                        $menuItems[i].style.width = width;        
                }
                    setTimeout(function()
                    {
                        _isAni = false;
                    }, 300);
            }        
        }   
            function onClickMenuClose(e)
            {
                e.preventDefault();
                var $parent = this.parentElement;
                if($parent.classList.contains('selected'))
                {
                    _isOpen = false;
                    $parent.classList.remove('selected');
                    for(var i = 0; i < _max; i++){
                        width = "20%"
                        $menuItems[i].style.width = width;
                    }
                }

            }
            $menuItemsEl[id].addEventListener('click', onClickMenu);
            $close.addEventListener('click', onClickMenuClose);
        }
    
for(var i = 0; i < _max; i++){
    characterMenu(i);
}
function menuItemClassReset(){
    for(var i = 0; i < _max; i++){
        $menuItems[i].classList.remove('selected');
    }
}

//-------------------------------------------------------------------------

/*music*/
var $musicEl = document.getElementById("music");

var $lyricsBtn = $musicEl.querySelectorAll("a");

var koBtn = $musicEl.querySelectorAll(".language-ko");
var enBtn = $musicEl.querySelectorAll(".language-en");
var allBtn = $musicEl.querySelectorAll(".language-all");

//console.log($lyricsBtn);

function lyricsView (id)
{
    function openCloseLyrics (e)
    {
        e.preventDefault();
        var $el = this; var $parent = $el.parentElement;
        var $grandparents =  $parent.parentElement; var $greatGrandparents =  $grandparents.parentElement;
        
        //console.log("openCloseLyrics")
        if(!$greatGrandparents.classList.contains("lyrics-open"))
        {
            $greatGrandparents.classList.add("lyrics-open");
            $el.innerHTML = "가사 닫기";

            ///////////////////////////////////////////////////////////

            var $lyricsBox = $musicEl.querySelectorAll(".lyrics-box")[id];
            var $lyricsContainer = $lyricsBox.querySelector(".lyrics-container");

            $lyricsContainer.scrollTo(0, 0);

            if ($lyricsBox.classList.contains("ko-only"))
            {
                $lyricsBox.classList.remove("ko-only");
            }
            else if ($lyricsBox.classList.contains("en-only"))
            {
                $lyricsBox.classList.remove("en-only");
            }
        }
        else
        {
            $greatGrandparents.classList.remove("lyrics-open");
            $el.innerHTML = "가사 보기"; 
        }
    }
////////////////////////////////////////////////////////
    function languageChoiceKo ()
    {
        var $el = this; var $parent = $el.parentElement;
        var $grandparents =  $parent.parentElement;
        if (!$grandparents.classList.contains("ko-only"))
        {
            $grandparents.classList.add("ko-only");
            if ($grandparents.classList.contains("en-only"))
            {
                $grandparents.classList.remove("en-only");
            }
        }
    }
    function languageChoiceEn ()
    {
        var $el = this; var $parent = $el.parentElement;
        var $grandparents =  $parent.parentElement;
        if (!$grandparents.classList.contains("en-only"))
        {
            $grandparents.classList.add("en-only");
            if ($grandparents.classList.contains("ko-only"))
            {
                $grandparents.classList.remove("ko-only");
            }
        }
    }
    function languageChoiceAll ()
    {
        var $el = this; var $parent = $el.parentElement;
        var $grandparents =  $parent.parentElement;
        if ($grandparents.classList.contains("ko-only"))
        {
            $grandparents.classList.remove("ko-only");
        }
        else if ($grandparents.classList.contains("en-only"))
        {
            $grandparents.classList.remove("en-only");
        }
    }

    $lyricsBtn[id].addEventListener("click", openCloseLyrics);

    koBtn[id].addEventListener("click", languageChoiceKo)
    enBtn[id].addEventListener("click", languageChoiceEn)
    allBtn[id].addEventListener("click", languageChoiceAll)
}

for (var i = 0; i < $lyricsBtn.length; i++)
{ 
    lyricsView(i);
}

//-------------------------------------------------------------------------

/*lines*/
var $linesEl = document.getElementById("lines");
var $linesAniBtn = $linesEl.querySelectorAll("a");

function linesView (id)
{
    function linesAni(e)
    {
        e.preventDefault();
        //console.log("linesAni");
        var $el = this; var $parent = $el.parentElement;
        var $textEl = $parent.querySelectorAll(".line-text")

        if (!$parent.classList.contains("play"))
        {
            $parent.classList.add("play");
            
            var aniNumber = -1;
            function addLineAni ()
            {
                aniNumber++
                if (aniNumber < $textEl.length)
                {
                    $textEl[aniNumber].classList.add("line-ani");
                }
                if(aniNumber === $textEl.length+1)
                {
                    for(var i=0; i < $textEl.length; i++)
                    {
                        $textEl[i].classList.remove("line-ani");
                    }
                    $parent.classList.remove("play");
                    clearInterval(lineAniTimer);
                } 
            }
            var lineAniTimer = setInterval(addLineAni, 700)
        }

    }
    $linesAniBtn[id].addEventListener("click", linesAni);
}

for (var i = 0; i < $linesAniBtn.length; i++)
{ 
    linesView(i);
}