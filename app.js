const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const stars = [];
const numSmallStars = 141;
const numBigStars = 2;
const totalStars = numSmallStars + numBigStars;
const quotes = [
  "Love is like the wind, you can't see it, but you can feel it.",
  "Love is the only thing that doesn't diminish when shared.",
  "Love is not a destination; it's a journey we embark on together.",
  "Love's fire warms the coldest of nights.",
  "Love is a friendship set to music.",
  "Love is not something you look for; it's something you become.",
  "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
  "Love is the master key that opens the gates of happiness.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is not about how many days, months, or years you have been together. It's all about how much you love each other every single day.",
  "Love is the only force capable of transforming an enemy into a friend.",
  "Love is the flower you've got to let grow.",
  "Love is a canvas furnished by nature and embroidered by imagination.",
  "Love is the greatest gift you can give to someone.",
  "Love is not an equation; it is not a contract, and it is not a happy ending. Love is the slate under the chalk, the ground that buildings rise, and the oxygen in the air. It is the place you come back to, no matter where you're headed.",
  "Love is when the other person's happiness is more important than your own.",
  "Love is the joy of the good, the wonder of the wise, and the amazement of the gods.",
  "Love is a perfume you cannot pour onto others without getting a few drops on yourself.",
  "Love is like a beautiful flower that I may not touch, but whose fragrance makes the garden a place of delight just the same.",
  "Love is a game that two can play and both win.",
  "Love is not finding someone to live with; it's finding someone you can't live without.",
  "Love is composed of a single soul inhabiting two bodies.",
  "Love is not just looking at each other, it's looking in the same direction.",
  "Love is a two-way street constantly under construction.",
  "Love is the poetry of the senses.",
  "Love is the only sane and satisfactory answer to the problem of human existence.",
  "Love is the only thing that grows when you give it away.",
  "Love is the river of life in the world.",
  "Love is the bridge that connects us all.",
  "Love is the essence that keeps the universe in harmony.",
  "Love is the melody that makes life sing.",
  "Love is the thread that weaves the fabric of our lives.",
  "Love is the answer, and you know that for sure; Love is a flower, you've got to let it grow.",
  "Love is not just a feeling; it's a choice we make every day.",
  "Love is the light that guides us through the darkest nights.",
  "Love is the magic that makes life worthwhile.",
  "Love is the language that transcends all barriers.",
  "Love is the anchor that keeps us grounded in the stormiest seas.",
  "Love is the wings that let us soar to new heights.",
  "Love is the seed that grows into a beautiful garden.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the joy of the good, the wonder of the wise, and the amazement of the gods.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze; it caresses our soul.",
  "Love is the fire that warms the coldest of hearts.",
  "Love is like a painting; each stroke adds depth and meaning.",
  "Love is the melody that plays in the heart.",
  "Love is the seed that blossoms into a beautiful flower.",
  "Love is like a prism; it reflects all the colors of the heart.",
  "Love is the sun that shines on even the cloudiest days.",
  "Love is a journey with no destination, and every step is worth taking.",
  "Love is the glue that holds us all together.",
  "Love is the moon that shines in the darkest night.",
  "Love is like a butterfly; it's delicate and beautiful.",
  "Love is the language spoken by the heart.",
  "Love is like a gentle breeze" ];

    const modal = document.getElementById('starModal');
    const starNameElement = document.getElementById('starName');
    const starDescriptionElement = document.getElementById('starDescription');
    const starQuoteElement = document.getElementById('starQuote');
    
    function drawStar(x, y, size, brightness) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fill();
    }
    
    function getRandomCoordinate(max) {
      return Math.floor(Math.random() * max);
    }
    
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    function findClickedStar(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
    
      for (const star of stars) {
        const distance = Math.sqrt((star.x - mouseX) ** 2 + (star.y - mouseY) ** 2);
        if (distance < star.size) {
          displayStarInfo(star.name, star.description, star.quote);
          break;
        }
      }
    }
    
    function displayStarInfo(name, description, quote) {
      starNameElement.textContent = name;
      starDescriptionElement.textContent = description;
      starQuoteElement.textContent = quote;
      modal.style.display = 'block';
    }
    
    function closeModal() {
      modal.style.display = 'none';
    }
    
    function updateStarsPosition() {
      for (const star of stars) {
        star.x += (Math.random() - 0.5) * 0.5; // Move the star horizontally within a small range
        star.y += (Math.random() - 0.5) * 0.5; // Move the star vertically within a small range
    
        // Ensure stars stay within the canvas boundaries
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      }
    }
    
    function getStarOrdinalNumber(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${number}th`;
  } else if (lastDigit === 1) {
    return `${number}st`;
  } else if (lastDigit === 2) {
    return `${number}nd`;
  } else if (lastDigit === 3) {
    return `${number}rd`;
  } else {
    return `${number}th`;
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw big stars
  for (let i = 0; i < numBigStars; i++) {
    const x = getRandomCoordinate(canvas.width);
    const y = getRandomCoordinate(canvas.height);
    const size = 10;
    stars.push({ x, y, size, name: `Star ${i + 1}/${totalStars}`, brightness: 1, description: `In the Earl's Gallery: The ${getStarOrdinalNumber(i + 1)} Star among ${totalStars}.`, quote: getRandomQuote() });
    drawStar(x, y, size, 1);
  }

  // Draw small stars
  for (let i = 0; i < numSmallStars; i++) {
    const x = getRandomCoordinate(canvas.width);
    const y = getRandomCoordinate(canvas.height);
    const size = Math.random() * 2 + 1; // Random size between 1 and 3
    stars.push({ x, y, size, name: `Star ${getStarOrdinalNumber(numBigStars + i + 1)}/${totalStars}`, brightness: 1, description: `In the Earl's Gallery: The ${getStarOrdinalNumber(numBigStars + i + 1)} Star among ${totalStars}.`, quote: getRandomQuote() });
    drawStar(x, y, size, 1);
  }
}
    
    function animate() {
      updateStarsPosition();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        drawStar(star.x, star.y, star.size, star.brightness);
      }
      requestAnimationFrame(animate);
    }
    
    drawStars();
    canvas.addEventListener('click', findClickedStar);
    animate();