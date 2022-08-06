<template>
  <div>File Upload</div>
</template>

<script lang="ts" setup>
import useFileUpload from './composables/use-file-upload'

type OCRDocument = {
  page: string
  blocks: Array<string>
}

const { data, error, isLoading, uploadFile } = useFileUpload<OCRDocument>()

console.log(data)
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
