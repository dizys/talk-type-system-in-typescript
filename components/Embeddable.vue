<template>
  <iframe class="iframe" :src="url" :width="width" :height="height"></iframe>
</template>

<script lang="ts">
import * as Base64 from 'js-base64';

export default {
  name: 'Embeddable',
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    language: {
      type: String,
      default: 'typescript',
    },
    code: {
      type: String,
      default: '// Start here...',
    },
    defaultURL: {
      type: String,
    }
  },
  computed: {
    url: function () {
      if (this.defaultURL) {
        return this.defaultURL;
      }
      let code = Base64.encode(this.code);
      return `https://embeddable.vercel.app/?language=${encodeURIComponent(this.language)}&code=${encodeURIComponent(code)}`
    }
  }
}
</script>

<style scoped>
.iframe {
  border-radius: 7px;
  padding: 5px;
  background-color: #1e1e1e;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
