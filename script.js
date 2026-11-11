
// ======================================
// FOR NATALIE ♡
// A LITTLE PLACE FULL OF LOVE
// ======================================

// LOVE LETTERS
const letters = [
  {
    title: "Dear Natalie,",
    text: "I hope you know that even the most ordinary days feel a little more special with you in them. You make small things worth remembering, and I feel lucky that I get to make memories with you. Never forget how loved you are. ♡"
  },
  {
    title: "For your cloudy days,",
    text: "If today feels a little heavy, take a breath and remember this: you don't have to be perfect to be wonderful. You are allowed to rest, to be quiet, and to take things one step at a time. I'm always cheering for you, pretty girl."
  },
  {
    title: "Just because,",
    text: "No anniversary, no special occasion, no big reason. I just wanted to remind you that I adore you. Your laugh, your little habits, your whole wonderfully-you self. That's it. That's the letter. That's the feeling. ♡"
  }
];

// QUIZ QUESTIONS
const quiz = [
  {
    q: "What's my favorite thing about you?",
    a: [
      "Your smile (and the way you laugh)",
      "Your ability to steal my snacks",
      "Literally everything, silly"
    ],
    correct: 2,
    feedback: "Trick question. The answer is obviously all of you. ♡"
  },
  {
    q: "What should we collect more of?",
    a: [
      "Little adventures together",
      "Cute photos and memories",
      "All of the above, please"
    ],
    correct: 2,
    feedback: "Correct. More memories, more giggles, more us!"
  },
  {
    q: "Who is the prettiest girl in this little universe?",
    a: [
      "Natalie",
      "Natalie, obviously",
      "Still Natalie"
    ],
    correct: 1,
    feedback: "You passed with flying colors, Miss Natalie! 🎀"
  }
];

// VARIABLES
let loveCount = 0;
let current = 0;
let answered = false;

// SHORTCUT
const $ = id => document.getElementById(id);


// ======================================
// MOBILE NAVIGATION
// ======================================

$('menuToggle').addEventListener('click', () => {
  $('nav').classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    $('nav').classList.remove('open');
  });
});


// ======================================
// LOVE LETTER INTERACTION
// ======================================

document.querySelectorAll('[data-letter]').forEach(btn => {

  btn.addEventListener('click', () => {

    const item = letters[Number(btn.dataset.letter)];

    $('letterTitle').textContent = item.title;
    $('letterText').textContent = item.text;

    $('letterPaper').classList.remove('hidden');

    $('letterPaper').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

  });

});

$('closeLetter').addEventListener('click', () => {
  $('letterPaper').classList.add('hidden');
});


// ======================================
// LOVE COUNTER
// ======================================

$('sprinkleBtn').addEventListener('click', () => {

  loveCount++;

  $('loveCount').textContent = loveCount;

  toast('A little love sent to you, Natalie! ♡');

  burst(18);

});


// ======================================
// TOAST NOTIFICATION
// ======================================

function toast(message) {

  const t = $('toast');

  t.textContent = message;

  t.classList.add('show');

  setTimeout(() => {
    t.classList.remove('show');
  }, 2200);

}


// ======================================
// FLOATING HEARTS & SPARKLES
// ======================================

function burst(n = 12) {

  for (let i = 0; i < n; i++) {

    const s = document.createElement('span');

    s.className = 'sparkle';

    s.textContent = [
      '♡',
      '✧',
      '✿',
      '♥'
    ][Math.floor(Math.random() * 4)];

    s.style.left = (10 + Math.random() * 80) + 'vw';

    s.style.top = (45 + Math.random() * 45) + 'vh';

    s.style.fontSize = (12 + Math.random() * 20) + 'px';

    document.body.appendChild(s);

    setTimeout(() => {
      s.remove();
    }, 1400);

  }

}


// ======================================
// INTERACTIVE QUIZ
// ======================================

function renderQuiz() {

  const q = quiz[current];

  answered = false;

  $('question').textContent = q.q;

  $('quizProgress').textContent =
    `0${current + 1} / 03`;

  $('progressBar').style.width =
    ((current + 1) / quiz.length * 100) + '%';

  $('quizFeedback').textContent = '';

  $('nextQuestion').classList.add('hidden');

  $('answers').innerHTML = '';

  q.a.forEach((answer, i) => {

    const b = document.createElement('button');

    b.className = 'answer';

    b.textContent = answer;

    b.addEventListener('click', () => {

      if (answered) return;

      answered = true;

      b.classList.add('selected');

      $('quizFeedback').textContent = q.feedback;

      [...$('answers').children].forEach(x => {
        x.disabled = true;
      });

      $('nextQuestion').textContent =
        current === quiz.length - 1
          ? 'See my little message ♡'
          : 'Next little question →';

      $('nextQuestion').classList.remove('hidden');

    });

    $('answers').appendChild(b);

  });

}


// NEXT QUESTION

$('nextQuestion').addEventListener('click', () => {

  if (current < quiz.length - 1) {

    current++;

    renderQuiz();

  } else {

    current = 0;

    renderQuiz();

    toast('You are officially an expert on us. ♡');

    burst(24);

  }

});


// ======================================
// FINAL SURPRISE
// ======================================

$('finalButton').addEventListener('click', () => {

  $('finalMessage').classList.remove('hidden');

  $('finalButton').textContent =
    'You are so loved ♡';

  burst(35);

});


// ======================================
// START WEBSITE
// ======================================

renderQuiz();
