# sloz
Lazy load images in viewport first and proceed others after.

### Installation
```bash
yarn add sloz
# or
npm i -S sloz
```

### Usage
For images you want to be lazy-loaded specify a `data-src` attribute with original image as its value.

- Images in viewport are loaded first.
- Images not in viewport are loaded right after.
- If viewport images loading is taking too long (e.g. bad network, large images), other images are proceeded without waiting.

This way we can improve UX by:
1. Minimizing loading times (HTML content shows immediately).
2. Improve UX (Images important for user are loaded  in the first place).

### Example
```html
<!-- ... -->
<body>
  <img src="" alt="image" data-src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?dpr=1&auto=compress,format&fit=crop&w=1199&h=794&q=80&cs=tinysrgb&crop=&bg=">
</body>
<!-- ... -->
```

```js
import sloz from 'sloz';

sloz();
```

### Configuration
```js

sloz('img[data-src]', // images selector
  {
    wait: 3000, // viewport images waiting timeout after which all images are force-loaded
  }
);
```

### License
MIT
