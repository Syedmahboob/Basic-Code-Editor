// run function

function run() {
  // get input variables
  let htmlCode = document.getElementById("htmlCode").value;
  let cssCode = document.getElementById("cssCode").value;
  let jsCode = document.getElementById("jsCode").value;
  let output = document.getElementById("output");

  //   result display
  output.contentDocument.body.innerHtml =
    htmlCode + " <style> " + cssCode + "</style>";
  output.contentWindow.eval(jsCode);
}

run();
