function readNotifications(){return new Promise(function(_0x257435,_0x276f13){$['post']('/notifications/read',{},async function(_0x2de980){});});}function getNotifications(){return new Promise(function(_0x2d28a5,_0x21b84e){$['getJSON']('/notifications/get',async function(_0x2048dc){return _0x2d28a5(_0x2048dc);});});}function getUnreadMessages(){return new Promise(function(_0x2aef94,_0x5ac905){$['getJSON']('/message/get-unseen',async function(_0x360913){return _0x2aef94(_0x360913);});});}const notificationEl=document['querySelector']('#nav-notifications');function populateNotifications(_0x4b3494){if(_0x4b3494['length']>0x0){const _0x4103da=_0x4b3494['filter'](_0x4be100=>_0x4be100['read']==![]);_0x4103da['length']>0x0?(document['querySelector']('#notification-dot')['style']['display']='block',document['querySelector']('#notification-icon')['className']+='\x20animated\x20swing'):readNotificationsReq=!![];notificationEl['innerHTML']='',notificationEl['style']['padding']='0';for(const _0x455838 of _0x4b3494){let _0xb7a8ce;if(_0x455838['icon']=='default'||_0x455838['icon']['length']==0x0)_0xb7a8ce='<i\x20class=\x22fad\x20fa-info-square\x20small\x20text-blue\x20size-14\x22></i>';else{if(_0x455838['icon']=='congrats')_0xb7a8ce='<img\x20height=\x2218\x22\x20src=\x22https://assets.tryhackme.com/img/icons/confetti.png\x22>';else _0x455838['icon']=='message'?_0xb7a8ce='<img\x20height=\x2218\x22\x20src=\x22https://assets.tryhackme.com/img/icons/message.png\x22>':_0xb7a8ce='<img\x20alt=\x22icon\x22\x20class=\x22avatar-tiny\x22\x20src=\x22'+_0x455838['icon']+'\x22>';}let _0x2977c3='<div\x20class=\x22row\x20notification\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-auto\x20text-center\x22>'+_0xb7a8ce+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col\x20p-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>'+_0x455838['description']+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27size-12\x20faded\x20mt-1\x27>'+prettifyShd(_0x455838['created'])+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';notificationEl['innerHTML']+=_0x2977c3;}}else notificationEl['innerHTML']='<div\x20class=\x22text-center\x20mt-2\x20mb-2\x22>You\x20have\x20no\x20notifications</div>';}async function initNotifications(){const _0x51162d=await getNotifications(),_0x37f49e=await getUnreadMessages();_0x37f49e['unseen']['length']>0x0&&_0x51162d['unshift']({'created':_0x37f49e['unseen'][0x0]['inserted'],'description':'You\x20have\x20'+_0x37f49e['unseen']['length']+'\x20<a\x20href=\x22/messages\x22>unread\x20conversation(s)</a>.','icon':'message','read':![]}),populateNotifications(_0x51162d);}let readNotificationsReq=![];document['querySelector']('#notification-btn')['addEventListener']('click',function(){$('#notification-dot')['fadeOut'](0x1f4),!readNotificationsReq&&(readNotifications(),readNotificationsReq=!![]);}),$(document)['ready'](async function(){setTimeout(function(){initNotifications();},0x1f4);});