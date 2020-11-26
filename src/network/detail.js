import {
  request
} from './request'
export function getGoodsDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopinfo) {
    this.logo = shopinfo.shopLogo
    this.name = shopinfo.name
    this.fans = shopinfo.cFans
    this.sells = shopinfo.cSells
    this.score = shopinfo.score
    this.goodsCount = shopinfo.cGoods
  }
}
