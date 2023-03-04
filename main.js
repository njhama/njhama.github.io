

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

//iterate through the keys and create new li elements change the inner hhtl to hte key and then append the li to the ul


//old dorp don

const myList = document.querySelector('#dropdown-menu');


  languageCodes.forEach(function(value, key) {
    //old
    //const option = document.createElement('option');
    //option.value = key;
    //option.textContent = key;
    //languageSelect.appendChild(option);

    //new
    //create a new list
    //create a new A with the innerHTML of the key
    //add it to myLIst

    const newList = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.classList.add("dropdown-item");
    newLink.innerHTML = key;
    newList.appendChild(newLink);
    myList.appendChild(newList);
  });


if (window.location.href.includes("njhama.github.io"))  {
  document.querySelector('#translateButton').innerHTML = "English";
  //languageSelect.value = "English"
}
else  {
  
  console.log(window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0]);
  
  let languageCode = window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0];
  for (const [key, value] of languageCodes.entries()) {
    if (value === languageCode) {
      //languageSelect.value = key;
      document.querySelector('#translateButton').innerHTML = key;
      console.log("new language", key);
      //document.getElementById
      break;
    }
  }

  //alert("Disclaimer: translations are automated and may not be completely accurate");
  


  
 

myList.addEventListener('click', function(event) {
  console.log('click');
  if (event.target.tagName === 'A') {
    
    // Call your function here, passing the clicked element if needed
    myFunction(event.target);
    console.log("element clicked")
  }
});

function myFunction(clickedElement) {
  console.log('The following li element was clicked:', clickedElement.innerHTML);
  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(clickedElement.innerHTML) == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp");
  // Do something else with the clicked element
  console.log()
}
}


//dont touch
languageSelect.addEventListener('change', function()  {
  
  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(this.value) == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp");
});

//window.location.href = window.location.host.includes("uscannenbergmedia.com") ? "https://uscannenbergmedia-com.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(this.value) == "en" ? "https://uscannenbergmedia.com" + window.location.pathname : "https://uscannenbergmedia-com.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(this.value) + "&_x_tr_hl=en&_x_tr_pto=wapp");