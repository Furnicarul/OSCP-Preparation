(function(){document.addEventListener('DOMContentLoaded',function(){var cookiesBar=document.getElementById('js-tar_cookiesBar');var acceptCookiesBtn=document.getElementById('js-tar_cookiesAccepted');var cookiesModal=document.getElementById('js-tarModal');var cookiesModalOpen=document.getElementById('js-tarOpenModal');var cookiesModalClose=document.getElementById('js-tarCloseModal');var cookiesContainer=document.getElementsByClassName('tar_cookies');function showBar(){cookiesBar.style.bottom='0px'}
function getCookie(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift();return!1}
function checkCookies(){if(getCookie('acceptcookies')!==!1){cookiesBar.style.bottom='-'+cookiesBar.offsetHeight+'px';return}
showBar();setTimeout(function(){checkCookies()},2000)}
function printListCookies(){for(var i=0;i<cookiesContainer.length;i++){var cookiesType=cookiesContainer[i];cookiesType.innerHTML=cookiesData[cookiesType.dataset.cookie].join(', ')}}
cookiesModalOpen.addEventListener('click',function(){cookiesModal.classList.add('open')});cookiesModalClose.addEventListener('click',function(){cookiesModal.classList.remove('open')});cookiesModal.addEventListener('click',function(event){var target=event.target;if(target.id===undefined)return;if(target.id==='js-tarModal'){cookiesModal.classList.remove('open')}});acceptCookiesBtn.addEventListener('click',function(){document.cookie='acceptcookies=true;max-age=31557600;domain=www.tarlogic.com;path=/';cookiesBar.style.bottom='-'+cookiesBar.offsetHeight+'px'})
printListCookies();checkCookies()})})()