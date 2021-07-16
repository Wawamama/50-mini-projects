/* var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); */

const projects = ['Expanding Cards', 'Progress Steps', 'Rotating Navigation', 
'Hidden Search', 'Blurry Loading', 'Scroll Animation', 
'Split Landing Page', 'Form with wave effect', 'Sound Board', 
'Dad Jokes', 'Event Keycodes', 'FAQ Collapse', 'Random Choice Picker',
'Animated Navigation', 'Increment Counter', 'Drink Water', 'Movie App',
'Background Slider', 'Clock + Dark Mode', 'Button Ripple Effect', 
'Drag and Drop', 'Drawing App', 'Kinetic Loader', 'Content Placeholder',
'Sticky Nav Bar', 'Vertical Slider', 'Toast Notifications',
'GitHub Profiles', 'Double Heart Click', 'Auto Text Effect',
'Password Generator', 'Changing Checkboxes', 'Notes App',
'Animated Countdown', 'Image Carousel', 'Hoverboard', 'Pokedex',
'Mobile Tab Navigation', 'Password Strength Background', '3D Background Boxes',
'Verify Account UI', 'Live User Filter', 'Feedback UI Design',
'Custom Range Slider', 'Netflix Style Navigation', 'Poker Quiz App',
'Testimonial Box', 'Random Image Feed', 'To Do List', 'Catch The Insect Game'] 

const upBtn = document.querySelector('#up')
const downBtn = document.querySelector('#down')
const slider = document.querySelector('.slider-list')
const sliderContainer = document.querySelector('.slider-container')
const dayContainer = document.querySelector('.day-container')
let activeSlide = 0
let firstDay = 5

projects.forEach ((project, idx) => {
  let day = firstDay + idx
  let month = ''
  // day < 31 ? month = 'May' : month = 'June' 
  if (day <31) {
    month = 'May'
  } else {
    month = 'June'
    day = idx - 25
  }
  const slide = document.createElement('div')
  slide.classList.add('slide')
  slide.innerHTML = `
  <button class="slide_btn"><a href='http://www.neverwithoutchocolate.com/5050/Project_${padZeros(idx+1, 2)}' target='_blank'>View Solution</a></button>
  <figure class="slide_bg" style="background-image: url('img/${padZeros(idx+1, 2)}.png');"></figure>
  <div class="slide_info">
      <h4>Title</h4>
      <small>${project}</small>
      <h4>Date</h4>
      <small>${month} ${padZeros(day, 2)}, 2021</small>
  </div>

  `
  sliderContainer.appendChild(slide)
  console.log(padZeros(idx, 2))
})


upBtn.addEventListener('click', () => {
  activeSlide++
  changeSlide()
  changeDay(activeSlide+1)
})
downBtn.addEventListener('click', () => {
  activeSlide--
  changeSlide()
  changeDay(activeSlide+1)

})

// functions
function padZeros(num, size) {
  let displayed = num+"";
  while (displayed.length < size) displayed = "0" + displayed;
  return displayed;
}

function changeSlide() {
  if (activeSlide > projects.length-1) {
      activeSlide = 0
  } else if(activeSlide <0) {
      activeSlide = projects.length-1
  }
  sliderContainer.style.transform = `translateY(-${activeSlide}00%)`
}

function changeDay(day) {
  dayContainer.innerHTML = `
  <h4>Day</h4>
  <h2 class='day'>${padZeros(day, 2)}</h2>`
}