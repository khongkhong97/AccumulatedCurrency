function startListeners(){document.querySelector('select[name="currencyFrom"]').onchange=updateCurrencyFrom,document.querySelector('button[name="switchCurrency"]').onclick=switchCurrency,document.querySelector('select[name="currencyTo"]').onchange=updateCurrencyTo,document.querySelector('input[name="notifOptns"]').onclick=toggleNotif,document.querySelector('input[name="portfolioOptns"]').onclick=togglePortfolio,document.querySelector('input[name="badgePortfolioConversionOptns"]').onclick=toggleBadgePortfolioConversionOptns,document.querySelector('input[name="refreshDelay"]').onchange=updateRefreshDelay,document.querySelector('input[name="colorChange"]').onclick=toggleColorChange,document.querySelector('input[name="roundBadge"]').onclick=toggleRoundBadge,document.querySelector('input[name="badgeTextAnimate"]').onclick=toggleBadgeTextAnimate,document.querySelector('select[name="soundSample"]').onchange=updateSoundSample,document.getElementById("save").onclick=saveAndApply}function translate(){document.title=browser.i18n.getMessage("settingsBtn"),["strCurrencyFrom","strCurrencyTo","strNotifOptns","strPortfolio","strBadgePortfolioConversion","strRefreshDelay","strSeconds","strColorChange","strRoundBadge","strBadgeTextAnimate","strSound","save"].forEach(function(e){document.getElementById(e).innerHTML=browser.i18n.getMessage(e)})}function analytics(){let e=[];e.push(["_setAccount","UA-XXXXXXXXX-1"]),e.push(["_trackPageview"]),function(){let e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}()}function populateCurrencies(){let e='[{"id": "AED", "name": "AED - United Arab Emirates"}, {"id": "AUD", "name": "AUD - Australian Dollar"}, {"id": "BCH", "name": "BCH - Bitcoin Cash"}, {"id": "BTC", "name": "BTC - Bitcoin"}, {"id": "CAD", "name": "CAD - Canadian Dollar"}, {"id": "CHF", "name": "CHF - Swiss Franc"}, {"id": "CZK", "name": "CZK - Czech Koruna"}, {"id": "DKK", "name": "DKK - Danish Krone"}, {"id": "ETH", "name": "ETH - Ether"}, {"id": "EUR", "name": "EUR - Euro"}, {"id": "GBP", "name": "GBP - British Pound"}, {"id": "HKD", "name": "HKD - Hong Kong Dollar"}, {"id": "HUF", "name": "HUF - Hungarian Forint"}, {"id": "ILS", "name": "ILS - Israeli New Sheqel"}, {"id": "JPY", "name": "JPY - Japanese Yen"}, {"id": "LTC", "name": "LTC - Litecoin"}, {"id": "MAD", "name": "MAD - Morocco"}, {"id": "NOK", "name": "NOK - Norwegian Krona"}, {"id": "NZD", "name": "NZD - New Zealand Dollar"}, {"id": "PLN", "name": "PLN - Polish Zloty"}, {"id": "QAR", "name": "QAR - Qatari Riyal"}, {"id": "RON", "name": "RON - Romanian Leu"}, {"id": "SEK", "name": "SEK - Swedish Krona"}, {"id": "SGD", "name": "SGD - Singapore Dollar"}, {"id": "THB", "name": "THB - Thai Baht"}, {"id": "TRY", "name": "TRY - Turkish Lira"}, {"id": "USD", "name": "USD - US Dollar"}, {"id": "XRP", "name": "XRP - Ripple"}, {"id": "ZAR", "name": "ZAR - South African Rand"}]';e=JSON.parse(e);let o=document.querySelector('select[name="currencyFrom"]'),n=document.querySelector('select[name="currencyTo"]');for(let n=0;n<e.length;n++){let t=document.createElement("option");t.value=e[n].id,t.innerHTML=e[n].name,o.appendChild(t)}n.innerHTML=o.innerHTML,updateValues()}function updateCurrencyFrom(e){localStorage.currencyFrom=e.target.value}function switchCurrency(){let e=localStorage.currencyFrom;localStorage.currencyFrom=localStorage.currencyTo,localStorage.currencyTo=e,updateValues(),$("#currencyFrom").selectpicker("refresh"),$("#currencyTo").selectpicker("refresh")}function updateCurrencyTo(e){localStorage.currencyTo=e.target.value}function toggleNotif(e){localStorage.notifications=!0===e.target.checked?1:0}function togglePortfolio(e){localStorage.portfolio=!0===e.target.checked?1:0}function toggleBadgePortfolioConversionOptns(e){localStorage.badgePortfolioConversion=!0===e.target.checked?1:0}function updateRefreshDelay(e){let o=e.target.value<1?1:e.target.value;localStorage.refreshDelay=1e3*o}function toggleColorChange(e){localStorage.colorChange=!0===e.target.checked?1:0}function toggleRoundBadge(e){localStorage.roundBadge=!0===e.target.checked?1:0,browser.extension.sendMessage({msg:"resetTicker"})}function toggleBadgeTextAnimate(e){localStorage.badgeTextAnimate=!0===e.target.checked?1:0}function hideUselessFields(){document.querySelector('div[id="soundOptn"]').style.visibility="hidden"}function updateValues(){document.querySelector('select[name="currencyFrom"]').value=localStorage.currencyFrom,document.querySelector('select[name="currencyTo"]').value=localStorage.currencyTo,document.querySelector('input[name="notifOptns"]').checked="1"===localStorage.notifications,document.querySelector('input[name="portfolioOptns"]').checked="1"===localStorage.portfolio,document.querySelector('input[name="badgePortfolioConversionOptns"]').checked="1"===localStorage.badgePortfolioConversion,document.querySelector('input[name="refreshDelay"]').value=localStorage.refreshDelay/1e3,document.querySelector('input[name="colorChange"]').checked="1"===localStorage.colorChange,document.querySelector('input[name="roundBadge"]').checked="1"===localStorage.roundBadge,document.querySelector('input[name="badgeTextAnimate"]').checked="1"===localStorage.badgeTextAnimate,document.querySelector('select[name="soundSample"]').value=localStorage.soundSample}function updateSoundSample(e){if(localStorage.soundSample=e.target.value,"mute"===e.target.value)localStorage.soundNotification=0;else{localStorage.soundNotification=1,new Audio("sounds/"+e.target.value+".mp3").play()}}function getJSON(e,o){let n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){if(n.status>=200&&n.status<400){let e=JSON.parse(n.responseText);o(e,n)}},n.onerror=function(){},n.send()}function saveAndApply(){browser.extension.sendMessage({msg:"resetTicker"})}document.addEventListener("DOMContentLoaded",function(){/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);let e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,o="undefined"!=typeof InstallTrigger,n=!!document.documentMode,t=!n&&!!window.StyleMedia;startListeners(),translate(),analytics(),populateCurrencies(),(e||o||n||t)&&hideUselessFields()}),window.browser=window.msBrowser||window.browser||window.chrome;