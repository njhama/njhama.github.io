

const languageCodes = new Map([
  ["English", "en"],
  ["French", "fr"],
  ["Spanish", "es"],
  ["Italian", "it"],
  ["Chinese", "zh-CN"],
  ["Korean", "ko"],
  ["Japanese", "ja"],
  ["Russian", "ru"],
  ["Farsi", "fa"],
  ["German", "de"],
  ["Portuguese", "pt"],
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

if (window.location.href.includes("njhama.github.io"))  {
  languageSelect.value = "English"
}
else  {
  alert("Disclaimer: translations are automated and may not be completely accurate");
  console.log(window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0]);
  
  let languageCode = window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0];
  for (const [key, value] of languageCodes.entries()) {
    if (value === languageCode) {
      languageSelect.value = key;
      break;
    }
  }
  
}


//dont touch
languageSelect.addEventListener('change', function()  {
  
  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(this.value) == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp");
});

//window.location.href = window.location.host.includes("uscannenbergmedia.com") ? "https://uscannenbergmedia-com.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(this.value) == "en" ? "https://uscannenbergmedia.com" + window.location.pathname : "https://uscannenbergmedia-com.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp");