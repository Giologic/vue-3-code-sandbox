import { Ref, ref } from 'vue'

interface State<T> {
  data: Ref<T | undefined>
  error: Ref<Error | undefined>
  isLoading: Ref<boolean>
  uploadFile: (file: File) => void
}

type UseUploadFileParams = {
  url: string
  config?: {
    headers?: unknown
  }
}

export default function useUploadFile<T = unknown>(params: UseUploadFileParams): State<T> {
  const data = ref<T | undefined>()
  const error = ref<Error | undefined>()
  const isLoading = ref<boolean>(false)

  function uploadFile(file: File) {
    console.log(`Uploading File: ${file.text} to ${params.config?.headers}`)
  }

  return { data, error, isLoading, uploadFile }
}
