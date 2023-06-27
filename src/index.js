const formatPhone = require("./formatPhone");

const phoneInputElement = document.getElementById("phone");

const formatField = (event) => {
  let key = event.data;
  let inp = event.target.value;
  var curr_pos = phoneInputElement.selectionStart;

  if (inp.length === curr_pos) curr_pos += inp.length;

  if (!isNaN(key)) phoneInputElement.value = formatPhone(key, inp) || "";
  else phoneInputElement.value = inp.slice(0, inp.length - 1);
  phoneInputElement.selectionStart = curr_pos;
  phoneInputElement.selectionEnd = curr_pos;
};

phoneInputElement.oninput = formatField;
export default formatPhone;
