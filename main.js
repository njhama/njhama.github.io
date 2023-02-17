const languageCodes = {
  "english": "en",
  "french": "fr",
  "spanish": "es",
  "italian": "it"
};

const languageSelect = document.getElementById('dropdown');

if (!languageSelect) {
  console.error('The language select element could not be found');
} else {
  Object.keys(languageCodes).forEach(function(language) {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    languageSelect.appendChild(option);
  });
}
var currLang = "english";
languageSelect.addEventListener('change', function() {
  const selectedLanguage = this.value;
  
  const languageCode = languageCodes[selectedLanguage];
  console.log(`Selected language: ${selectedLanguage} (${languageCode})`);
  url = window.location.href;
  console.log("url " + url)
  //get the dir
  let web_ending = ".io"
  const indexOfCom = url.indexOf(web_ending);
  console.log(indexOfCom)
  console.log(web_ending.length)
  let page = url.substring(0,indexOfCom + web_ending.length)
  page = page.replace(/\./g, "-") + ".translate.goog";
  const dir = url.substring(indexOfCom + web_ending.length);
 
  let newUrl =  "https://" + page + "?_x_tr_sl=auto" + "&_x_tr_tl=" + languageCode  + "&_x_tr_hl=en&_x_tr_pto=wapp";
  currLang = selectedLanguage;
  window.location.href = newUrl
  
});