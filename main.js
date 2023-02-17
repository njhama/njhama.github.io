const url = window.location.href; // get the URL of the current page
  const apiUrl = `https://translate.google.com/translate_a/single?client=webapp&sl=auto&tl=${language}&dt=t&q=${encodeURIComponent(url)}`;
  // make an AJAX request to the Google Translate API
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const responseText = xhr.responseText;
      const translatedHtml = responseText.substring(responseText.indexOf('",null,["') + 10);
      const decodedHtml = decodeURIComponent(JSON.parse(`["${translatedHtml}"]`)[0][0][0]);
      document.documentElement.innerHTML = decodedHtml;
    }
  };
  xhr.send();