var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var $musicSection = document.getElementById("music");
var $playBtn = $musicSection.querySelectorAll(".play");
var $volumeBtn = $musicSection.querySelectorAll(".volume");

var player1; var player2; var player3;
var player4; var player5; var player6;
var player7; var player8; var player0;

function onYouTubeIframeAPIReady()
{
    player0 = new YT.Player('track1',
    {
        width: '100%',
        height: '100%',
        videoId: 'cuk39tu10tc',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'cuk39tu10tc',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });
    
    player1 = new YT.Player('track2',
    {
        width: '100%',
        height: '100%',
        videoId: 'VhGnhOG_xMI',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'VhGnhOG_xMI',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player2 = new YT.Player('track3',
    {
        width: '100%',
        height: '100%',
        videoId: 'kzH6WBzwaOI',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'kzH6WBzwaOI',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player3 = new YT.Player('track4',
    {
        width: '100%',
        height: '100%',
        videoId: 'ZTpk9x4V53Q',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'ZTpk9x4V53Q',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player4 = new YT.Player('track5',
    {
        width: '100%',
        height: '100%',
        videoId: '740TB17Dsn0',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: '740TB17Dsn0',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player5 = new YT.Player('track6',
    {
        width: '100%',
        height: '100%',
        videoId: 'HloMs6nxhG4',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'HloMs6nxhG4',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player6 = new YT.Player('track7',
    {
        width: '100%',
        height: '100%',
        videoId: 'KGz83x-DT20',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'KGz83x-DT20',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player7 = new YT.Player('track8',
    {
        width: '100%',
        height: '100%',
        videoId: 'Xc6lEyvesH8',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'Xc6lEyvesH8',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });

    player8 = new YT.Player('track9',
    {
        width: '100%',
        height: '100%',
        videoId: 'yMWcPAEpuq4',
        playerVars:
        {
            controls: 0,
            autoplay: 0,
            disablekb: 1,
            iv_load_policy: 0,
            loop: 1,
            playlist: 'yMWcPAEpuq4',
            modestbranding: 0,
            playsinline: 0,
            showinfo: 0,
        },
        events:
        {
            onReady: initialize
        }
    });
}

var volumeLever1 = 20;
var volumeLever2 = 60;
var volumeLever3 = 100;

function initialize()
{
    player0.setVolume(volumeLever1);
    player1.setVolume(volumeLever1);
    player2.setVolume(volumeLever1);
    player3.setVolume(volumeLever1);
    player4.setVolume(volumeLever1);
    player5.setVolume(volumeLever1);
    player6.setVolume(volumeLever1);
    player7.setVolume(volumeLever1);
    player8.setVolume(volumeLever1);
}

    var volumeNumber0 = 0; var volumeNumber1 = 0; var volumeNumber2 = 0;
    var volumeNumber3 = 0; var volumeNumber4 = 0; var volumeNumber5 = 0;
    var volumeNumber6 = 0; var volumeNumber7 = 0; var volumeNumber8 = 0; 

    var playToggle0 = true; var playToggle1 = true; var playToggle2 = true;
    var playToggle3 = true; var playToggle4 = true; var playToggle5 = true;
    var playToggle6 = true; var playToggle7 = true; var playToggle8 = true;

    function playBtnClick ()
    {
        if (playToggle0)
        {
            player0.playVideo();
            $playBtn[0].innerHTML = "Pause";
            playToggle0 = false;
        }
        else
        {
            player0.pauseVideo();
            $playBtn[0].innerHTML = "Play";
            playToggle0 = true;
        }
        return playToggle0;
    }
    $playBtn[0].addEventListener("click", playBtnClick);
////////////////////////////////////
    function playBtnClick1 ()
    {
        if (playToggle1)
        {
            player1.playVideo();
            $playBtn[1].innerHTML = "Pause";
            playToggle1 = false;
        }
        else
        {
            player1.pauseVideo();
            $playBtn[1].innerHTML = "Play";
            playToggle1 = true;
        }
        return playToggle1;
    }
    $playBtn[1].addEventListener("click", playBtnClick1);
////////////////////////////////////
    function playBtnClick2 ()
    {
        if (playToggle2)
        {
            player2.playVideo();
            $playBtn[2].innerHTML = "Pause";
            playToggle2 = false;
        }
        else
        {
            player2.pauseVideo();
            $playBtn[2].innerHTML = "Play";
            playToggle2 = true;
        }
        return playToggle2;
    }
    $playBtn[2].addEventListener("click", playBtnClick2);
////////////////////////////////////
    function playBtnClick3 ()
    {
        if (playToggle3)
        {
            player3.playVideo();
            $playBtn[3].innerHTML = "Pause";
            playToggle3 = false;
        }
        else
        {
            player3.pauseVideo();
            $playBtn[3].innerHTML = "Play";
            playToggle3 = true;
        }
        return playToggle3;
    }
    $playBtn[3].addEventListener("click", playBtnClick3);
////////////////////////////////////
    function playBtnClick4 ()
    {
        if (playToggle4)
        {
            player4.playVideo();
            $playBtn[4].innerHTML = "Pause";
            playToggle4 = false;
        }
        else
        {
            player4.pauseVideo();
            $playBtn[4].innerHTML = "Play";
            playToggle4 = true;
        }
        return playToggle4;
    }
    $playBtn[4].addEventListener("click", playBtnClick4);
////////////////////////////////////
    function playBtnClick5 ()
    {
        if (playToggle5)
        {
            player5.playVideo();
            $playBtn[5].innerHTML = "Pause";
            playToggle5 = false;
        }
        else
        {
            player5.pauseVideo();
            $playBtn[5].innerHTML = "Play";
            playToggle5 = true;
        }
        return playToggle5;
    }
    $playBtn[5].addEventListener("click", playBtnClick5);
////////////////////////////////////
    function playBtnClick6 ()
    {
        if (playToggle6)
        {
            player6.playVideo();
            $playBtn[6].innerHTML = "Pause";
            playToggle6 = false;
        }
        else
        {
            player6.pauseVideo();
            $playBtn[6].innerHTML = "Play";
            playToggle6 = true;
        }
        return playToggle6;
    }
    $playBtn[6].addEventListener("click", playBtnClick6);
////////////////////////////////////
    function playBtnClick7 ()
    {
        if (playToggle7)
        {
            player7.playVideo();
            $playBtn[7].innerHTML = "Pause";
            playToggle7 = false;
        }
        else
        {
            player7.pauseVideo();
            $playBtn[7].innerHTML = "Play";
            playToggle7 = true;
        }
        return playToggle7;
    }
    $playBtn[7].addEventListener("click", playBtnClick7);
////////////////////////////////////
    function playBtnClick8 ()
    {
        if (playToggle8)
        {
            player8.playVideo();
            $playBtn[8].innerHTML = "Pause";
            playToggle8 = false;
        }
        else
        {
            player8.pauseVideo();
            $playBtn[8].innerHTML = "Play";
            playToggle8 = true;
        }
        return playToggle8;
    }
    $playBtn[8].addEventListener("click", playBtnClick8);



    function volumeBtnClick ()
    {
        
        if(volumeNumber0 === 0)
        {
            player0.setVolume(volumeLever2);
            $volumeBtn[0].style.color = "#874444"
            volumeNumber0++
        }
        else if (volumeNumber0 === 1)
        {
            player0.setVolume(volumeLever3);
            $volumeBtn[0].style.color = "#9d1e1e"
            volumeNumber0++
        }
        else if (volumeNumber0 === 2)
        {
            player0.setVolume(volumeLever1);
            $volumeBtn[0].style.color = "#5c4e4e"

            volumeNumber0 = 0;
        }
        return volumeNumber0;
    }
    $volumeBtn[0].addEventListener ("click", volumeBtnClick);
    ////////////////////////////////////////////////////////
    function volumeBtnClick1 ()
    {
        
        if(volumeNumber1 === 0)
        {
            player1.setVolume(volumeLever2);
            $volumeBtn[1].style.color = "#874444"
            volumeNumber1++
        }
        else if (volumeNumber1 === 1)
        {
            player1.setVolume(volumeLever3);
            $volumeBtn[1].style.color = "#9d1e1e"
            volumeNumber1++
        }
        else if (volumeNumber1 === 2)
        {
            player1.setVolume(volumeLever1);
            $volumeBtn[1].style.color = "#5c4e4e"

            volumeNumber1 = 0;
        }
        return volumeNumber1;
    }
    $volumeBtn[1].addEventListener ("click", volumeBtnClick1);
    ////////////////////////////////////////////////////////
    function volumeBtnClick2 ()
    {
        
        if(volumeNumber2 === 0)
        {
            player2.setVolume(volumeLever2);
            $volumeBtn[2].style.color = "#874444"
            volumeNumber2++
        }
        else if (volumeNumber2 === 1)
        {
            player2.setVolume(volumeLever3);
            $volumeBtn[2].style.color = "#9d1e1e"
            volumeNumber2++
        }
        else if (volumeNumber2 === 2)
        {
            player2.setVolume(volumeLever1);
            $volumeBtn[2].style.color = "#5c4e4e"

            volumeNumber2 = 0;
        }
        return volumeNumber2;
    }
    $volumeBtn[2].addEventListener ("click", volumeBtnClick2);
    ////////////////////////////////////////////////////////
    function volumeBtnClick3 ()
    {
        
        if(volumeNumber3 === 0)
        {
            player3.setVolume(volumeLever2);
            $volumeBtn[3].style.color = "#874444"
            volumeNumber3++
        }
        else if (volumeNumber3 === 1)
        {
            player3.setVolume(volumeLever3);
            $volumeBtn[3].style.color = "#9d1e1e"
            volumeNumber3++
        }
        else if (volumeNumber3 === 2)
        {
            player3.setVolume(volumeLever1);
            $volumeBtn[3].style.color = "#5c4e4e"

            volumeNumber3 = 0;
        }
        return volumeNumber3;
    }
    $volumeBtn[3].addEventListener ("click", volumeBtnClick3);
    ////////////////////////////////////////////////////////
    function volumeBtnClick4 ()
    {
        
        if(volumeNumber4 === 0)
        {
            player4.setVolume(volumeLever2);
            $volumeBtn[4].style.color = "#874444"
            volumeNumber4++
        }
        else if (volumeNumber4 === 1)
        {
            player4.setVolume(volumeLever3);
            $volumeBtn[4].style.color = "#9d1e1e"
            volumeNumber4++
        }
        else if (volumeNumber4 === 2)
        {
            player4.setVolume(volumeLever1);
            $volumeBtn[4].style.color = "#5c4e4e"

            volumeNumber4 = 0;
        }
        return volumeNumber4;
    }
    $volumeBtn[4].addEventListener ("click", volumeBtnClick4);
    ////////////////////////////////////////////////////////
    function volumeBtnClick5 ()
    {
        
        if(volumeNumber5 === 0)
        {
            player5.setVolume(volumeLever2);
            $volumeBtn[5].style.color = "#874444"
            volumeNumber5++
        }
        else if (volumeNumber5 === 1)
        {
            player5.setVolume(volumeLever3);
            $volumeBtn[5].style.color = "#9d1e1e"
            volumeNumber5++
        }
        else if (volumeNumber5 === 2)
        {
            player5.setVolume(volumeLever1);
            $volumeBtn[5].style.color = "#5c4e4e"

            volumeNumber5 = 0;
        }
        return volumeNumber5;
    }
    $volumeBtn[5].addEventListener ("click", volumeBtnClick5);
    ////////////////////////////////////////////////////////
    function volumeBtnClick6 ()
    {
        
        if(volumeNumber6 === 0)
        {
            player6.setVolume(volumeLever2);
            $volumeBtn[6].style.color = "#874444"
            volumeNumber6++
        }
        else if (volumeNumber6 === 1)
        {
            player6.setVolume(volumeLever3);
            $volumeBtn[6].style.color = "#9d1e1e"
            volumeNumber6++
        }
        else if (volumeNumber6 === 2)
        {
            player6.setVolume(volumeLever1);
            $volumeBtn[6].style.color = "#5c4e4e"

            volumeNumber6 = 0;
        }
        return volumeNumber6;
    }
    $volumeBtn[6].addEventListener ("click", volumeBtnClick6);
    ////////////////////////////////////////////////////////
    function volumeBtnClick7 ()
    {
        
        if(volumeNumber7 === 0)
        {
            player7.setVolume(volumeLever2);
            $volumeBtn[7].style.color = "#874444"
            volumeNumber7++
        }
        else if (volumeNumber7 === 1)
        {
            player7.setVolume(volumeLever3);
            $volumeBtn[7].style.color = "#9d1e1e"
            volumeNumber7++
        }
        else if (volumeNumber7 === 2)
        {
            player7.setVolume(volumeLever1);
            $volumeBtn[7].style.color = "#5c4e4e"

            volumeNumber7 = 0;
        }
        return volumeNumber7;
    }
    $volumeBtn[7].addEventListener ("click", volumeBtnClick7);
    ////////////////////////////////////////////////////////
    function volumeBtnClick8 ()
    {
        
        if(volumeNumber8 === 0)
        {
            player8.setVolume(volumeLever2);
            $volumeBtn[8].style.color = "#874444"
            volumeNumber8++
        }
        else if (volumeNumber8 === 1)
        {
            player8.setVolume(volumeLever3);
            $volumeBtn[8].style.color = "#9d1e1e"
            volumeNumber8++
        }
        else if (volumeNumber8 === 2)
        {
            player8.setVolume(volumeLever1);
            $volumeBtn[8].style.color = "#5c4e4e"

            volumeNumber8 = 0;
        }
        return volumeNumber8;
    }
    $volumeBtn[8].addEventListener ("click", volumeBtnClick8);
    



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

var headerImageGallery = setInterval (gallery, 1800);
$headerGallery.addEventListener("click", gallery);

//-------------------------------------------------------------------------

/*menu*/
var $gnbMenu = document.getElementById("menu");
var $gnbMenuItem = $gnbMenu.querySelectorAll (".menus");

var _add = true;

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
                    //console.log("2")
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
                _posterAni = false;
                clearInterval(posterAniTime);
            }
        }
        var posterAniTime = setInterval(posterAni, 300);
    }
    ////////////////
    else if ($grandparents.classList.contains("open-poster") && !_posterAni)
    {
        $plotSummaryEl.classList.remove("open-poster");

        var $posterList =  $posterEl.querySelectorAll("li")
        for (var i = 0; i < $posterList.length; i++)
        {
            $posterList[i].classList.remove("poster-ani");
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
            $el.innerHTML = "가사"; 
        }
    }

    /*동영상*/

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
            var lineAniTimer = setInterval(addLineAni, 1300)
        }

    }
    $linesAniBtn[id].addEventListener("click", linesAni);
}

for (var i = 0; i < $linesAniBtn.length; i++)
{ 
    linesView(i);
}