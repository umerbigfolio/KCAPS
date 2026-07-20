// document.querySelectorAll('.applications-showcase__accordion-item details').forEach((details) => {
//   const summary = details.querySelector('.applications-showcase__summary');
//   const content = details.querySelector('.applications-showcase__accordion-content');
//   const inner = details.querySelector('.applications-showcase__accordion-content-inner');

//   content.style.overflow = 'hidden';

//   if (details.open) {
//     content.style.height = 'auto';
//     content.style.opacity = '1';
//     content.style.transform = 'translateY(0)';
//   } else {
//     content.style.height = '0';
//     content.style.opacity = '0';
//     content.style.transform = 'translateY(-8px)';
//   }

//   summary.addEventListener('click', (event) => {
//     event.preventDefault();

//     if (details.open) {
//       content.style.height = `${inner.scrollHeight}px`;

//       requestAnimationFrame(() => {
//         content.style.height = '0';
//         content.style.opacity = '0';
//         content.style.transform = 'translateY(-8px)';
//       });

//       content.addEventListener(
//         'transitionend',
//         function handler(event) {
//           if (event.propertyName !== 'height') return;

//           details.removeAttribute('open');
//           content.removeEventListener('transitionend', handler);
//         }
//       );
//     } else {
//       details.setAttribute('open', '');

//       content.style.height = '0';
//       content.style.opacity = '0';
//       content.style.transform = 'translateY(-8px)';

//       requestAnimationFrame(() => {
//         content.style.height = `${inner.scrollHeight}px`;
//         content.style.opacity = '1';
//         content.style.transform = 'translateY(0)';
//       });

//       content.addEventListener(
//         'transitionend',
//         function handler(event) {
//           if (event.propertyName !== 'height') return;

//           content.style.height = 'auto';
//           content.removeEventListener('transitionend', handler);
//         }
//       );
//     }
//   });
// });