interface ImageGif {
  height: string
  width: string
  url: string
  webp: string
}

export interface Gif {
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  username: string
  title: string
  description?: string
  images: {
    original: ImageGif
    fixed_width: ImageGif
  }
}

export interface Response {
  data: Gif[]
  pagination: {
    total_count: number
    count: number
    offset: number
  }
}

export interface ResponseData {
  error: boolean
  message: string | any
  responseObj: Response
}
