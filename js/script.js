






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
    //각 리스트의 격차에 따른 속도 분배.
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
    console.log('초기화');
    galleryResize();
    for(var i = 0; i < $listItem.length; i++)
    {
        listClick(i);
    }
}
init();

