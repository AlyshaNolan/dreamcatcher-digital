import Alpine from "alpinejs";
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import carousel from './carousel';
import form from './form';
import './leaflet';
import './map';

Alpine.data('carousel', carousel);
Alpine.data('form', form);

Alpine.plugin(intersect)
Alpine.plugin(focus)
Alpine.start();