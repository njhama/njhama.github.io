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

  let curr = window.location.host;
  if (curr.includes("translate.goog"))  {window.location.host = "www.uscannenbergmedia.com" + window.location.pathname;}
  else  {window.location.host = "www-uscannenbergmedia-com.translate.goog" + window.location.pathname;} 
});



//on change
//get the lcaiton host 
//if it contans the translate.goog then
  //scrape teh pahtname from the url 
  //then go to uscannenbergmedia.com + path
//else
  //get the pathname of the window location
  //go to www-uscannenbergedia-com.translate.goog + path