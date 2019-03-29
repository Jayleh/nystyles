import blonde from './images/blonde.jpg';
import nails from './images/nails.jpg';
import massage from './images/massage.jpg';
import wax from './images/wax.jpeg';

export default [
  {
    imgSrc: blonde,
    imgAlt: 'blonde',
    title: 'Hair Styling',
    price: '$200',
    subservices: ['Cut', 'Color', 'Ombre']
  },
  {
    imgSrc: nails,
    imgAlt: 'nails',
    title: 'Nails Care',
    price: '$200',
    subservices: ['Manicure', 'Gel', 'Pedicure']
  },
  {
    imgSrc: massage,
    imgAlt: 'massage',
    title: 'Facial',
    price: '$200',
    subservices: ['Eyelash Extensions', 'Brow Shaping', 'Threading']
  },
  {
    imgSrc: wax,
    imgAlt: 'wax',
    title: 'Spa',
    price: '$200',
    subservices: ['Waxing', 'Facials', 'Body Treatments']
  }
];
