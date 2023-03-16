# React Material Symbols

A minimalist package for adding [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) to any React project.

## Authors

- [@ed-software](https://www.github.com/ed-software)

## Installation

Install with npm

```bash
  npm i react-material-symbols
```

## Props

#### `type MaterialSymbolProps`

| Prop     | Type                                                     | Description                                                                                                                                                                                |
| :------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`   | `'10k' \| '10mp' \| ... 2368 more ... \| 'zoom_out_map'` | **Required**. The name of the icon to render.                                                                                                                                              |
| `fill`   | `boolean \| undefined`                                   | **Default `false`**. Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states.                                                |
| `weight` | `100 \| 200 \| ... 6 more ... \| 900 \| undefined`       | Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and heavy (900). Weight can also affect the overall size of the symbol.       |
| `grade`  | `number \| undefined`                                    | Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol.  |
| `size`   | `number \| undefined`                                    | Size defines the icon width and height in pixels. For the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. |
| `color`  | `string \| undefined`                                    | Color accepts key values (`'red'`, `'blue'`, `'indigo'`, etc.), `<hex-color>`, `<rgb()>`, `<hsl()>` and `<hwb()>` values.                                           |
| `as`     | `React.ElementType \| undefined`                         | **Default `'span'`**. Set the HTML Element for the icon.                                                                                                                                   |

## Usage

Import the css into your root file.
```TSX
// Import the font for the icon variant you want to use
// Options include sharp, rounded and outlined
import 'react-material-symbols/sharp.css';
```

Alternatively, import the font into your root file if you want to self host with a library like `next/font`.
```TSX
import font from 'react-material-symbols/material-symbols-sharp.woff2';
// You will also need to import the common CSS file.
import 'react-material-symbols/common.css';
```

Finally, import the component wherever you want to use it.
```TSX
import Icon from 'react-material-symbols';

export default function App() {
  return (
    <Icon icon="folder" size={24} fill grade={-25} color='red' />
  )
}

```
