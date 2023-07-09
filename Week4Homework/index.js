/* eslint-disable prettier/prettier */

// HTML Element Creation
const adobo = document.createElement('ul');
const arroz = document.createElement('ul');


const adoboOne = document.createElement('li');
const adoboTwo = document.createElement('li');
const adoboThree = document.createElement('li');
const adoboFour = document.createElement('li');
const adoboFive = document.createElement('li');
const adoboSix = document.createElement('li');
const adoboSeven = document.createElement('li');
const adoboEight = document.createElement('li');
const adoboNine = document.createElement('li');


const arrozOne = document.createElement('li');
const arrozTwo = document.createElement('li');
const arrozThree = document.createElement('li');
const arrozFour = document.createElement('li');
const arrozFive = document.createElement('li');
const arrozSix = document.createElement('li');
const arrozSeven = document.createElement('li');
const arrozEight = document.createElement('li');
const arrozNine = document.createElement('li');
const arrozTen = document.createElement('li');
const arrozEleven = document.createElement('li');
const arrozTwelve = document.createElement('li');
const arrozThirteen = document.createElement('li');


const h1 = document.createElement('h1');


const div = document.createElement('div');
const divTwo = document.createElement('div');


const h3 = document.createElement('h3');
const h3Two = document.createElement('h3');

const h3Div = document.createElement('div');
h3Div.classList.add('div-list-child')
const h3TwoDiv = document.createElement('div');
h3TwoDiv.classList.add('div-list-child')


const adoboP = document.createElement('p');
const arrozP = document.createElement('p');


const adoboOl = document.createElement('ol');
const adoboOneOl = document.createElement('li');
const adoboTwoOl = document.createElement('li');
const adoboThreeOl = document.createElement('li');
const adoboFourOl = document.createElement('li');
const adoboFiveOl = document.createElement('li');
const adoboSixOl = document.createElement('li');
const adoboSevenOl = document.createElement('li');


const arrozOl = document.createElement('ol');
const arrozOneOl = document.createElement('li');
const arrozTwoOl = document.createElement('li');
const arrozThreeOl = document.createElement('li');
const arrozFourOl = document.createElement('li');
const arrozFiveOl = document.createElement('li');
const arrozSixOl = document.createElement('li');
const arrozSevenOl = document.createElement('li');
const arrozEightOl = document.createElement('li');
const arrozNineOl = document.createElement('li');
const arrozTenOl = document.createElement('li');
const arrozElevenOl = document.createElement('li');
const arrozTwelveOl = document.createElement('li');


const adoboImg = document.createElement('img');
const arrozImg = document.createElement('img');


const adoboAnchor = document.createElement('a');
const arrozAnchor = document.createElement('a');


const footerDiv = document.createElement('div');


// HTML Structure Variables
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


// HTML Content
h1.setAttribute('id', 'heading-header');
h1.textContent = "My Favorite Recipes";


div.classList.add('div-list')
divTwo.classList.add('div-list')


h3.classList.add('list-heading');
h3.textContent = "Chicken Adobo"
h3Two.classList.add('list-heading');
h3Two.textContent = "Arroz con Pollo"


adobo.classList.add('recipe-list');
arroz.classList.add('recipe-list');


adoboOne.textContent = "6 pc. Chicken Thighs (Bone-in or boneless)";
adoboTwo.textContent = "1 whole onion (sliced)";
adoboThree.textContent = "8 cloves of garlic (minced)";
adoboFour.textContent = "6 tbsp soy sauce";
adoboFive.textContent = "1/4 cup of vinegar";
adoboSix.textContent = "2 tbsp brown sugar";
adoboSeven.textContent = "1 tbsp whole black peppercorns and ground black pepper";
adoboEight.textContent = "1/4 cup of chicken stock";
adoboNine.textContent = "3 bay leaves";

adoboOneOl.textContent = "Saute onions and garlic";
adoboTwoOl.textContent = "Add chicken and sear both sides";
adoboThreeOl.textContent = "Add soy sauce, vinegar, brown sugar, chicken stock, ground black pepper, peppercorns and bay leaves";
adoboFourOl.textContent = "Cook on medium-low for 10-15 mins";
adoboFiveOl.textContent = "Increase heat to medium-high and baste chicken for 8 minutes";
adoboSixOl.textContent = "Serve over steamed white rice";
adoboSevenOl.textContent = "Enjoy!";


