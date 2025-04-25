import "./styles.css";
import restaurantImg from "./restaurant.jpg";

const mainContent = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

const createElementHelper = (element, textContent = null, classList = null) => {
  const newElement = document.createElement(element);
  if (textContent) {
    newElement.textContent = textContent;
  }
  if (classList) {
    newElement.classList = classList;
  }
  return newElement;
};

const createHoursSection = (day, time) => {
  const newElement = createElementHelper('div', null, 'day-hours-container');
  newElement.append(
    createElementHelper('p', day),
    createElementHelper('p', time)
  );
  return newElement;
}

const loadHomeHandler = () => {
  const img = document.createElement('img');
  img.src = restaurantImg;
  img.alt = 'A picture of a nice restaurant.';
  const hoursBox = createElementHelper('div', null, 'hours-outer-box');
  hoursBox.append(
    createHoursSection('Monday',    '10:00 AM–8:00 PM'),
    createHoursSection('Tuesday',   '10:00 AM–8:00 PM'),
    createHoursSection('Wednesday', '10:00 AM–8:00 PM'),
    createHoursSection('Thursday',  '10:00 AM–8:00 PM'),
    createHoursSection('Friday',    '10:00 AM–8:00 PM'),
    createHoursSection('Saturday',  '11:30 AM–6:30 PM'),
    createHoursSection('Sunday',    'Closed')
  );

  mainContent.replaceChildren();
  mainContent.append(
    createElementHelper('h1', 'John\'s Cool Restaurant'),
    createElementHelper('hr'),
    img,
    createElementHelper('hr'),
    createElementHelper('h2', 'Operation hours'),
    hoursBox,
    createElementHelper('hr'),
    createElementHelper('h2', 'Location'),
    createElementHelper('p', '123 Frenchy Drive, Niceville, Europa', 'location')
  );
}

document.addEventListener('DOMContentLoaded', loadHomeHandler);
homeBtn.addEventListener('click', loadHomeHandler);