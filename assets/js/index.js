import Alpine from "alpinejs";
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import carousel from './carousel';
 

Alpine.data('carousel', carousel);

Alpine.plugin(intersect)
Alpine.plugin(focus)
Alpine.start();