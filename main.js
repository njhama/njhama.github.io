
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

const myDropdown = document.querySelector('#myDropdown');
const shareBtn = document.querySelector('#share_btn');
myDropdown.addEventListener('show.bs.dropdown', function () {
  shareBtn.style.filter = 'brightness(0) invert(1) sepia(100%) saturate(10000%) hue-rotate(295deg) brightness(1000%)';   
});
myDropdown.addEventListener('hide.bs.dropdown', function () {
  shareBtn.style.filter = 'invert(6%) sepia(100%) saturate(4607%) hue-rotate(342deg) brightness(94%) contrast(82%)';   
});

async function copyPageUrl() {
  try {
    await navigator.clipboard.writeText(location.href);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


function getPageHeadlines(){
  try{
    let h = document.getElementsByClassName('headline')[0].innerHTML;
    console.log(h);
    let sh = document.getElementsByClassName('sub-headline')[0].innerHTML;
    console.log(sh);
    return [h,sh];
  }
  catch(err){
    console.error('Some headline missing');
  }
}

function getEmailShare(){
  try{
    const [h,sh] = getPageHeadlines();
    let href = 'mailto:?subject=Check%20out%20this%20article%20from%20Annenberg%20Media&body='+h+'%0A'+sh+'%0A%0A'+location.href;
    console.log(href);
    document.getElementById('dropdown-email').setAttribute('href',href);
  }
  catch(err){
    console.error('Email sharing failed');
  }
}

function getLinkedInShare(){
  try{
    const [h,sh] = getPageHeadlines();
    let href = 'https://www.linkedin.com/sharing/share-offsite/?url='+'https://www.uscannenbergmedia.com/2023/03/21/defying-all-odds-saneel-sharma-shines-a-light-during-dark-times-for-the-queer-community/';
    console.log(href);
    document.getElementById('dropdown-linkedin').setAttribute('href',href);
  }
  catch(err){
    console.error('Some headline missing');
  }
}

function getTwitterShare(){
  try{
    const [h,sh] = getPageHeadlines();
    // let href = 'https://twitter.com/intent/tweet?url='+location.href+'&via=AnnenbergMedia&text='+h;
    let href = 'https://twitter.com/intent/tweet?url='+location.href+'&via=AnnenbergMedia&text='+h;
    console.log(href);
    document.getElementById('dropdown-twitter').setAttribute('href',href);
  }
  catch(err){
    console.error('Some headline missing');
  }
}

function getFacebookShare(){
  try{
    const [h,sh] = getPageHeadlines();
    let href = 'https://www.facebook.com/sharer.php?u='+location.href;
    console.log(href);
    document.getElementById('dropdown-facebook').setAttribute('href',href);
  }
  catch(err){
    console.error('Some headline missing');
  }
}





