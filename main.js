/** 
const languageCodes = {
  "english": "en",
  "french": "fr",
  "spanish": "es",
  "italian": "it"
};

const languageSelect = document.getElementById('dropdown');

if (!languageSelect) {console.error('The language select element could not be found');} 
else {
  Object.keys(languageCodes).forEach(function(language) {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    languageSelect.appendChild(option);
  });
};
*/


const languageCodes = new Map([
  ["english", "en"],
  ["french", "fr"],
  ["spanish", "es"],
  ["italian", "it"]
]);

const languageSelect = document.getElementById('dropdown');

if (!languageSelect) {
  console.error('The language select element could not be found');
} 
else {
  languageCodes.forEach(function(value, key) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key;
    languageSelect.appendChild(option);
  });
};
//look at teh url for the language to translte too
//if default page, then the laniage = english
if (window.location.href.includes("njhama.github.io"))  {
  languageSelect.value = "english"
}
else  {
  console.log(window.location.href.indexOf('?_x_tr_sl=auto&_x_tr_tl=') + 25, 2)
  
  languageSelect.value = languageCodes.get(window.location.href.indexOf('?_x_tr_sl=auto&_x_tr_tl=') + 25, 2);
  
}


//dont touch
languageSelect.addEventListener('change', function()  {
  
  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(this.value) == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp");
});

