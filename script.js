// run function

function run() {
  // get input variables
  let htmlC = document.getElementById("htmlCode").value;
  let cssC = document.getElementById("cssCode").value;
  let jsC = document.getElementById("jsCode").value;
  let display = document.getElementById("output");

  //   result display
  display.contentDocument.body.innerHtml =
    htmlC + " <style> " + cssC + "</style>";
  display.contentWindow.eval(jsC);
}

run();
