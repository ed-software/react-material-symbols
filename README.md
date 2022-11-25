# React Material Symbols

A minimalist package for adding [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) to any React project.

## Authors

- [@ed-software](https://www.github.com/ed-software)

## Installation

Install with npm

```bash
  npm i react-material-symbols
```

Import

```typescript
import 'react-material-symbols/dist/style.css'; // Include in the root file of your app
import Icon from 'react-material-symbols';
```

## Props

#### `type MaterialSymbolProps`

| Prop      | Type                                                     | Description                                                                                                                                                                                |
| :-------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`    | `'10k' \| '10mp' \| ... 2368 more ... \| 'zoom_out_map'` | **Required**. The name of the icon to render.                                                                                                                                              |
| `variant` | `'outlined' \| 'rounded' \| 'sharp' \| undefined`        | **Default `'outlined'`**. Three main styles material icons can come in.                                                                                                                    |
| `fill`    | `boolean \| undefined`                                   | **Default `false`**. Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states.                                                |
| `weight`  | `100 \| 200 \| ... 6 more ... \| 900 \| undefined`       | **Default `inherit`**. Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and heavy (900). Weight can also affect the overall size of the symbol.       |
| `grade`   | `number \| undefined`                                    | **Default `inherit`**. Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol.  |
| `size`    | `number \| undefined`                                    | **Default `inherit`**. Size defines the icon width and height in pixels. For the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. |
| `color`   | `string \| undefined`                                    | **Default `inherit`**. Color accepts key values (`'red'`, `'blue'`, `'indigo'`, etc.), `<hex-color>`, `<rgb()>`, `<hsl()>` and `<hwb()>` values.                                           |
| `as`      | `React.ElementType \| undefined`                         | **Default `'span'`**. Set the HTML Element for the icon.                                                                                                                                   |

## Examples

```TSX
import 'react-material-symbols/dist/style.css' // Include in the root file of your app
import Icon from 'react-material-symbols'

export default function App() {
  return (
    <Icon icon="folder" size={24} fill grade={-25} color='red' variant='rounded' />
  )
}

```
