
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

const myList = document.querySelector('#dropdown-menu');
languageCodes.forEach(function(value, key) {
  const newList = document.createElement('li');
  const newLink = document.createElement('a');
  newLink.classList.add("dropdown-item");
  newLink.classList.add("notranslate");
  newLink.innerHTML = key;
  newList.appendChild(newLink);
  myList.appendChild(newList);
});

if (window.location.href.includes("njhama.github.io"))  {
  //console.log("nicky was here")
  document.querySelector('#translateButton').textContent = "English";
}
else  {
  console.log(window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0]);
  let languageCode = window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0];
  for (const [key, value] of languageCodes.entries()) {
    console.log(languageCode)
    if (value === languageCode) {
      document.querySelector('#translateButton').textContent = key;
      console.log("new language", key);
      break;
    }
  }
}
  
myList.addEventListener('click', function(event) {
  console.log('click');
  if (event.target.tagName === 'A') {
    myFunction(event.target);
    console.log("element clicked")
  }
});

function myFunction(clickedElement) {
  console.log('The following li element was clicked:', clickedElement.innerHTML);
  window.location.href = window.location.host.includes("njhama.github.io") ? "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp" : (languageCodes.get(clickedElement.innerHTML) == "en" ? "https://njhama.github.io" + window.location.pathname : "https://njhama-github-io.translate.goog" + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp");
}



