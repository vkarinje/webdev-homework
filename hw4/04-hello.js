// Add your code here
let main = document.querySelector('main');
let div = document.createElement('div');
var image = document.createElement('img');
image.src = '../hw1/images/Varsha.jpg';
image.setAttribute("alt","This image is of Varsha posing infront of Waterfront park.");
const paragraph = document.createElement('p');
paragraph.innerHTML = `<span style = "font-weight: bold"> Hi! My name is Varsha. This is my third term at Portland State University. I am in love with this</span> city and I want to explore more of Portland. Waterfront Park is my favorite place to relax. I love cooking,dancing and watching Netflix.`;
div.style.width = '50%';
div.style.textAlign = 'center';
div.style.margin = 'auto';
image.style.borderRadius = '50%';
image.style.width = '200px';
image.style.height = '200px';
image.style.justifyContent = 'center';
main.append(div);
div.append(image);
div.append(paragraph);
