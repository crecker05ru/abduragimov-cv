// Скрипт для вставки в консоль браузера (F12 -> Console)
// Автоматически запускает распознавание речи и слушает триггер "привет мир"

(function() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'ru-RU';
  recognition.continuous = true;
  recognition.interimResults = true;

  const triggerPhrase = 'привет мир';

  recognition.onresult = function(event) {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
          }
      }
      console.log('Распознанный текст:', finalTranscript);

      // Триггер: проверка на фразу
      if (finalTranscript.toLowerCase().includes(triggerPhrase.toLowerCase())) {
          alert('Триггер сработал! Вы сказали: ' + triggerPhrase);
          console.log('Триггер активирован!');
          // Здесь можно добавить свою логику, например, recognition.stop();
      }
  };

  recognition.onerror = function(event) {
      console.error('Ошибка распознавания:', event.error);
  };

  recognition.onend = function() {
      console.log('Распознавание остановлено. Перезапуск...');
      setTimeout(() => recognition.start(), 100);  // Автоматический рестарт
  };

  console.log('Запуск распознавания речи...');
  recognition.start();
})();