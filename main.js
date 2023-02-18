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
languageSelect.addEventListener('change', function()  {window.location.href = window.location.host.includes("translate.goog") ? window.location.host = "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp";})

//languageSelect.addEventListener('change', function()  {window.location.href = window.location.host.includes("translate.goog") ? window.location.host = "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes[this.value] + "&_x_tr_hl=en&_x_tr_pto=wapp";});

//https://www-njhama-github-io.translate.goog/subpage.html?_x_tr_sl=auto&_x_tr_tl=it&_x_tr_hl=en&_x_tr_pto=wapp
//https://njhama-github-io.translate.goog/subpage.html?_x_tr_sl=auto&_x_tr_tl=it&_x_tr_hl=en&_x_tr_pto=wapp