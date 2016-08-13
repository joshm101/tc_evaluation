var textInput = document.getElementsByTagName('input');
var selectorInput = document.getElementsByTagName('select');
var textAreaInput = document.getElementsByTagName('textarea');

setEventListeners(textInput);
setEventListeners(selectorInput);
setEventListeners(textAreaInput);

// thanks to
// http://stackoverflow.com/questions/27751409
//       /how-to-set-inputfocus-style-programatically-using-javascript
// set event listeners to style the input fields
// appropriately after they're initially colored red
// following incorrect submission
function setEventListeners (inputArr) {
  for (var i = 0; i < inputArr.length; ++i) {
    inputArr[i].addEventListener ("focus", function () {
      this.style.backgroundColor = "#eefadb";
    });
    inputArr[i].addEventListener ("blur", function () {
      this.style.backgroundColor = 'white';
    });
  }
}

// helper function to detect state selection
// thanks to http://stackoverflow.com/a/22796001
document.getElementsByTagName('select')[0].onchange = function() {
  var index = this.selectedIndex;
  var inputText = this.children[index].innerHTML.trim();
  if (inputText === "California") { 
    var displayDynamic = document.getElementsByClassName("ca-dynamic-field")[0];
    displayDynamic.style.display = "inline-block";
    displayDynamic.style.marginBottom = "25px";
    displayDynamic.style.width = "100%";
  }
}


/*
Helper function to display congratulations
page
*/
function chatReached() {
  var inputForm = document.getElementsByClassName
                                     ('input-form')[0];
  inputForm.style.display = 'none';
  
  var topText = document.getElementsByClassName
                                      ('question')[0];
  topText.innerHTML = "<b>Congratulations!! You have reached " + 
                      "the chat agent.</b>";   
}

/*
Helper function to display empty input field
error for the passed in inputs via array
*/
function displayEmptyFieldError(inputElementArray) {
  var inputAlertIcons = document
                          .getElementsByClassName
                                      ("input-field-icon-alert");
  var inputReqMessages = document
                          .getElementsByClassName
                                      ("input-req-msg");
  for (var i = 0; i < inputElementArray.length; ++i) {
    
    // display error highlighting and icons
    // different element targeting could have made this
    // code a bit shorter. A little hacky
    if (inputElementArray[i].name === 'phone-number') {
      var phoneErr = document
                      .getElementsByClassName
                        ("number-empty")[0];
      phoneErr.style.display = "inline";
      var inputAlertIcon = document
                            .getElementsByClassName
                              ("number-err-alert")[0];
      inputAlertIcon.style.display = "inline";
    }
    if (inputElementArray[i].name === "state-sel") {
      var selectErr = document
                        .getElementsByClassName
                          ("select-empty")[0];
      selectErr.style.display = "inline";
      var inputAlertIcon = document
                            .getElementsByClassName
                              ("select-err-alert")[0];
      inputAlertIcon.style.display = "inline";
    }
    if (inputElementArray[i].name === "yes-no-sel") {
      var yesNoErr = document
                      .getElementsByClassName
                        ("select-dynamic-empty")[0];
      yesNoErr.style.display = "inline";
      yesNoErr.style.left = "81px";
      yesNoErr.style.position = "absolute";
      var inputAlertIcon = document
                            .getElementsByClassName
                              ("dynamic-select-err-alert")[0];
      inputAlertIcon.style.display = "inline";              
    }
    if (inputElementArray[i].name === "full-name") {
      var nameErr = document
                      .getElementsByClassName
                        ("name-empty")[0];
      nameErr.style.display = "inline";
      var inputAlertIcon = document
                            .getElementsByClassName
                              ("name-err-alert")[0];
      inputAlertIcon.style.display = "inline";
    }
    if (inputElementArray[i].name === "desc") {
      var descErr = document
                      .getElementsByClassName
                        ("desc-empty")[0];
      descErr.style.display = "inline";
      var inputAlertTextAreaIcon = document
                               .getElementsByClassName
                                    ("input-field-icon-alert-ta")[0];
      inputAlertTextAreaIcon.style.display = "inline";        
    }
    inputElementArray[i].style.backgroundColor = "#ffcbcc";
    inputElementArray[i].style.border = "1px solid"
    inputElementArray[i].style.borderColor = "#b87077";
  }
}

/*
Start chat button click handler function

If not all required fields were filled out 
correctly, call the appropriate helper function.

If all fields were filled out correctly,
display congratulations page via chatReached()
*/
function startChatHandler() {
  var nameField = document.getElementsByName('full-name')[0];
  var numberField = document.getElementsByName('phone-number')[0];
  var yesNoField = document.getElementsByName('yes-no-sel')[0];
  var selectField = document.getElementsByTagName('select')[0];
  var textAreaField = document.getElementsByTagName('textarea')[0];
  
  var anyEmptyField = false;
  var fieldArray = [];
  fieldArray.push(textAreaField);
  fieldArray.push(selectField);
  fieldArray.push(numberField);
  fieldArray.push(nameField);
  if (selectField.value === "CA") {
    fieldArray.push(yesNoField);
  }  
  
  var fieldEmptyArray = [];
  
  for (var i = 0; i < fieldArray.length; ++i) {
    if (fieldArray[i].value.length === 0) {
      fieldEmptyArray.push(fieldArray[i]);
      anyEmptyField = true;
    }
  }
  // thanks to http://stackoverflow.com/a/18376246
  var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if (anyEmptyField === false) {
    if (numberField.value.match(phoneno)) {
      chatReached(); 
    } else {
      var numberFormatError = document
                                .getElementsByClassName
                                    ("input-phone-msg")[0];
      numberFormatError.style.display = "inline-block";
    }
  } else {
      displayEmptyFieldError(fieldEmptyArray);
    }
       
}

/*
helper function to display the prechat survey
*/
function displayPreChatSurvey() {
  
  // updating classes according to the README
  var allContentWrapper = document
                            .getElementsByClassName
                                  ('all-content-wrapper')[0];
  
  allContentWrapper.style.height = '623px';
  
  var mainContentWrapper = document
                             .getElementsByClassName
                                   ('main-content-wrapper')[0];
  mainContentWrapper.style.height = '560px';
  

  
  var navLocationWrap = document.getElementsByClassName
                                    ('nav-location-wrap')[0];
  navLocationWrap.style.display = 'none';
  
  var topicsListWrap = document.getElementsByClassName
                                    ('topics-list')[0];
  topicsListWrap.style.display = 'none';
  
  var backBtnWrap = document.getElementsByClassName
                                    ('back-btn-wrap')[0];
  
  backBtnWrap.style.display = 'none';
  
  var inputForm = document.getElementsByClassName
                                     ('input-form')[0];
  inputForm.style.display = 'block';                     
}

/*
click function for each of the topic list
choices. This function will determine which
topic was clicked and call the appropriate 
function to update the view
*/
function topicClick(el) {
  // get text of selected item to compare
  var topicText = el.firstChild.nextSibling
                               .children[1]
                               .innerText;
  // a switch statement is a good idea
  // because we will want to update the view
  // based on which topic was selected.
  switch (topicText) {
    case "Billing and Payments":
      displayPreChatSurvey();
      return;
    
    default:
      return;
  }
}