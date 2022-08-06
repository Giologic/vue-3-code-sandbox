<template>
  <div>File Upload</div>
  <button @click="() => uploadFile()">Button</button>
</template>

<script lang="ts" setup>
import useFileUpload from './composables/use-file-upload'

type OCRDocument = {
  page: string
  blocks: Array<string>
}

// const dummyFile = new File(['foo'], 'foo.txt', {
//   type: 'text/plain',
// })

const { data, error, isLoading, uploadFile } = useFileUpload<OCRDocument>('/data/dummy.json')

console.log(data.value)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
