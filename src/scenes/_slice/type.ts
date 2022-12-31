export type MediaBodyType =
  | {
      type: 'IMAGE'
      imageBlob: string | undefined
      name: string | undefined
    }
  | {
      type: 'VIDEO'
      videoBlob: string | undefined
      posterBlob: string | undefined
      name: string | undefined
    }

export type MediaBodyTypeEmpty =
  | {
      type: 'IMAGE'
      imageBlob: ''
      name: ''
    }
  | {
      type: 'VIDEO'
      videoBlob: ''
      posterBlob: ''
      name: ''
    }
