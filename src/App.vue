<template>
  <div>File Upload</div>
  <button @click="() => uploadFile()">Button</button>
  <div v-for="(d, i) in data?.results" :key="i">{{ d }}</div>
</template>

<script lang="ts" setup>
import useFileUpload from './composables/use-file-upload'

type OCRDocumentPage = {
  page: string
  blocks: Array<string>
}
type OCRDocument = {
  results: Array<OCRDocumentPage>
}

const { data, error, isLoading, uploadFile } = useFileUpload<OCRDocument>({
  url: 'https://gist.githubusercontent.com/Giologic/7cabe9f72f42ffc61b3e5fce2c86c8a3/raw/dc803146ffd8ba2dba6955f033ac46c82a8d879d/dummy.json',
})
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
