const icons = [
  /* General */
  'icons/bookmark.svg',
  'icons/book.svg',
  'icons/briefcase.svg',
  'icons/brush.svg',
  'icons/chart-area.svg',
  'icons/chart-line.svg',
  'icons/chart-pie.svg',
  'icons/calendar.svg',
  'icons/code.svg',
  'icons/code-outline.svg',
  'icons/document.svg',
  'icons/download.svg',
  'icons/eject.svg',
  'icons/export.svg',
  'icons/external-link.svg',
  'icons/gift.svg',
  'icons/heart.svg',
  'icons/link.svg',
  'icons/link-outline.svg',
  'icons/mail.svg',
  'icons/messages.svg',
  'icons/pen.svg',
  'icons/social-dribbble.svg',
  'icons/social-facebook.svg',
  'icons/social-facebook-messenger.svg',
  'icons/social-facebook-messenger-bubble.svg',
  'icons/social-github.svg',
  'icons/social-stack-exchange.svg',
  'icons/social-steam.svg',
  'icons/social-twitter.svg',
  'icons/ticket.svg',
  'icons/warning.svg',
  /* Prizes */
  'icons/first-place.svg',
  'icons/second-place.svg',
  'icons/third-place.svg',
];

module.exports = {
  files: [
    ...icons,
  ],
  fontName: 'HackIcons',
  classPrefix: 'hi-',
  baseClass: 'hi',
  fixedWidth: true,
  types: ['eot', 'woff', 'ttf'],
  cssTemplate: 'templates/less.hbs',
};