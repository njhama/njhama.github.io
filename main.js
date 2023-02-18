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

languageSelect.addEventListener('change', function() {
  let newUrl;
  if (window.location.host.includes("translate.goog"))  {newUrl= window.location.host = "www.njhama.github.io" + window.location.pathname;}
  else  {newUrl = "https://njhama-github-io.translate.goog"+window.location.pathname+"?_x_tr_sl=auto&_x_tr_tl="+languageCodes[this.value]+"&_x_tr_hl=en&_x_tr_pto=wapp";} 
  window.location.href = newUrl;
});


//languageSelect.addEventListener('change', function()  {window.location.href = window.location.host.includes("translate.goog") ? window.location.host = "www.njhama.github.io" + window.location.pathname : "http://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp";});

//https://www-njhama-github-io.translate.goog/subpage.html?_x_tr_sl=auto&_x_tr_tl=it&_x_tr_hl=en&_x_tr_pto=wapp
//https://njhama-github-io.translate.goog/subpage.html?_x_tr_sl=auto&_x_tr_tl=it&_x_tr_hl=en&_x_tr_pto=wapp