arrozOne.textContent = "2 lbs Chicken Thighs & Legs (assorted)";
arrozTwo.textContent = "1 onion diced";
arrozThree.textContent = "1 green & red bell pepper diced";
arrozFour.textContent = "1 tbsp minced garlic";
arrozFive.textContent = "1 8oz can of tomato sauce";
arrozSix.textContent = "4 cups of chicken broth";
arrozSeven.textContent = "1/4 tsp tumeric";
arrozEight.textContent = "1 packet of Sazon";
arrozNine.textContent = "1-2 bay leaves";
arrozTen.textContent = "1 1/2 tsp cumin";
arrozEleven.textContent = "1 cup of beer (optional)";
arrozTwelve.textContent = "3 cups washed rice";
arrozThirteen.textContent = "1 small bag of frozen peas";

arrozOneOl.textContent = "Season both sides of chicken with salt and pepper";
arrozTwoOl.textContent = "Add oil in a pot and sear chicken on both sides";
arrozThreeOl.textContent = "After chicken is seared, remove from pot";
arrozFourOl.textContent = "Add in onions and bell peppers - saute";
arrozFiveOl.textContent = "After onions are translucent and bell peppers are softened, add garlic and saute";
arrozSixOl.textContent = "Once garlic is fragrant, add tomato sauce - cook for 1 minute";
arrozSevenOl.textContent = "Add chicken stock and seared chicken back to the pot";
arrozEightOl.textContent = "Season with salt, pepper, tumeric, Sazon, cumin, and bay leaves (add beer if preferred)";
arrozNineOl.textContent = "Cover and cook for 20 mins";
arrozTenOl.textContent = "Add rice and cook for 20 additional minutes";
arrozElevenOl.textContent = "Remove from heat, add in peas, and let sit for 10 mins";
arrozTwelveOl.textContent = "Enjoy!";


adoboP.textContent = "Instructions:";
arrozP.textContent = "Instructions:";


adoboImg.src = "https://www.beyondkimchee.com/wp-content/uploads/2023/05/Filipino-Chicken-Adobo-Thumbnail-500x375.jpg"
arrozImg.src = "https://asassyspoon.com/wp-content/uploads/cuban-arroz-con-pollo-recipe-2-500x500.jpg"


adoboAnchor.textContent = "Link to video recipe"
arrozAnchor.textContent = "Link to video recipe"


adoboAnchor.href = "https://www.tiktok.com/@tiffycooks/video/6883547402523921665?_t=8dpKfx547b9&_r=1"
arrozAnchor.href = "https://www.youtube.com/watch?v=9obcuGAPr0Y"


footerDiv.classList.add("footer-text");
footerDiv.textContent = "Made by Jonathan Almoradie | jonathan.almoradie@gmail.com"


// HTML Population
header.appendChild(h1);


main.appendChild(div);
main.appendChild(divTwo);
div.appendChild(h3);
divTwo.appendChild(h3Two);
div.appendChild(h3Div)

h3.appendChild(h3Div);
h3Div.appendChild(adoboImg);
h3Div.appendChild(adobo);
h3Div.appendChild(adoboP);
h3Div.appendChild(adoboAnchor);

h3Two.appendChild(h3TwoDiv);
h3TwoDiv.appendChild(arrozImg);
h3TwoDiv.appendChild(arroz);
h3TwoDiv.appendChild(arrozP);
h3TwoDiv.appendChild(arrozAnchor)


adoboP.appendChild(adoboOl);
arrozP.appendChild(arrozOl);


adobo.append(
  adoboOne,
  adoboTwo,
  adoboThree,
  adoboFour,
  adoboFive,
  adoboSix,
  adoboSeven,
  adoboEight,
  adoboNine
);


adoboOl.append(
  adoboOneOl,
  adoboTwoOl,
  adoboThreeOl,
  adoboFourOl,
  adoboFiveOl,
  adoboSixOl,
  adoboSevenOl
);


arroz.append(
  arrozOne,
  arrozTwo,
  arrozThree,
  arrozFour,
  arrozFive,
  arrozSix,
  arrozSeven,
  arrozEight,
  arrozNine,
  arrozTen,
  arrozEleven,
  arrozTwelve,
  arrozThirteen
);


arrozOl.append(
  arrozOneOl,
  arrozTwoOl,
  arrozThreeOl,
  arrozFourOl,
  arrozFiveOl,
  arrozSixOl,
  arrozSevenOl,
  arrozEightOl,
  arrozNineOl,
  arrozTenOl,
  arrozElevenOl,
  arrozTwelveOl
);


footer.appendChild(footerDiv);
