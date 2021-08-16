<img src="https://www.mintjams.jp/img/cr.svg" alt ="" width="64">

# vue-badge
A reusable Badge component for Vue.js 2.x used by webtop applications.

## Installation

```sh
npm install --save-dev @mintjamsinc/vue-badge
```

## Usage

```vue
<Badge :authorizable="authorizable"/>
```

```js
import Badge from '@mintjamsinc/vue-badge';

export default {
  components: {
    Badge: Badge,
  },
  computed: {
    authorizable() {
      return window.Webtop.userClient.newAuthorizable(this.$store.state.user);
    },
  },
}
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 MintJams Inc.