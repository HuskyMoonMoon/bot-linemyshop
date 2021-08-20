import LineShopScript from "../../support/LineShopScript"

export const list = [
    ["I LOVE YOU MOM 02 - Shirt & Shorts", "3T"],
    ["I LOVE YOU MOM 01 - Top & Pants", "3T"],
]
export const url = "https://shop.line.me/@956qorqj"
export const shopName = "BABY DIARY"
export const recipient = "พัชร เลิศอุดมธนา"

export const hours = 23
export const minutes = 30

LineShopScript({
    url,
    list,
    hours,
    minutes,
    shopName,
    recipient
})