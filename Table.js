window.onload = function() {
    loadingTable();
    countScheduled() 
  }

function loadingTable ()
{
  let count = JSON.parse(localStorage.getItem("key"));
  let tableBody = document.getElementById("tableData")
  let tableHTML = "";
  for (let i = 0; i < count.length; i++)
  {
    tableHTML += "<tr><td>" + count[i].date + "</td><td>" + count[i].time + "</td><td>" + count[i].location + "</td><td>" + 
    count[i].reason + "</td><td>" + "<a onclick='viewInfo("+ i + ")'> View </a>" + "</td></tr>";
    console.log(tableHTML);
  }
  tableBody.innerHTML = tableHTML;

}

function countScheduled() {
  let counter = document.getElementById("counter");
  let count = JSON.parse(localStorage.getItem("key"));
  count = count.length;
  counter.innerHTML = count;
}

function viewInfo(number) {
  let object = JSON.parse(localStorage.getItem("key"))[number];
  document.getElementById("modal-date").innerHTML = "<b>Date:</b>" + object.date; 
  document.getElementById("modal-reason").innerHTML = "<b>Reason:</b>" + object.reason;
  document.getElementById("modal-location").innerHTML = "<b>" + "Location:" + "</b>" + object.location;
  document.getElementById("modal-timeslot").innerHTML = "<b>" + "Location:" + "</b>" + object.time;

  let buttons = document.getElementById("modal-buttons")
  let backButton = document.createElement('a');
  backButton.href="#";
  backButton.className = "buttonClose"
  backButton.appendChild(document.createTextNode("Back"));
  backButton.onclick = function() { closeModal(); }
  buttons.appendChild(backButton);

  cButton = document.createElement('a');
  cButton.href="home.html";
  cButton.className = "buttonConfirm";
  cButton.appendChild(document.createTextNode("Cancel Appointment"));
  cButton.onclick = function() { cancelAppointment(number); }
  buttons.appendChild(cButton);
  document.getElementById("Schedule_modal").style.display = "block";
}

function closeModal ()
  {
    document.getElementById("Schedule_modal").style.display = "none";
    let buttons = document.getElementById("modal-buttons");
    buttons.innerHTML="";
}

function cancelAppointment(number)
{
    let old_data = JSON.parse(localStorage.getItem("key"));
    old_data.splice(number, 1);
    localStorage.setItem("key", JSON.stringify(old_data));
    countScheduled();

}
