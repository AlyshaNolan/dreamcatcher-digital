import Alpine from "alpinejs";
import carousel from './carousel';

Alpine.data('carousel', carousel);
window.Alpine = Alpine;
Alpine.start();