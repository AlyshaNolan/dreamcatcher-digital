import Alpine from "alpinejs";
import focus from '@alpinejs/focus'
import carousel from './carousel';

Alpine.data('carousel', carousel);

Alpine.plugin(focus)
Alpine.start();