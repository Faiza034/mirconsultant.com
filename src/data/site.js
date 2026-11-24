
// Central company details. Edit here to update the whole site.
export const SITE = {
  name: 'MIR Education & Immigration Consultants',
  short: 'MIR Consultants',
  url: 'https://mirconsultant-com-rho.vercel.app/',

  phones: ['0300 860 5180', '0300 860 5280'],
  whatsappNumber: '923008605180',
  whatsappMessage:
    'Assalam o Alaikum! I am interested in studying abroad. Please guide me about available study opportunities.',

  address: '',

  socials: {
    facebook: 'https://www.facebook.com/share/19xkcJXsXP/',
    instagram: 'https://www.instagram.com/mireducationconsultants.co?fqnt=MWN0MHdqeGV6ZmhlYw==',
    linkedin: '',
    youtube: '',
  },
};

export const WHATSAPP_URL =
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const telHref = (p) =>
  `tel:+92${p.replace(/\s/g, '').slice(1)}`;

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Study Destinations', to: '/destinations', dropdown: true },
  { label: 'Our Services', to: '/services' },
  { label: 'Universities', to: '/universities' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

// Replace these URLs with company photographs.
const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

export const IMAGES = {
  hero: u('photo-1541339907198-e08756dedf3f'),
  about: '/images/about.jpg',
  consult: u('photo-1521737604893-d14cc237f11d'),
  graduation: u('photo-1523050854058-8df90110c9f1'),
  germany: u('photo-1467269204594-9661b134dd2b'),
  cyprus: u('photo-1580655653885-65763b2597d0'),
  uk: u('photo-1513635269975-59663e0ac1ad'),
  italy: u('photo-1552832230-c0197dd311b5'),
};
