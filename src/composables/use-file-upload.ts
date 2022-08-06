import { Ref, ref } from 'vue'
import createError from 'http-errors'

interface State<T> {
  data: Ref<T | undefined>
  error: Ref<Error | undefined>
  isLoading: Ref<boolean>
  uploadFile: (file: File) => void
}

type UseUploadFileParams = {
  url: string
  config?: {
    headers?: Record<string, never>
  }
}

function handleError(response: Response) {
  createError(response.status, response.statusText)
}

function responseHasError(response: Response) {
  return response.status >= 200 && response.status <= 299
}

export default function useUploadFile<T = unknown>(params: UseUploadFileParams): State<T> {
  const data = ref<T | undefined>()
  const error = ref<Error | undefined>()
  const isLoading = ref<boolean>(false)

  async function uploadFile(file: File) {
    console.log(`Uploading File: ${file.text} to ${params.config?.headers}`)

    const response = await fetch(params.url, {
      headers: params.config?.headers,
    })

    if (!responseHasError(response)) {
      const jsonResponse = await response.json()
      data.value = jsonResponse
    } else {
      handleError(response)
    }
  }

  return { data, error, isLoading, uploadFile }
}
