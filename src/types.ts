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
  mainLookPostList: Array<LookCategory>,
}
interface LookCategory {
  categoryNameEN: string,
  categoryNameKR: string,
  lookPostList: Array<LookPost>,
}

interface LookPost {
  lookPostId: string,
  lookList: Array<Look>,
  celebrity: Celebrity,
  viewCount: string,
}

interface Look {
  lookId: string,
  lookDate: string, // 2024-03-05
  itemList: Array<Item>,
  fullImageUrlList: Array<Image>,
}

interface Image {
  fullImageId: string,
  imageUrl: string, // "/look/img/hyein.jpg"
}

interface Item {
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
}

interface Celebrity {
  celebrityId: string,
  name: string,
  viewCount: string,
  group: {
    groupId: string,
    name: string,
  }
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
