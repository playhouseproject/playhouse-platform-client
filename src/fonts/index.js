import stylis from 'stylis';

const stylesheet = stylis(
  '.font-samples-container',
  `
    i {
      font-style: italic;
    }
  `
);

const samplesMarkup = `
`;

export function loadFonts(samplesContainerElement) {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = stylesheet;

  document.head.appendChild(styleElement);

  // eslint-disable-next-line
  samplesContainerElement.innerHTML = samplesMarkup;
}
