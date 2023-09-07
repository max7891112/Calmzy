import mySwiper from './components/our-service/ourService.js';
import firstLesson from './components/first-lesson/firstLesson.js';
import Process from './components/process/process.js';
import Calm from './components/calm/calm.js';

document.addEventListener('DOMContentLoaded', () => {
    mySwiper.addInitialization();
    firstLesson.visibleElement();
    Process.visibleElement();
    Calm.visibleElement()
});