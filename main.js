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
languageCodes.forEach(function (value, key) {
  const newList = document.createElement('li');
  const newLink = document.createElement('a');
  newLink.classList.add("dropdown-item");
  newLink.classList.add("notranslate");
  newLink.innerHTML = key;
  newList.appendChild(newLink);
  myList.appendChild(newList);
});

if (window.location.href.includes("lhr.life")) {
  document.querySelector('#translateButton').textContent = "English";
}
else {
  let languageCode = window.location.href.substring(window.location.href.indexOf("_x_tr_tl=") + 9).split("&")[0];
  for (const [key, value] of languageCodes.entries()) {
    console.log(languageCode)
    if (value === languageCode) {
      document.querySelector('#translateButton').textContent = key;
      // console.log("new language", key);
      break;
    }
  }
}

myList.addEventListener('click', function (event) {
  console.log('click');
  if (event.target.tagName === 'A') {
    myFunction(event.target);
    console.log("element clicked")
  }
});

function myFunction(clickedElement) {
  // console.log('The following li element was clicked:', clickedElement.innerHTML);

  //THIS CODE IS STILL BUGGY, NEEDS ORIGINAL URL IN THE == 'en' condition which is currently not available
  console.log(window.location.href);
  window.location.href =
    window.location.host.includes("lhr.life") ?
      'https://' + window.location.host.replace(/\./g, '-') + '.translate.goog' + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp"
      :
      (languageCodes.get(clickedElement.innerHTML) == "en" ? 'https:' : 'https://' + window.location.host.replace(/\./g, '-') + '.translate.goog' + window.location.pathname + "?_x_tr_sl=auto&_x_tr_tl=" + languageCodes.get(clickedElement.innerHTML) + "&_x_tr_hl=en&_x_tr_pto=wapp");
};

const myDropdown = document.querySelector('#myDropdown');
const shareBtn = document.querySelector('#share_btn');

async function copyPageUrl() {
  try {
    await navigator.clipboard.writeText(location.href);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


function getPageHeadlines() {
  try {
    var elem = document.createElement('textarea');

    let h = document.getElementsByClassName('headline')[0];
    while (h.querySelector('font')) {
      h.innerHTML = h.querySelector('font').innerHTML;
    }
    elem.innerHTML = h.innerHTML;
    h = encodeURIComponent(elem.value);
    console.log(h);
    let sh = document.getElementsByClassName('sub-headline')[0];
    while (sh.querySelector('font')) {
      sh.innerHTML = sh.querySelector('font').innerHTML;
    }
    elem.innerHTML = sh.innerHTML;
    sh = encodeURIComponent(elem.value);
    console.log(sh);
    return [h, sh];
  }
  catch (err) {
    console.error(err);
  }
}

function getEmailShare() {
  try {
    const [h, sh] = getPageHeadlines();
    let href = 'mailto:?subject=Check%20out%20this%20article%20from%20Annenberg%20Media&body=' + h + '%0A' + sh + '%0A%0A' + location.href;
    console.log(href);
    document.getElementById('dropdown-email').setAttribute('href', href);
  }
  catch (err) {
    console.error('Email sharing failed');
  }
}

function getLinkedInShare() {
  try {
    const [h, sh] = getPageHeadlines();
    let href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + location.href;
    console.log(href);
    document.getElementById('dropdown-linkedin').setAttribute('href', href);
  }
  catch (err) {
    console.error('Some headline missing');
  }
}

function getTwitterShare() {
  try {
    const [h, sh] = getPageHeadlines();
    let href = 'https://twitter.com/intent/tweet?url=' + location.href + '&via=AnnenbergMedia&text=' + h;
    console.log(href);
    document.getElementById('dropdown-twitter').setAttribute('href', href);
  }
  catch (err) {
    console.error('Some headline missing');
  }
}

function getFacebookShare() {
  try {
    const [h, sh] = getPageHeadlines();
    let href = 'https://www.facebook.com/sharer.php?u=' + location.href;
    console.log(href);
    document.getElementById('dropdown-facebook').setAttribute('href', href);
  }
  catch (err) {
    console.error('Some headline missing');
  }
}

const synth = window.speechSynthesis;
let listenButton = document.getElementById('listen');

function getArticleText() {
  const [h, sh] = getPageHeadlines();
  const article = document.querySelector('article');
  const paragraphs = article.querySelectorAll('p');
  let text = decodeURIComponent(h) + (h.endsWith('.') ? " " : ". ") + decodeURIComponent(sh) + (sh.endsWith('.') ? " " : ". ");

  paragraphs.forEach(paragraph => {
    //remove <font> tags if Google Translate is enabled
    while (paragraph.querySelector('font')) {
      paragraph.innerHTML = paragraph.querySelector('font').innerHTML;
    }
    text += paragraph.textContent + " ";
  });
  console.log(text);
  return text;
}

function stopPlaying() {
  synth.cancel();
  listenButton.innerHTML = "<i id='play_btn' class='bi bi-play-circle'></i> Listen to this article";
  listenButton.onclick = readAloudStuff;
}

function readAloudStuff() {
  const article_text = getArticleText();
  console.log("Final text = " + article_text);
  var utterThis = new SpeechSynthesisUtterance(article_text);

  utterThis.addEventListener('start', () => {
    if (synth.speaking) {
      console.log('Speaking');
      listenButton.innerHTML = " <i id='play_btn' class='bi bi-stop-circle' style='color:#990302'></i> Stop playing"
      listenButton.onclick = stopPlaying;
    }
  });

  utterThis.addEventListener('end', () => {
    if (!synth.speaking) {
      console.log('Speaking ended');
      listenButton.innerHTML = "<i id='play_btn' class='bi bi-play-circle'></i> Listen to this article";
      listenButton.onclick = readAloudStuff;
    }
  });

  utterThis.addEventListener('error', (event) => {
    console.error(`SpeechSynthesisUtterance error: ${event.error}`);
  });

  utterThis.rate = 0.9

  synth.speak(utterThis);
}