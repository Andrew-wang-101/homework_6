window.onload = function() {
    getTimeslot();
    countScheduled() 
  }

function getLocation() { 
    var select = document.getElementById('location');
    var value = select.options[select.selectedIndex].value;
    return value;
}

function getDateNum()
  { 
    var select = document.getElementById('date');
    var value = select.value;
    return value;
  }

function getReason() { 
    var select = document.getElementById('reason');
    var value = select.value;
    return value;
}

 function getTime() { 
    var select = document.getElementById('timeslot');
    var value = select.value;
    return value;
}

function detailInfo(object) {
  document.getElementById("modal-date").innerHTML = "<b>Date:</b>" +  translateMonth(getDateNum()) + " " + translateDate(getDateNum()) + ", " + translateYear(getDateNum());
  document.getElementById("modal-reason").innerHTML = "<b>Reason:</b>" + object.reason;
  document.getElementById("modal-location").innerHTML = "<b>" + "Location:" + "</b>" + object.location;
  document.getElementById("modal-timeslot").innerHTML = "<b>" + "Location:" + "</b>" + object.time;

  let buttons = document.getElementById("modal-buttons")
  let backButton = document.createElement('a');
  backButton.href="#";
  backButton.className = "buttonClose"
  backButton.appendChild(document.createTextNode("Cancel"));
  backButton.onclick = function() { closeModal(); }
  buttons.appendChild(backButton);

  cButton = document.createElement('a');
  cButton.href="home.html";
  cButton.className = "buttonConfirm";
  cButton.appendChild(document.createTextNode("Confirm"));
  cButton.onclick = function() { confirmSchedule(object); }
  buttons.appendChild(cButton);
  document.getElementById("Schedule_modal").style.display = "block";

}
function getTimeslot() {
    let timeslot = document.getElementById("availableTimeslot");

    timeslot.textContent = "Please Select a Date.";

    if (getDateNum() == '') {return;}

    timeslot.textContent = "";
    

    let date = document.createElement("div");
    date.className = "bigDate"; 
    date.textContent = translateMonth(getDateNum()) + " " + translateDate(getDateNum()) + ", " + translateYear(getDateNum());
    timeslot.appendChild(date);


    let selectedList = selectedOptions (appointments, getReason(), getLocation(), getDateNum());
    if (selectedList.length > 0)
      { 

        for (let i = 0; i < selectedList.length; i++)
        { let buttonDiv = document.createElement ("div")
          buttonDiv.className = "buttonGap";
          let button = document.createElement("a");
          button.href="#";
          button.className = "button";
          button.appendChild(document.createTextNode(selectedList[i].time));
          button.onclick = function() {
            detailInfo(selectedList[i]); 
          }
          buttonDiv.appendChild(button);
        timeslot.appendChild(buttonDiv);
        }
      }
    else {
      let note2= document.createElement("div");
    note2.className = "notAvailable";
    note2.textContent = "No Appointments Available.";
    timeslot.appendChild(note2);
    }
}

function confirmSchedule(object)
  { 
    if (localStorage.getItem("key") == null)
    {
      localStorage.setItem("key", '[]');
    }

    let old_data = JSON.parse(localStorage.getItem("key"));
    old_data.push(object);
    localStorage.setItem("key", JSON.stringify(old_data));
    countScheduled();

}

function countScheduled() {
  let counter = document.getElementById("counter");
  let count = JSON.parse(localStorage.getItem("key"));
  count = count.length;
  counter.innerHTML = count;
}


function closeModal ()
  {
    document.getElementById("Schedule_modal").style.display = "none";
    let buttons = document.getElementById("modal-buttons");
    buttons.innerHTML="";
}
