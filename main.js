const languageCodes = {
  "english": "en",
  "french": "fr",
  "spanish": "es",
  "italian": "it"
};

const languageSelect = document.getElementById('dropdown');

if (!languageSelect) {console.error('The language select element could not be found');} else {
  Object.keys(languageCodes).forEach(function(language) {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    languageSelect.appendChild(option);
  });
}

const languageNames = Object.keys(languageCodes).reduce((obj, key) => {
  obj[languageCodes[key]] = key;
  return obj;
}, {});

let extractedStr;
  if (window.location.host.includes("translate.goog")) {
    //str = window.location.href;
    extractedStr = window.location.href.substring(str.indexOf("?_x_tr_sl=auto&_x_tr_tl=") + 24, str.indexOf("&", str.indexOf("?_x_tr_sl=auto&_x_tr_tl=") + 24));
  }
  else  {
    extractedStr = "en";
  }
  console.log(extractedStr)
  languageSelect.value = languageCodes[extractedStr];



languageSelect.addEventListener('change', function()  {
  //get the name of the languae 
  //check teh domain

  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes[this.value] == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp") 

  
});

//languageSelect.addEventListener('change', function()  {window.location.href = window.location.host.includes("translate.goog") ? window.location.host = "https://uscannenbergmedia-com" + window.location.pathname : "https://uscannenbergmedia-com.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp";})

//check if this.value is equal to english
//if it is then return back to teh mnoral website
//otherisew check 

//right now problem is taht if it says google tehn it goes back to the normal url

//cases 
//if on gooogle page, tehn get teh languae code and set teh languaeg select so taht its the same 


//on cahnge
//if hosty is the normal annenberg one then send to google + translte + page
//else 
  //if the host contains google then lookget the current langueag , only go back to teh website if teh lnaguea code = en

/** 
if (window.location.host ==  "https://njhama.github.io")  {
  sendToGoogle();
}
else  {
  if (languageCodes[this.value])  {sendTonormal();}
  else {sendToGooglepage();}
}
*/
//(window.location.host === "https://njhama.github.io") ? sendToGoogle() : (languageCodes[this.value] ? sendTonormal() : sendToGooglepage());