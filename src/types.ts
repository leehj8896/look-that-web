export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface MainBanner {
  bannerId: string,
  imageUrl: string,
  linkUrl: string,
}

export interface PopularLook {
  lookPostId: string,
  viewCount: string,
  celebrity: {
    celebrityId: string,
    name: string,
    viewCount: string,
    group: {
      groupId: string,
      name: string,
    }
  },
  lookList: [
    {
      lookId: string,
      lookDate: string,
      itemList: [
        {
          lookItemListId: string,
          item: {
            itemId: string,
            name: string,
            brandName: string,
            imageUrl: string,
            price: string,
            unit: string,
            category: string
          }
        },
      ],
      imageUrlList: [
        string
      ]
    }
  ]
}

export interface ResLookMainPage {
  popularLookList: Array<PopularLook>,
  latestLookList: Array<LatestLook>,
}

export interface LatestLook {
  lookPostId: string,
  viewCount: string,
  celebrity: {
    celebrityId: string,
    name: string,
    viewCount: string,
    group: {
        groupId: string,
        name: string
    }
  },
  lookList: [
    {
      lookId: string,
      lookDate: string,
      itemList: [
        {
          lookItemListId: string,
          item: {
            itemId: string,
            name: string,
            brandName: string,
            imageUrl: string,
            price: string,
            unit: string,
            category: string
          }
        },
      ],
      imageUrlList: [
        string
      ]
    }
  ]
}
