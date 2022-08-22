window.onload = () => {
  //showing the current date
  var dateElm = document.getElementById("date");
  var date = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dateElm.innerText = `${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;

  // toggling the nav bar
  var nav_toggler = document.getElementById("nav-toggler");
  var navList = document.getElementById("nav-list");

  nav_toggler.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // hide nav-toggler if is show when clicking on a link
  var nav_togglerLinks = document.querySelectorAll(".nav-list a");
  nav_togglerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("active"))
        navList.classList.remove("active");
    });
  });
  // displaying or hiding the hour rate
  var types = document.querySelectorAll(".type");
  var rate = document.getElementById("rate");

  types.forEach((t) => {
    t.addEventListener("change", (e) => {
      if (e.target.value === "hiring") {
        rate.classList.remove("rate");
      } else {
        rate.classList.add("rate");
      }
    });
  });

  //validating and submitting the form

  var form = document.getElementById("form");
  var hourlyRate = document.getElementById("hourly_rate");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!rate.classList.contains("rate")) {
      if (hourlyRate.value === "") {
        alert("Hourly rate is missing. Please enter all data and try again");
        return false;
      } else {
        e.target.submit();
      }
    } else {
      e.target.submit();
    }
  });
};
