// script.js — версия, которая точно работает с твоим HTML

// ====== Треки и лирика (вставь свои реальные имена файлов в src при необходимости) ======
const songs = {
  1: {
    src: "song.mp3",
    lyrics: [
      { time: 0, text: "Я тебе кое-что сказать хочу" },
      { time: 2, text: "Твои широкие зрачки говорят о любви" },
      { time: 7, text: "И отражают солнце" },
      { time: 10, text: "Ты прячешь за спиной мои любимые цветы" },
      { time: 14, text: "Не сумев спрятать эмоции" },
      { time: 17, text: "Мы идеальная пара, самые классные Force'ы" },
      { time: 21, text: "Ты любишь меня? Конечно, ну что за вопросы?" },
      { time: 24, text: "Мы идеальная пара, самые классные Force'ы" },
      { time: 28, text: "Ты любишь меня? (Конечно!) Какие вопросы?" },
      { time: 32, text: "Я расплываюсь в улыбке, как дурак" },
      { time: 36, text: "Как шоколадка на лобовом окне" },
      { time: 39, text: "Тебе срывает крышу, мне рвёт чердак" },
      { time: 43, text: "Зову тебя чудак, а ты меня малышка" },
      { time: 46, text: "Я расплываюсь в улыбке, как дурак" },
      { time: 50, text: "Как шоколадка на лобовом окне" },
      { time: 54, text: "Тебе срывает крышу, мне рвёт чердак" },
      { time: 57, text: "Зову тебя чудак, а ты меня малышка" },
      { time: 60, text: "Твой поцелуй любви устал быть воздушным" },
      { time: 64, text: "Я держу себя в руках, но жаль, что не в твоих" },
      { time: 67, text: "Ты нравишься мне, даже когда ты душный" },
      { time: 71, text: "Я обожаю твои трещинки и твои целости" },
      { time: 76, text: "Мы идеальная пара, самые классные Force'ы" },
      { time: 81, text: "Ты любишь меня? Конечно, ну что за вопросы?" },
      { time: 82, text: "Мы идеальная пара, самые классные Force'ы" },
      { time: 86, text: "Ты любишь меня? Конечно, какие вопросы?" },
      { time: 89, text: "Я расплываюсь в улыбке, как дурак" },
      { time: 93, text: "Как шоколадка на лобовом окне" },
      { time: 96, text: "Тебе срывает крышу, мне рвёт чердак" },
      { time: 100, text: "Зову тебя чудак, а ты меня малышка" },
      { time: 104, text: "Я расплываюсь в улыбке, как дурак" },
      { time: 108, text: "Как шоколадка на лобовом окне" },
      { time: 111, text: "Тебе срывает крышу, мне рвёт чердак" },
      { time: 114, text: "Зову тебя чудак, а ты меня малышка" },
      { time: 118, text: "Я расплываюсь" },
      { time: 120, text: "Это лето без тебя бесцветное" }
    ]
  },

  2: {
    src: "song1.mp3",
        lyrics: [
          { time: 0, text: "Она как демон с ангела глазами" },
          { time: 2.54, text: "Верит, что любовь залечит ранны" },
          { time: 6.2, text: "Но сердце украшают эти шрамы" },
          { time: 9.36, text: "И самые глубокие оставит ещё одна любовь" },
          { time: 15.42, text: "Я знаю, знаю, ты не думала мозгами" },
          { time: 19.2, text: "Когда ты закрывала многие штальты" },
          { time: 22.7, text: "Впитывала все мои повадки, что притворится мной" },
          { time: 42.64, text: "Я не могу сказать, могу показать" },
          { time: 46.96, text: "Каждого, кто меня знал, но поменялось мнение" },
          { time: 50.8, text: "И он пропал, как волна, что разбивается, стян искал" },
          { time: 55.24, text: "Да, я теперь один, ты теперь одна" },
          { time: 58.06, text: "Как будто не было тебя, не было меня" },
          { time: 61.66, text: "Да, я теперь один, ты теперь одна" },
          { time: 64.74, text: "Так больше, лучше для тебя, не для меня" },
          { time: 67.16, text: "Она как демон с ангелой глазами" },
          { time: 70.06, text: "Верит, что любовь залечит ранны" },
          { time: 72.94, text: "Но сердце украшают эти шрамы" },
          { time: 76.04, text: "И самые глубокие оставит ещё одна любовь" },
          { time: 82.08, text: "Я знаю, знаю, ты не думала мозгами" },
          { time: 85.96, text: "Когда ты закрывала многие штальты" },
          { time: 89.96, text: "Впитывала все мои повадки, что притворится мной" },
          { time: 94.48, text: "Е, е, её любовь" }
        ]
  }
};

// ====== DOM ======
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timeEl = document.getElementById('time');
const lyricsEl = document.getElementById('lyrics');
const songButtons = document.querySelectorAll('.song-btn');
const themeToggle = document.getElementById('theme-toggle');

let currentSong = 1;
let currentLyricIndex = 0;
let currentLyrics = [];

// ====== Load song ======
function loadSong(num) {
  currentSong = Number(num);
  const song = songs[currentSong];
  if (!song) {
    console.error('Нет трека с id', num);
    return;
  }

  audio.src = song.src;
  audio.currentTime = 0;
  audio.pause();

  // сбрасываем лирику и индекс
  currentLyricIndex = 0;
  currentLyrics = song.lyrics || [];
  lyricsEl.innerHTML = "";

  // обновляем state кнопок выбора песни
  songButtons.forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.song) === currentSong);
  });

  // иконки
  iconPlay.style.display = 'block';
  iconPause.style.display = 'none';
}
songButtons.forEach(btn => {
  btn.addEventListener('click', () => loadSong(btn.dataset.song));
});

// ====== Play / Pause ======
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
  } else {
    audio.pause();
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
  }
});

// ====== Обновление прогресса и лирики ======
audio.addEventListener('loadedmetadata', () => {
  // показать начальное время / длительность
  timeEl.textContent = `${formatTime(0)} / ${formatTime(audio.duration)}`;
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration && !isNaN(audio.duration)) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  }

  // показываем строки по мере наступления времени
  while (currentLyricIndex < currentLyrics.length && audio.currentTime >= currentLyrics[currentLyricIndex].time) {
    const line = currentLyrics[currentLyricIndex];
    const p = document.createElement('p');
    p.textContent = line.text;
    lyricsEl.appendChild(p);

    // анимация появления
    setTimeout(() => p.classList.add('show'), 30);

    // подсветка активной строки
    const all = lyricsEl.querySelectorAll('p');
    all.forEach(el => el.classList.remove('active'));
    p.classList.add('active');

    // держим только последние N строк, чтобы не раздувать контейнер (совместимо с overflow:hidden)
    const MAX_LINES = 4;
    if (all.length > MAX_LINES) {
      lyricsEl.removeChild(all[0]);
    }

    currentLyricIndex++;
  }
});

// ====== По клику на прогресс ======
progressContainer.addEventListener('click', (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  if (audio.duration) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});

// ====== По окончании трека ======
audio.addEventListener('ended', () => {
  iconPlay.style.display = 'block';
  iconPause.style.display = 'none';
});

// ====== Тёмная/светлая тема ======
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
  });
}

// ====== Утилиты ======
function formatTime(time) {
  if (!time || isNaN(time)) return '0:00';
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ====== Стартовый трек ======
loadSong(currentSong);
