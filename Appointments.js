

function date (numberAdded) {
    var date = new Date();
    date.setDate(date.getDate()+numberAdded);
    let returnValue = "";
    if (date.getDate() < 10)
    {
      returnValue ="0"+ (date.getDate());
    }
    else returnValue = date.getDate();
    return returnValue;
}

function month (numberAdded) {
    var date = new Date();
    date.setDate(date.getDate()+numberAdded);
    let returnValue = "";
    if (date.getMonth()+1 < 10)
    {
      returnValue ="0"+ (date.getMonth()+1);
    }
    return returnValue;
}

function year (numberAdded) {
    var date = new Date();
    date.setDate(date.getDate()+numberAdded);
    return date.getYear()+1900;
}

function selectedOptions (list, reason, location, date) { 
    let selected = [];
    for (let i = 0; i < list.length; i++)
      {
        if (list[i].reason == reason && list[i].location == location && list[i].date == date)
          {
            selected.push(list[i]);
          }
      }
    return selected;
}

function translateMonth (date) {

    let month = date.split('-');
    month = month[1];
    if (month == 01)
    {
      month = "Jan";
    }
    else if (month == 02)
    {
      month = "Feb";
    }
    else if (month == 03)
    {
      month = "Mar";
    }
    else if (month == 04)
    {
      month = "Apr";
    }
    else if (month == 05)
    {
      month = "May";
    }
    else if (month == 06)
    {
      month = "Jun";
    }
    else if (month == 07)
    {
      month = "Jul";
    }
    else if (month == 08)
    {
      month = "Aug";
    }
    else if (month == 09)
    {
      month = "Sept";
    }
    else if (month == 10)
    {
      month = "Oct";
    }
    else if (month == 11)
    {
      month = "Nov";
    }
    else if (month == 12)
    {
      month = "Dec";
    }

    return month;

}

function translateDate (date) {
    let dat = date.split('-');
    dat = dat[2];
    return dat;
}

function translateYear (date) {
    let year = date.split('-');
    year = year[0];
    return year;
}



let appointments = 

      [
        {
          "reason": "Vaccination",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "10:00 ~ 10:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "11:00 ~ 11:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "10:00 ~ 10:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "14:00 ~ 14:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "10:30 ~ 11:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:00 ~ 13:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:00 ~ 13:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Vaccination",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "10:30 ~ 11:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "11:00 ~ 11:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "12:30 ~ 13:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "10:00 ~ 10:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "10:30 ~ 11:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },
 
        {
          "reason": "Vaccination",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:30 ~ 14:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Vaccination",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },
 
        {
          "reason": "Vaccination",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:30 ~ 14:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "10:00 ~ 10:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "11:00 ~ 11:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "10:00 ~ 10:30",
          "location": "East Campus Garage",
        },
 
        {
          "reason": "Covid Testing",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "14:00 ~ 14:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "10:30 ~ 11:00",
          "location": "East Campus Garage",
        },
 
        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:00 ~ 13:30",
          "location": "East Campus Garage",
        },
 
        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:00 ~ 13:30",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:30 ~ 14:00",
          "location": "East Campus Garage",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "10:30 ~ 11:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "11:00 ~ 11:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(0) + "-" + month(0) + "-" + date(0),
          "time": "12:30 ~ 13:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "10:00 ~ 10:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(1) + "-" + month(1) + "-" + date(1),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "10:30 ~ 11:00",
          "location": "TCS Hall",
        },
 
        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(2) + "-" + month(2) + "-" + date(2),
          "time": "13:30 ~ 14:00",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:00 ~ 13:30",
          "location": "TCS Hall",
        },

        {
          "reason": "Covid Testing",
          "date": year(3) + "-" + month(3) + "-" + date(3),
          "time": "13:30 ~ 14:00",
          "location": "TCS Hall",
        }
      ]
    

