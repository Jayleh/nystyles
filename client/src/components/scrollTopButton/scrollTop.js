import $ from 'jquery';
import 'jquery-ui/ui/effect';

export const scrollTopCubic = () => {
  $('html, body').animate(
    {
      scrollTop: 0
    },
    1500,
    'easeInOutCubic'
  );
};

export const scrollTopInstant = () => {
  $('html, body').animate(
    {
      scrollTop: 0
    },
    0
  );
};
