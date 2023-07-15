export type MediaBodyType =
  | {
      type: 'IMAGE'
      imageBlob: string
      name: string
    }
  | {
      type: 'VIDEO'
      videoBlob: string
      posterBlob: string
      name: string
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
