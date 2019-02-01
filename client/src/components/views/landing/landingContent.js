import chair from '../../../assets/images/chair.jpeg';
import jar from '../../../assets/images/jar.jpeg';
import nails from '../../../assets/images/nails.jpeg';
import wax from '../../../assets/images/wax.jpeg';
import acrylic from '../../../assets/images/acrylic.jpeg';

// square images
import blonde from '../../serviceCard/images/blonde.jpg';
import massage from '../../serviceCard/images/massage.jpg';
import nails1 from '../../serviceCard/images/nails.jpg';
import wax1 from '../../serviceCard/images/wax.jpeg';

export const heroImages = {
  type: 'hero',
  content: [
    {
      imgSrc: acrylic,
      imgAlt: 'acrylic'
    },
    {
      imgSrc: chair,
      imgAlt: 'chair'
    },
    {
      imgSrc: jar,
      imgAlt: 'jar'
    },
    {
      imgSrc: nails,
      imgAlt: 'nails'
    },
    {
      imgSrc: wax,
      imgAlt: 'wax'
    }
  ]
};

export const servicesImages = {
  type: 'services',
  content: [
    {
      imgSrc: 'https://lorempixel.com/250/250/nature/1',
      imgAlt: 'Nails Care',
      title: 'Nails Care',
      price: '$50'
    },
    {
      imgSrc: 'https://lorempixel.com/250/250/nature/2',
      imgAlt: 'Hair Styling',
      title: 'Hair Styling',
      price: '$50'
    },
    {
      imgSrc: 'https://lorempixel.com/250/250/nature/3',
      imgAlt: 'Facial Therapies',
      title: 'Facial Therapies',
      price: '$50'
    },
    {
      imgSrc: 'https://lorempixel.com/250/250/nature/4',
      imgAlt: 'Body Waxing',
      title: 'Body Waxing',
      price: '$50'
    }
  ]
};

export const galleryImages = [
  { imgSrc: blonde, imgAlt: 'blonde' },
  { imgSrc: nails1, imgAlt: 'nails1' },
  { imgSrc: massage, imgAlt: 'massage' },
  { imgSrc: wax1, imgAlt: 'wax1' }
];

export const testimonials = {
  type: 'testimonials',
  content: [
    {
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      name: 'Justin',
      location: 'Irvine, CA'
    },
    {
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      name: 'Will',
      location: 'Los Angeles, CA'
    },
    {
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      name: 'Brian',
      location: 'Aliso Viejo, CA'
    }
  ]
};
