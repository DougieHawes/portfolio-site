// import media
import bootstrapLogo from "../../media/bootstrap-logo2.svg";
import cssLogo from "../../media/css-logo2.svg";
import expressLogo from "../../media/express-logo2.svg";
import htmlLogo from "../../media/html-logo2.svg";
import jestLogo from "../../media/jest-logo2.svg";
import lessLogo from "../../media/less-logo2.svg";
import materializeLogo from "../../media/materialize-logo2.svg";
import mongoLogo from "../../media/mongo-logo2.svg";
import nodeLogo from "../../media/node-logo2.svg";
import phpLogo from "../../media/php-logo2.svg";
import pythonLogo from "../../media/python-logo2.svg";
import reactLogo from "../../media/react-logo2.svg";
import reactNativeLogo from "../../media/react-native-logo2.svg";
import reduxLogo from "../../media/redux-logo2.svg";
import sassLogo from "../../media/sass-logo2.svg";

export const capitalise = (w) => w[0].toUpperCase() + w.substring(1);

export const getBulletPoints = (s) => s.split(",");

export const getDate = (d) => {
  let day = d.substring(8, 10);
  let month = d.substring(5, 7);
  const year = d.substring(2, 4);

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Feburary";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      break;
  }

  switch (day) {
    case "01":
      day = "1st";
      break;
    case "02":
      day = "2nd";
      break;
    case "03":
      day = "3rd";
      break;
    case "21":
      day = day + "st";
      break;
    case "22":
      day = day + "nd";
      break;
    case "23":
      day = day + "rd";
      break;
    case "31":
      day = day + "st";
      break;
    default:
      day = day + "th";
  }

  return `${day} ${month} '${year}`;
};

export const getLogo = (l) => {
  switch (l) {
    case "bootstrap":
      return bootstrapLogo;
      break;
    case "css":
      return cssLogo;
      break;
    case "express":
      return expressLogo;
      break;
    case "html":
      return htmlLogo;
      break;
    case "jest":
      return jestLogo;
      break;
    case "less":
      return lessLogo;
      break;
    case "materialize":
      return materializeLogo;
      break;
    case "mongo":
      return mongoLogo;
      break;
    case "node":
      return nodeLogo;
      break;
    case "php":
      return phpLogo;
      break;
    case "python":
      return pythonLogo;
      break;
    case "redux":
      return reduxLogo;
      break;
    case "react":
      return reactLogo;
      break;
    case "react-native":
      return reactNativeLogo;
      break;
    case "sass":
      return sassLogo;
      break;
    default:
      break;
  }
};

export const getHeight = (n, w) => {
  return window.innerHeight - (window.innerWidth < 767 ? n : w);
};

export const isEmail = (e) => {
  let email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!e.match(email)) {
    return false;
  } else {
    return true;
  }
};

export const isPhoneNumber = (n) => {
  let numbers = /^[0-9]+$/;

  if (n.length < 10 || n.length > 11) {
    return false;
  } else if (!n.match(numbers)) {
    return false;
  } else {
    return true;
  }
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
