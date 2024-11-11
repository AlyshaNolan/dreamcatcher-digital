import Alpine from "alpinejs";
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import carousel from './carousel';
import './leaflet';
import './map';

Alpine.data('carousel', carousel);

Alpine.plugin(intersect)
Alpine.plugin(focus)
Alpine.start();