export type ThemeName = 'light' | 'dark';
type ColorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
  name: ThemeName
  color: Record<ColorKey, string>
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'brown',
    background: 'lightgray',
    secondary: 'lightgreen',
    third: 'lightblue'
  }
}

export const dark:Theme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: 'darkgreen',
    third: 'darkblue'
  }
}
