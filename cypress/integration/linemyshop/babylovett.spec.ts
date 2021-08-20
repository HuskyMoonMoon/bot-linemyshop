import * as moment from "moment";
import LineShopScript from "../../support/LineShopScript";

const list = [
    ["Rock Star 17 - Top and Shorts", "3T"],
    ["Rock Star 21 - Tank Top and Shorts", "3T"],
    ["Rock Star 20 - Romper", "18-24M"],
    ["Rock Star 19 - Romper", "18-24M"]
]

const url = "https://shop.line.me/@babylovett"
const shopName = "Baby Lovett"
const recipient = "พัชร เลิศอุดมธนา"

const hours = 14
const minutes = 0

LineShopScript({
    url,
    list,
    hours,
    minutes,
    shopName,
    recipient
})