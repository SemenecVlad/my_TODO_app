/**
*@name ToDo module
*@description Creating simple ToDo application. Some functions will be added later
*@author Vladislav Semenets <semenecvlad@mail.ru>
*/

"use strict";

/**@description Creating 'Close' button for all elements added in list*/

var elemList = document.getElementsByTagName("li");
for( var i = 0; i < elemList.length; i++ )
{
  var closeContainer = document.createElement("span");
  var closeSymbol = document.createTextNode("\u00D7");
  closeContainer.className = "close";
  closeContainer.appendChild(closeSymbol);
  elemList[i].appendChild(closeContainer);
}

/**@description Define OnClick handler on 'Close' that will delete element*/

var closeButton = document.getElementsByClassName("close");
for( var i = 0; i < closeButton.length; i++)
{
  closeButton[i].onclick = function()
  {
    var parent = this.parentElement;
    parent.style.display = "none";
  }
}

/**@description On click LI-element we add or delete checked-class */

var ulList = document.querySelector("ul");
ulList.addEventListener("click", function(ev)
  {
    if (ev.target.tagName === "LI")
    {
      ev.target.classList.toggle("checked");
    }
  }, false);

/**
*@function
*@name newTask
*@description Create New Task 
*/
  function newTask()
  {
    var li = document.createElement("li");
    var inputTaskValue = document.getElementById("myTaskInput").value;
	var datepickerValue = document.getElementById("datepicker").value;
    var text = document.createTextNode(inputTaskValue);
    li.appendChild(text);
	
    if ( inputTaskValue === "" || datepickerValue === "")
    {
      alert( "Please write some task!");
    }
    else
    {
      document.getElementById("myTaskList").appendChild(li);
    }

    document.getElementById("myTaskInput").value = "";
	
	// Creating Close button in the LI element
    var closeContainer = document.createElement("span");
    var closeSymbol = document.createTextNode("\u00D7");
		closeContainer.className = "close";
		closeContainer.appendChild(closeSymbol);
    li.appendChild(closeContainer);
	
	// Creating Deadline position in the LI element
	var deadline = document.createElement("span");
	var date = document.createTextNode(datepickerValue);
	deadline.appendChild(date);
	deadline.className = "date";
	li.appendChild(deadline);
	
    for (var i = 0; i < closeButton.length; i++)
    {
      closeButton[i].onclick = function()
      {
        var parent = this.parentElement;
        parent.style.display = "none";
      }
    }
  }
  
//Sending form data with Enter
  document.onkeyup = function (e) {
	    e = e || window.event;
	    if (e.keyCode === 13) {
	        newTask();
	    }
	    // Cancels the effect of the browser
	    return false;
	}
// Include JQuery UI Datepicker with the date formatting
  $( function() {
    $( "#datepicker" ).datepicker({dateFormat:'dd MM yy'});
} );
