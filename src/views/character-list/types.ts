export interface Filter {
  text: string
  selected: boolean
}

export interface CelebritySearchParamDTO {
  query?: string,
  gender?: 'm' | 'f',
  fromAge?: number,
  toAge?: number,
  jobs?: number[],
  sortBy?: 'view_count',
  order?: 'd',
  number?: number,
  from?: number
}