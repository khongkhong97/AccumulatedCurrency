function initialize(){startListeners(),translate(),analytics()}function startListeners(){["btcAddress","bchAddress","ethAddress","etcAddress","ltcAddress","zrxAddress","batAddress","usdcAddress"].forEach(function(e){document.getElementById(e).addEventListener("click",function(){copyAddressToClipboard(this.id)})})}function translate(){document.title=browser.i18n.getMessage("strDonations"),["strFollow1","strFollow2","strDonations","strDonationsTxt"].forEach(function(e){document.getElementById(e).innerHTML=browser.i18n.getMessage(e)})}function analytics(){let e=[];e.push(["_setAccount","UA-XXXXXXXXX-1"]),e.push(["_trackPageview"]),function(){let e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}function copyAddressToClipboard(e){let t=document.getElementById(e);if((" "+t.className+" ").indexOf(" success ")>-1)return;let s=t.innerHTML,n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o);try{document.execCommand("copy");document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),t.classList.add("success"),t.innerHTML=browser.i18n.getMessage("strCopied"),setTimeout(function(){t.classList.remove("success"),t.innerHTML=s},1e3)}catch(e){console.log("Unable to copy")}}window.browser=window.msBrowser||window.browser||window.chrome,initialize();