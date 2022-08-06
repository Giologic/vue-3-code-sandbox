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
    headers?: Record<string, never>
  }
}

export default function useUploadFile<T = unknown>(params: UseUploadFileParams): State<T> {
  const data = ref<T | undefined>()
  const error = ref<Error | undefined>()
  const isLoading = ref<boolean>(false)

  async function uploadFile(file: File) {
    const response = await fetch(params.url, {
      headers: params.config?.headers,
    })

    try {
      const jsonResponse = await response.json()
      data.value = jsonResponse
    } catch (error) {
      console.error(error)
    }
  }

  return { data, error, isLoading, uploadFile }
}
