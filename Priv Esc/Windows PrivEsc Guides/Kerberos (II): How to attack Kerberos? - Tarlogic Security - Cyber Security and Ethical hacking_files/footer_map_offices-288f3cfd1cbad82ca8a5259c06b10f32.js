document.addEventListener("DOMContentLoaded",function(){if(!("Promise"in window)){loadScriptsPolyfills("https://cdn.jsdelivr.net/bluebird/latest/bluebird.core.min.js",function(){loadScriptsPolyfills("https://www.tarlogic.com/wp-content/themes/Avada-Child-Theme/assets/js/load_resources.js",function(){loadNeededResources()})})}else{loadScriptsPolyfills("https://www.tarlogic.com/wp-content/themes/Avada-Child-Theme/assets/js/load_resources.js",loadNeededResources)}
function loadNeededResources(){if(!("IntersectionObserver"in window)){load.js("https://cdn.jsdelivr.net/npm/intersection-observer-polyfill@0.1.0/dist/IntersectionObserver.js").then(function(){mapWillLoad()})}else{mapWillLoad()}}
function mapWillLoad(){var observer=new IntersectionObserver(loadMap);var target=document.querySelector("#footer_map_offices");observer.observe(target)}
function loadMap(observerData){if(observerData[0].isIntersecting===!1)return;Promise.all([load.css("https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"),load.js("https://unpkg.com/leaflet@1.3.4/dist/leaflet.js")]).then(function(){Promise.resolve(load.js("https://cdnjs.cloudflare.com/ajax/libs/leaflet-providers/1.5.0/leaflet-providers.min.js")).then(function(){var lang=global_vars.lang;var strTranslates={contact:{en:"Contact",es:"Contacto"},contactPageUri:{en:"en/contact/",es:"contacto/"},moreInfo:{en:"More info",es:"Más información"},contactMail:{en:"contact@tarlogic.com",es:"contacto@tarlogic.com"}};var map=L.map("footer_map_offices").setView([40.5,-4.5],5);map.scrollWheelZoom.disable();var LeafIcon=L.Icon.extend({options:{iconSize:[55,62],iconAnchor:[22,62],popupAnchor:[2.5,-76]}});var tarlogic=new LeafIcon({iconUrl:"/wp-content/themes/Avada-Child-Theme/images/imagen_icono_logo_mapa-1.png"});var markerMadrid=L.marker([40.499445,-3.666991],{icon:tarlogic}).addTo(map).bindPopup("<strong>"+strTranslates.contact[lang]+"</strong><br><br>MADRID<br>  Calle Quintanapalla 8<br>Las Tablas, Madrid<br><span>(0034) 912 919 319</span><br<span>"+strTranslates.contactMail[lang]+'</span><br><br><a href="/'+strTranslates.contactPageUri[lang]+'">'+strTranslates.moreInfo[lang]+"</a><br>");var markerSantiago=L.marker([42.843121,-8.543271],{icon:tarlogic}).addTo(map).bindPopup("<strong>"+strTranslates.contact[lang]+"</strong><br><br>SANTIAGO DE COMPOSTELA<br>Travesía de Montouto 1<br>15894, Teo, A Coruña<br><span>(0034) 912 919 319</span><br><span>"+strTranslates.contactMail[lang]+' </span><br><br><a href="/'+strTranslates.contactPageUri[lang]+'">'+strTranslates.moreInfo[lang]+"</a><br>");var CartoDB_Voyager=L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19});CartoDB_Voyager.addTo(map);observer.unobserve(document.querySelector("#footer_map_offices"))}).catch(function(){})}).catch(function(){})}})