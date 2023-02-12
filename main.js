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


    //get value of textbox
    const url = document.getElementById("url").value;
    console.log(url)


    //get the dir
    const indexOfCom = url.indexOf('.com');
    let page = url.substring(0,indexOfCom + 4)
    page = page.replace(/\./g, "-") + ".translate.goog";
    const dir = url.substring(indexOfCom + 4);
    console.log(page);
    console.log(dir);

    let newUrl = page + dir + "?_x_tr_sl=" + languageCodes[currLang] + "&_x_tr_tl=" + languageCode  + "&_x_tr_hl=en&_x_tr_pto=wapp"
    currLang = selectedLanguage;
    window.open(newUrl, "_blank" )
  });