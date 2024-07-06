function menusidebarHide()
{
	$('#menusidebar_block').css('left', '');
}
function menusidebarShow()
{
	$('#menusidebar_block').css('left', '0px');
}
$(document).ready(function(){

$('#cloud_left').find('a').each(function(){
  if (document.location.href.search(this.href) >= 0) {
    $(this).addClass('active'); 
  }
});
$('#menusidebar_container').find('a').each(function(){
  if (document.location.href.search(this.href) >= 0) {
    $(this).addClass('active'); 
  }
});


});

var showAvatarMenu=function(){
  $('#myAvatar').dropdown('open');
}

$(document).mouseover(function(e){
  if($('#myAvatar').has(e.target).length==0 && $('#avatarMenu').has(e.target).length==0)
    $('#myAvatar').dropdown('close');
});