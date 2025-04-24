import './upload-form.js';
import { getData } from './api.js';
import { initFilters } from './filters.js';

getData('/data')
  .then((data) => {
    initFilters(data);
  });
