import * as db from "./db.js"

import {get, all, local} from "./tool.js"

const HOST = "//mykrystal.com"
const GET_URLS = {
    // fetchUserList: HOST + "/cms/fetchUserList",
}
const POST_URLS = {
    // newUploadImage:HOST+"/joy/merchant/newuploadimage",
}

const JSONP_URLS = {
    // setShopBoard:HOST+'/joy/merchant/setshopboard'
}

//本地Mock数据
const LOCAL_URLS = {
    fetchTeleTextList: db.teleTextList,
    fetchCarouselList: db.carouselList,
    fetchNavStore:db.navStore,
    fetchNavCarouselList:db.navCarouselList,
    fetchImglList:db.imgStore
}

const api = {
    // ...all(GET_URLS, POST_URLS, JSONP_URLS),
    ...local(LOCAL_URLS)//将请求mock到本地，有线上接口后注释本行
}

export default api