import regular from './regular';

const themes = {
  'regular': regular
};

export function getTheme(themeKey) {
  return themes[themeKey];
}
