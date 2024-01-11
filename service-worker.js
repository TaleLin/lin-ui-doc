/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a03fd3859de3bf3be2b6a860af504b95"
  },
  {
    "url": "assets/css/0.styles.689aced7.css",
    "revision": "737568d26e5024370ef982e18df08307"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fd6d5d53.js",
    "revision": "28cae6a02fbee9d3f7f19b3d66e40705"
  },
  {
    "url": "assets/js/11.c2c9665b.js",
    "revision": "7eee666646e54e747d9fbf186f0fc972"
  },
  {
    "url": "assets/js/12.5d1b8f77.js",
    "revision": "27ec9e8f759054d31114778f0156e021"
  },
  {
    "url": "assets/js/13.e5f26613.js",
    "revision": "ccc82a5aba6f0f8ff3aa3df250b02473"
  },
  {
    "url": "assets/js/14.7596a5bc.js",
    "revision": "3370d5b66323c338b0fcc190104da98d"
  },
  {
    "url": "assets/js/15.97b4abc3.js",
    "revision": "f56992d67453ec49cf624af9e113610b"
  },
  {
    "url": "assets/js/16.9fc55212.js",
    "revision": "91e8207c490b0e1536a74c8354a27ea8"
  },
  {
    "url": "assets/js/17.898e6727.js",
    "revision": "21e90207fa95b026e3a553f9227a8dac"
  },
  {
    "url": "assets/js/18.051b4975.js",
    "revision": "57483f68721dac61387e74b48752ba56"
  },
  {
    "url": "assets/js/19.c1b43f19.js",
    "revision": "0caa875b283e4c063f154a87e47dd0ae"
  },
  {
    "url": "assets/js/2.9db51047.js",
    "revision": "25a7aa3d1887704ada155695c0d70553"
  },
  {
    "url": "assets/js/20.7988d2c3.js",
    "revision": "21ecf84b8bcb2fe1aafc38161b971ef6"
  },
  {
    "url": "assets/js/21.1b0799b5.js",
    "revision": "5111d712ea1b92aa760500750c077c11"
  },
  {
    "url": "assets/js/22.f8468083.js",
    "revision": "46331f9940d12a6929acc4e2b9e4d679"
  },
  {
    "url": "assets/js/23.048195b5.js",
    "revision": "5132c4e85518d8ee57947a18f4977b9a"
  },
  {
    "url": "assets/js/24.46cba89e.js",
    "revision": "ad5da0eeb4be89d462e37f7fc8283b29"
  },
  {
    "url": "assets/js/25.6686a0bd.js",
    "revision": "5474bb345516d7634059fd0ec8b16c84"
  },
  {
    "url": "assets/js/26.d95bbbe5.js",
    "revision": "adbff598f31a9e4b0af014b908c1d947"
  },
  {
    "url": "assets/js/27.48e1cbe9.js",
    "revision": "c4ef442ae8a2f7dde9bfb2677f6fe241"
  },
  {
    "url": "assets/js/28.c987f832.js",
    "revision": "901ec0c940c47d95dc96eab8e314b6cc"
  },
  {
    "url": "assets/js/29.7ce92a41.js",
    "revision": "2ba322928b0817a0800da2d1b29ab935"
  },
  {
    "url": "assets/js/3.43e67a98.js",
    "revision": "61f307afd0ce7bb32b09910abf81d4b7"
  },
  {
    "url": "assets/js/30.33cc8a3f.js",
    "revision": "d8266966667ed0c932ac0e47865c11fd"
  },
  {
    "url": "assets/js/31.a8bebd26.js",
    "revision": "e466ed4aa11e2f854dabe560980414ab"
  },
  {
    "url": "assets/js/32.991723ec.js",
    "revision": "9f3b303b0f21c3c666e65d982d4fe773"
  },
  {
    "url": "assets/js/33.1c9c8132.js",
    "revision": "f98c38b5b1c497e9b5c952143c51210e"
  },
  {
    "url": "assets/js/34.5b361f2d.js",
    "revision": "778129ce8e832fe3cc0633ae7300a6cd"
  },
  {
    "url": "assets/js/35.9a382338.js",
    "revision": "7b285791ff166dd1623b429b649b9f92"
  },
  {
    "url": "assets/js/36.29e7456e.js",
    "revision": "181b86eb88d0a6983c7cadb388de3ad7"
  },
  {
    "url": "assets/js/37.33a9fcd2.js",
    "revision": "def593a03dab743f287636e163d3c079"
  },
  {
    "url": "assets/js/38.b9242b6e.js",
    "revision": "8f76e9687df481b3a2822dc9cedfc684"
  },
  {
    "url": "assets/js/39.2d00a415.js",
    "revision": "037904c85d1d45566177237ade295daa"
  },
  {
    "url": "assets/js/4.da25035e.js",
    "revision": "14597c9be3ca348d452f783daecac2df"
  },
  {
    "url": "assets/js/40.13f8f6b7.js",
    "revision": "72dffc17873a58d4df01b6d93a79d763"
  },
  {
    "url": "assets/js/41.91cc325d.js",
    "revision": "055fbf8b0a0ce5ea1b9980b69f70235e"
  },
  {
    "url": "assets/js/42.4d2b9307.js",
    "revision": "8e648dece4b56bf201a48a5482b6c2a9"
  },
  {
    "url": "assets/js/43.637fa1eb.js",
    "revision": "e229d8c984342d6c6d888e4815fa3918"
  },
  {
    "url": "assets/js/44.375ff632.js",
    "revision": "b763696d63d3d92fb03883e57065ae89"
  },
  {
    "url": "assets/js/45.1fd93c3d.js",
    "revision": "4b2577de4556097d20e76e8d7a6f7c04"
  },
  {
    "url": "assets/js/46.9c9b811e.js",
    "revision": "2afec67b4ba35cf5354f0e4f632430bc"
  },
  {
    "url": "assets/js/47.b96924d8.js",
    "revision": "689794a5029a5354f35eae5c868388ad"
  },
  {
    "url": "assets/js/48.6a1278fa.js",
    "revision": "4d9b43965244e4165395f8c17aceedf2"
  },
  {
    "url": "assets/js/49.891fb22b.js",
    "revision": "0f5f5e42f4a4c1d826d3e9ed9698a8d2"
  },
  {
    "url": "assets/js/5.bb64fdf1.js",
    "revision": "77bc600ffb2cbb822937b24e7b40671a"
  },
  {
    "url": "assets/js/50.c578d8e3.js",
    "revision": "6ed0a027c2b2904e20a687251a66e8a8"
  },
  {
    "url": "assets/js/51.03212c58.js",
    "revision": "79cf27684c30b379dd14d4308c3e25ff"
  },
  {
    "url": "assets/js/52.63838a2d.js",
    "revision": "6481bd9b2431e76b31ed3e7d074921b8"
  },
  {
    "url": "assets/js/53.984db6b0.js",
    "revision": "373cd18e1c3bcba823b6f42e501006e5"
  },
  {
    "url": "assets/js/54.cb12252a.js",
    "revision": "3d4d046257a12d935ea5c264fcddf4a5"
  },
  {
    "url": "assets/js/55.41db8358.js",
    "revision": "9f906ea05851f04fcd4a5fb6857562cc"
  },
  {
    "url": "assets/js/56.643ef5cb.js",
    "revision": "b03b6ce13ceaa9d2a7a17306a9d4d707"
  },
  {
    "url": "assets/js/57.0d02bf2a.js",
    "revision": "fbe06099ec90935bd0774822f849c525"
  },
  {
    "url": "assets/js/58.d1e0b0ae.js",
    "revision": "90c210dca2b37d6d8c0d9df9aad98af8"
  },
  {
    "url": "assets/js/59.9f6a25e9.js",
    "revision": "a291c04ed662a88aaffc8a4702bb857b"
  },
  {
    "url": "assets/js/6.b36f9542.js",
    "revision": "b74eef43faf02bb4a015f0737d1f7677"
  },
  {
    "url": "assets/js/60.a1902eac.js",
    "revision": "5f9a94771eb39a014408fa2bbd81495d"
  },
  {
    "url": "assets/js/61.18bd75ee.js",
    "revision": "08a6148e044205fd737de4a1179439c4"
  },
  {
    "url": "assets/js/62.4db52e2b.js",
    "revision": "c2cad313398d29f4fff2e5f1024ae6b4"
  },
  {
    "url": "assets/js/63.b182fd08.js",
    "revision": "bcda2a5ff9ac778d4979dd42dd34bbb3"
  },
  {
    "url": "assets/js/64.9ca24a3d.js",
    "revision": "c99ee6f67d18b0360befa1a88aa682e7"
  },
  {
    "url": "assets/js/65.31532a1e.js",
    "revision": "89cf221180aa5113b3a70b3f5812ea19"
  },
  {
    "url": "assets/js/66.a54d80d9.js",
    "revision": "739ef526a4bd76edce2e11a283446ad6"
  },
  {
    "url": "assets/js/67.9e2af08e.js",
    "revision": "1d3a8e127821a7b1f88cd93d93c9f012"
  },
  {
    "url": "assets/js/68.0e8d0def.js",
    "revision": "cd87c68c0f54826f7711468816d0acf5"
  },
  {
    "url": "assets/js/69.ae162fe1.js",
    "revision": "7b7f3b90bbcaced25be0c410c3294e5b"
  },
  {
    "url": "assets/js/7.2d8c6aad.js",
    "revision": "38570773febbc07297aa840efa905637"
  },
  {
    "url": "assets/js/70.ebba6813.js",
    "revision": "4f3d39e5bd0584e41aa7860476564a42"
  },
  {
    "url": "assets/js/71.99047eae.js",
    "revision": "b0a4b9e2bc5808bd3cb49c18dd8344de"
  },
  {
    "url": "assets/js/72.f3415c6d.js",
    "revision": "2375b0f314317322d4f33ec12a4ad1d8"
  },
  {
    "url": "assets/js/73.22036f2d.js",
    "revision": "00234c2dbfac1aa131a20b413f26bf79"
  },
  {
    "url": "assets/js/74.11b2ba94.js",
    "revision": "2405e7f9b59547d123d378dc367b6ded"
  },
  {
    "url": "assets/js/75.bedb1c10.js",
    "revision": "6c8be9e227596d0e087178d03d8ce650"
  },
  {
    "url": "assets/js/76.1eb90467.js",
    "revision": "fd65020645c4904a6e284c897d2f19ad"
  },
  {
    "url": "assets/js/77.e6c5b7c6.js",
    "revision": "d4699be923367294570a3a6fe4eb5d01"
  },
  {
    "url": "assets/js/78.6de3634e.js",
    "revision": "b7e96de5623059a7edfd269733a29838"
  },
  {
    "url": "assets/js/79.22450250.js",
    "revision": "4ac48fec2b6049cbbb134941620b17dd"
  },
  {
    "url": "assets/js/8.402e3d98.js",
    "revision": "3b8d7c2503a9af153563213628b2c985"
  },
  {
    "url": "assets/js/80.09b65273.js",
    "revision": "7cbb9aea3bfe0032cc2b244d12251b9a"
  },
  {
    "url": "assets/js/81.d1a528ea.js",
    "revision": "2be1b0845067c1255e193ba82b352950"
  },
  {
    "url": "assets/js/82.43d5700e.js",
    "revision": "edc38416950dda0b4914d5151c60a89d"
  },
  {
    "url": "assets/js/83.aed308c8.js",
    "revision": "a5112c6fe2ae7def5c56d1ac38008d77"
  },
  {
    "url": "assets/js/84.55a1422b.js",
    "revision": "69753b15e51bf63766ef6f1133e14734"
  },
  {
    "url": "assets/js/9.42f77084.js",
    "revision": "874acf26cef8eb81e4150d2977c27881"
  },
  {
    "url": "assets/js/app.b3612f81.js",
    "revision": "b838b6c1f29d1bf1b4663076be582ae4"
  },
  {
    "url": "cli/index.html",
    "revision": "01327eef662a68f971b5f87e8e4ae29e"
  },
  {
    "url": "cli/introduce.html",
    "revision": "d46183eaac7a2ed46d307559b918018a"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "d75d9cbbbbdd1ab66a6b95cce55e787b"
  },
  {
    "url": "component/basic/button.html",
    "revision": "69a6c31f2762101ecb2c7fb927eb4bed"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "9ce77cfe7ecc2e95c9091c6e3ec8ac3b"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "d5164dc20e75917fb77c36b346207382"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "bcafc71141f28f85abadc88192846735"
  },
  {
    "url": "component/form/form.html",
    "revision": "77285524cb601e3b0b84be845311de36"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "e818bb689e0737d6e58c4bcf5d38a8e9"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "05f6294c9845ac115c471c818ce5f50f"
  },
  {
    "url": "component/form/input.html",
    "revision": "51d76720233c60b0e6023fd37966d8f2"
  },
  {
    "url": "component/form/radio.html",
    "revision": "6675da02c9b5a63e352f6d09658eca4e"
  },
  {
    "url": "component/form/rate.html",
    "revision": "4e78f7319241451dbaf067149657eac2"
  },
  {
    "url": "component/form/rules.html",
    "revision": "967c2e12fbfc6e6c9e07e7748dcb551c"
  },
  {
    "url": "component/form/switch.html",
    "revision": "85bcad00ea77ea26faad9610acf25b6e"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "9cfad9e25df6ef4df4178146c3d929dd"
  },
  {
    "url": "component/layout/album.html",
    "revision": "3f98cef1b43e8ce6136387b9a835076f"
  },
  {
    "url": "component/layout/card.html",
    "revision": "c8a8d4c75f24a128910ad15f1ad7a046"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "3806c5d4b9c78cae53890c8bb848af10"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "c7d84d29dac7f425f2bb8440ad9498c1"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "8be3b2d6f721b61f97dd6fbd3685ed2f"
  },
  {
    "url": "component/layout/list.html",
    "revision": "0783a9edf3b847cfca1177b61f6178ab"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "1141ede5131a8da378d28d8173bbbc36"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "fb1f8628b01b626b2a60c65696ee15ff"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "21c250b8cf73bf960eaa9d943f389819"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "ff0a80ca486301b0c7bfa676e0d82078"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "ca4e46446b3b3f4e1e0d0db07386a8bb"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "10f0ab2db5dacc867e4e362e88dc390d"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "bea46ba298f3160635ff617086501b22"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "5f480d40c44185417569035b029f526e"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "cb4cf5681224af132f7ddffe236c9790"
  },
  {
    "url": "component/response/message.html",
    "revision": "98411a2489e55522fdff7df29e09a93d"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "f665cfad09e1e58d170d3ca59045094c"
  },
  {
    "url": "component/response/toast.html",
    "revision": "e0cd0b8ee4d4a782835a3c44a8fb1129"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "96500cf50aeee67e80bb7281d0ea4d97"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "741353d2b8af0aee954d928d96dc85f1"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "63279a2a95cf37dbabdcf47e63a56648"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "5e8f8c70d7f820e2e322a09735366208"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "568e0f6e2518664720df2a2e83663a1c"
  },
  {
    "url": "component/view/badge.html",
    "revision": "8a32cf06f2f0667be6f08f78ba7c27cf"
  },
  {
    "url": "component/view/circle.html",
    "revision": "229c0a976e87d06abb74393ef26d1e6a"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "2e10edb4ad3a6582c765f85df3d55034"
  },
  {
    "url": "component/view/loading.html",
    "revision": "841c4ede76e504ee4ee1bb56f37bcdf8"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "9b2488e929e5b568872d57f2180ba508"
  },
  {
    "url": "component/view/mask.html",
    "revision": "eb92e4c1b8b7a8036af7e4fc8dd6c1fb"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "d7f86e1bc24335b209ec349bdc779dbb"
  },
  {
    "url": "component/view/popover.html",
    "revision": "9b13bb54ea686bd70b36197b1154ac40"
  },
  {
    "url": "component/view/popup.html",
    "revision": "8f38872dee93bd56229b3c265c9760ed"
  },
  {
    "url": "component/view/progress.html",
    "revision": "555211ec598f1ca6ee1e4eb44b71ab25"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "d7aad2acb3721e078c1f21f2d394f9c4"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "9e14ddd8647a47a022b9c67a4d37e8cd"
  },
  {
    "url": "component/view/steps.html",
    "revision": "3f5dea5c303d67264cb38f3ea77a3d82"
  },
  {
    "url": "component/view/tag.html",
    "revision": "39bf9226cdf6e185209c328217d368bd"
  },
  {
    "url": "filter/array.html",
    "revision": "46c75fb27117d04decd496c686edceba"
  },
  {
    "url": "filter/classnames.html",
    "revision": "8f3b51a2116420f3ae48a80a0ce9b176"
  },
  {
    "url": "filter/index.html",
    "revision": "ddb1ac19c83ef238f710e1ddb7c61515"
  },
  {
    "url": "filter/is.html",
    "revision": "88753c2d3dcf108531d397a36306e9f7"
  },
  {
    "url": "filter/string.html",
    "revision": "608b0c037a4b043b2102dbd02c27d269"
  },
  {
    "url": "function/index.html",
    "revision": "319b907144c2a0ef150e923dfee5675c"
  },
  {
    "url": "function/promisic.html",
    "revision": "9c60ffc3115fb09d6da023ab3d573392"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "7339f5dd7d59149312047cbf9a940b53"
  },
  {
    "url": "images/left-logo.png",
    "revision": "fbe4490ed391b0f4d74d329343b72321"
  },
  {
    "url": "images/mini-program-code.jpg",
    "revision": "342f44d97b4878d1319cd1e0158b5966"
  },
  {
    "url": "imooc/index.html",
    "revision": "f42d6c0caab350e6f98eccb22f701bd6"
  },
  {
    "url": "index.html",
    "revision": "3df615c0e93a5a6feb43a3d8bb72aa2d"
  },
  {
    "url": "js/highlight.js",
    "revision": "1e6d77c2d9fb5a775f3b813536393a6b"
  },
  {
    "url": "screenshots/album/image1.jpeg",
    "revision": "19f6f691061a258a899fc036bc02d075"
  },
  {
    "url": "screenshots/album/image2.jpeg",
    "revision": "99f9a5b92b79fafe14d92966725fe619"
  },
  {
    "url": "screenshots/album/image3.jpeg",
    "revision": "36fba818bcc1be28ebec5ac8aca49fd7"
  },
  {
    "url": "screenshots/arc-popup/1.png",
    "revision": "405c9ae4e51a604ad45cade1732a8a98"
  },
  {
    "url": "screenshots/arc-popup/2.png",
    "revision": "d95a2a37ecf77b2fd9a1c41ce67c969c"
  },
  {
    "url": "screenshots/arc-popup/3.png",
    "revision": "0ff5e5b2f0d9573eed6cfc069efb3ab7"
  },
  {
    "url": "screenshots/arc-popup/4.png",
    "revision": "52107a32f463159369142a18e8198fc9"
  },
  {
    "url": "screenshots/arc-popup/5.png",
    "revision": "47b0b345d6dfc541028c85808124d68c"
  },
  {
    "url": "screenshots/arc-popup/6.png",
    "revision": "712955124766189ea46f016e6efe08e0"
  },
  {
    "url": "screenshots/arc-popup/7.png",
    "revision": "51f32dd0e673e87ae9e830a1cd78f03d"
  },
  {
    "url": "screenshots/arc-popup/8.png",
    "revision": "c9fb1bb9088a9026b5700ecb62cb700a"
  },
  {
    "url": "screenshots/avatar/1.png",
    "revision": "2c0cafd1211287ab9ad2dc0e04cd7f99"
  },
  {
    "url": "screenshots/avatar/2.png",
    "revision": "3dad3a7d8992b49f8b21338773da42ba"
  },
  {
    "url": "screenshots/avatar/3.png",
    "revision": "b5cab5019dfaa780dabe12e87c979ddc"
  },
  {
    "url": "screenshots/avatar/4.png",
    "revision": "d54656eb56414851bd0d09da889f83d1"
  },
  {
    "url": "screenshots/avatar/5.png",
    "revision": "4d4f3215a442a2d1a276771fca1fc69f"
  },
  {
    "url": "screenshots/avatar/6.png",
    "revision": "afc45c11c78d2e07d59e902b4d8b61ba"
  },
  {
    "url": "screenshots/badge/1.png",
    "revision": "382eacc9661e24ffaad91939f57cde9f"
  },
  {
    "url": "screenshots/badge/2.png",
    "revision": "3c52f536bc29175e2b57676b8f98a6c0"
  },
  {
    "url": "screenshots/button/1.png",
    "revision": "04eaa7a455836b9430d804a16d3eee33"
  },
  {
    "url": "screenshots/button/2.png",
    "revision": "6ef32a7f621b314bdaeb9610545e13ae"
  },
  {
    "url": "screenshots/button/3.png",
    "revision": "df03ce12fdc7af5a6a86134ee5b50ca9"
  },
  {
    "url": "screenshots/button/4.png",
    "revision": "933ee45201d677d002336104209d88a1"
  },
  {
    "url": "screenshots/button/5.png",
    "revision": "6f9b7502529f5bb45ef965d645df7417"
  },
  {
    "url": "screenshots/button/6.png",
    "revision": "8a9ae66badf043c19c65be586c25dd0f"
  },
  {
    "url": "screenshots/button/7.png",
    "revision": "3fc37ec8b29052422188dabf12eaf4c7"
  },
  {
    "url": "screenshots/button/8.png",
    "revision": "5a276ae9965b4aba775335569d849487"
  },
  {
    "url": "screenshots/button/9.png",
    "revision": "a689818ec6804642acc3fca922c64bc0"
  },
  {
    "url": "screenshots/card/image1.png",
    "revision": "9038f35882d7d32d6d01be1ea4e78ad0"
  },
  {
    "url": "screenshots/card/image2.png",
    "revision": "5e2180190feb2620401b89208ee96bf9"
  },
  {
    "url": "screenshots/card/image3.png",
    "revision": "28d052078963621eb3028c5fd2d9ab49"
  },
  {
    "url": "screenshots/card/image4.png",
    "revision": "4d54b843d8afe0a13b378c3980016ab7"
  },
  {
    "url": "screenshots/card/image5.png",
    "revision": "d9bff0d60400d58ec7dd65d54f1f1875"
  },
  {
    "url": "screenshots/card/image6.png",
    "revision": "ea4c215f75d37c4f778a87f7904dc6e6"
  },
  {
    "url": "screenshots/collapse/collapse-accordion-case.gif",
    "revision": "cae6ea99b1621b3963c17d41b106009b"
  },
  {
    "url": "screenshots/collapse/collapse-base-case.gif",
    "revision": "25cea2f4f7420c86dbcfa6413fe457e7"
  },
  {
    "url": "screenshots/collapse/collapse-custom-title.jpg",
    "revision": "f838cd121205e7dd0de234295988dff0"
  },
  {
    "url": "screenshots/countdown/1.png",
    "revision": "56b9f07c4c067533df5f62a00290b261"
  },
  {
    "url": "screenshots/countdown/2.png",
    "revision": "cbe591d5b150e34c3fd50563147777b6"
  },
  {
    "url": "screenshots/countdown/3.png",
    "revision": "dfa0b9ae542f16505fee13b3c1d43a0c"
  },
  {
    "url": "screenshots/countdown/4.png",
    "revision": "abeba1477b06369ecd5fd18e6aa9cc7e"
  },
  {
    "url": "screenshots/counter/1.png",
    "revision": "b24cf41f0c1e5ce6dcc573b9145de950"
  },
  {
    "url": "screenshots/counter/2.png",
    "revision": "dd29c0887125743b5468d48bfe69a0da"
  },
  {
    "url": "screenshots/counter/3.png",
    "revision": "37e60af5a9f7a3695a2138e84fffadff"
  },
  {
    "url": "screenshots/dialog/1.jpg",
    "revision": "6572fa1cfa109e72ab3a8906f678df9c"
  },
  {
    "url": "screenshots/dialog/2.jpg",
    "revision": "5932716687961abb5f3be86b75cb830a"
  },
  {
    "url": "screenshots/dialog/3.jpg",
    "revision": "8e2041cb6f243f3afda1f89acfa90fba"
  },
  {
    "url": "screenshots/dialog/4.jpg",
    "revision": "25558ac69932a24b7f65ef6d09101fa8"
  },
  {
    "url": "screenshots/form/image1.png",
    "revision": "44a3064244f9d074bca6aa1418b31f69"
  },
  {
    "url": "screenshots/form/image2.png",
    "revision": "38bdb959ec1f3dcd0c4582e9ec8b51e4"
  },
  {
    "url": "screenshots/form/image3.png",
    "revision": "96baefbb9da403db28fefc2cd93aea48"
  },
  {
    "url": "screenshots/form/image4.png",
    "revision": "da791b8b64d43f135e43e6f080a88593"
  },
  {
    "url": "screenshots/form/image5.png",
    "revision": "5a34228c0c5da647ae1b3eb8710666fb"
  },
  {
    "url": "screenshots/grid/image1.png",
    "revision": "e941daec641c2f8d82b0088f240573bd"
  },
  {
    "url": "screenshots/grid/image2.png",
    "revision": "4ae1b85b23bef8c5f34c70cafd016b24"
  },
  {
    "url": "screenshots/grid/image3.png",
    "revision": "57aa7f4b42042e276c2ec24872a46860"
  },
  {
    "url": "screenshots/icon/1.png",
    "revision": "b7f962fa4c87846021de25a2c27bbc32"
  },
  {
    "url": "screenshots/icon/2.png",
    "revision": "a57a4705e0979809d09ca3eb4bd58140"
  },
  {
    "url": "screenshots/icon/3.png",
    "revision": "d7832e3cd2058fc6d7a22dc45cae18ba"
  },
  {
    "url": "screenshots/icon/4.png",
    "revision": "a14b67c8e44543c37f7f8a6a98a7c059"
  },
  {
    "url": "screenshots/icon/5.jpg",
    "revision": "627539057c04ad8affa62da598386454"
  },
  {
    "url": "screenshots/image-clipper/demo1.png",
    "revision": "762f1d414a219c659161f286bca3ea2b"
  },
  {
    "url": "screenshots/image-clipper/demo2.png",
    "revision": "f668764d9d48885a83c4a20639c28284"
  },
  {
    "url": "screenshots/image-clipper/demo3.png",
    "revision": "1aefaf1063e00bf5a421d450d7dbd8b0"
  },
  {
    "url": "screenshots/image-clipper/image-clipper.png",
    "revision": "a26e8b394cc0980bacf416d3ad81aa3d"
  },
  {
    "url": "screenshots/image-picker/image1.jpg",
    "revision": "1ee878ccba4cf94f2977a245df751c39"
  },
  {
    "url": "screenshots/image-picker/image2.jpg",
    "revision": "dd131b063942ff48ac097993d6fe386f"
  },
  {
    "url": "screenshots/image-picker/image3.jpg",
    "revision": "9bdebc64a7a8b6cde2368521bca6d6de"
  },
  {
    "url": "screenshots/index-list/basic-concept.png",
    "revision": "c8b873e144c0c32d1d323fdd268cbc32"
  },
  {
    "url": "screenshots/input/image1.png",
    "revision": "870691aa8b2bb57fbbf7566ff80bcdad"
  },
  {
    "url": "screenshots/input/image2.png",
    "revision": "40c70942f28efdce1dcb59b392f8a9b9"
  },
  {
    "url": "screenshots/input/image3.png",
    "revision": "2e176a30b685b9c4d2154fc34a93bc98"
  },
  {
    "url": "screenshots/input/image4.png",
    "revision": "0ad86871d3ff6bbaa37417cf54b21b3b"
  },
  {
    "url": "screenshots/input/image5.png",
    "revision": "1d7d2810345766e71f9b9383d5168eaa"
  },
  {
    "url": "screenshots/input/image6.png",
    "revision": "eb23b7be70b3aed76cb1c498546a380d"
  },
  {
    "url": "screenshots/input/image7.png",
    "revision": "1c9e38f6b6b29d794031f313d9ac6046"
  },
  {
    "url": "screenshots/input/image8.png",
    "revision": "5c4f7473111a08378c85d11603beafa5"
  },
  {
    "url": "screenshots/list/image1.png",
    "revision": "a402a6ede7d1e2a8cf308a52bf968a1b"
  },
  {
    "url": "screenshots/list/image2.png",
    "revision": "b7d838fbe2ab0cbd43fc63a91c453c13"
  },
  {
    "url": "screenshots/list/image3.png",
    "revision": "4247db589635ed821f884e67e5036856"
  },
  {
    "url": "screenshots/list/image4.png",
    "revision": "5b7757a829504c6dadf8ec12d5257619"
  },
  {
    "url": "screenshots/list/image5.png",
    "revision": "7686716486829caa2e0db5f71c0058dd"
  },
  {
    "url": "screenshots/load-more/1.jpg",
    "revision": "f794f1cdf85ae32a5d2a540538069c8a"
  },
  {
    "url": "screenshots/load-more/2.jpg",
    "revision": "ca2d6095b6eeb2522345bea6d99f1ada"
  },
  {
    "url": "screenshots/load-more/3.jpg",
    "revision": "7511ff95db81ac5ad3f23d7a97097806"
  },
  {
    "url": "screenshots/loading/1.png",
    "revision": "3b8bf98f51e204bfb12bd70cf26122b8"
  },
  {
    "url": "screenshots/loading/2.png",
    "revision": "8c55211cd15ef01fbfd37628bf299c85"
  },
  {
    "url": "screenshots/loading/3.png",
    "revision": "07e3d209dfd0e32e0422f64be278f0b1"
  },
  {
    "url": "screenshots/loading/4.png",
    "revision": "c3cae680b5eb5dd8efea6217197a18e6"
  },
  {
    "url": "screenshots/loading/5.jpg",
    "revision": "3037f10e2c0bbc34c065fcbfd567c103"
  },
  {
    "url": "screenshots/mask/1.jpg",
    "revision": "f9898f32283322679966e97dc8b4f669"
  },
  {
    "url": "screenshots/mask/2.jpg",
    "revision": "efafc595490a84a2d80f31b3271a0e2b"
  },
  {
    "url": "screenshots/mask/3.jpg",
    "revision": "581d8d14968fcaa5d955e11ff0f62e20"
  },
  {
    "url": "screenshots/message/1.png",
    "revision": "8f8545faa3cf9eb9e6e2da4eed277044"
  },
  {
    "url": "screenshots/message/2.png",
    "revision": "ad7fc0b208e304153c6136d8a17d48ce"
  },
  {
    "url": "screenshots/navigation-bar/1.png",
    "revision": "69904aabd58733fd878033e8b1979ca6"
  },
  {
    "url": "screenshots/notice-bar/1.png",
    "revision": "cca3a638ba6ac1faffceb6fa00cac8ed"
  },
  {
    "url": "screenshots/notice-bar/2.png",
    "revision": "e14b1d587345f51881a155e4aebc59fe"
  },
  {
    "url": "screenshots/notice-bar/3.png",
    "revision": "598ed25d464962ccdf595ea281360467"
  },
  {
    "url": "screenshots/popup/1.png",
    "revision": "749a94b8c3574f7655e993df6e150a07"
  },
  {
    "url": "screenshots/popup/2.png",
    "revision": "bcedbcbcbf9f93b06b4e0ce234a66437"
  },
  {
    "url": "screenshots/popup/3.png",
    "revision": "11cd699b8e2aa7385e023b43244eafa8"
  },
  {
    "url": "screenshots/price/1.jpg",
    "revision": "fd1f3998e89f39a6b9c0e5076880f314"
  },
  {
    "url": "screenshots/price/2.png",
    "revision": "7f390b583254fccf6750b351d3924dd8"
  },
  {
    "url": "screenshots/price/3.jpg",
    "revision": "fd1f3998e89f39a6b9c0e5076880f314"
  },
  {
    "url": "screenshots/progress/1.png",
    "revision": "6d2259b74e8eb8f34ee21b2dbe80af40"
  },
  {
    "url": "screenshots/progress/2.png",
    "revision": "ecc833029b735a5238ad0c6b48503cec"
  },
  {
    "url": "screenshots/progress/3.png",
    "revision": "6d2259b74e8eb8f34ee21b2dbe80af40"
  },
  {
    "url": "screenshots/progress/4.png",
    "revision": "97c87cfbc0a4e4f6c34a782fdc0d6510"
  },
  {
    "url": "screenshots/progress/5.png",
    "revision": "aa9bfe72341c6cec55820caa8cd394aa"
  },
  {
    "url": "screenshots/progress/6.png",
    "revision": "ed8d0345373fa5608c009110dab0b65a"
  },
  {
    "url": "screenshots/progress/7.png",
    "revision": "015e2842c05205c572e766a994e79a5a"
  },
  {
    "url": "screenshots/progress/8.png",
    "revision": "68988cf6580dbfc6302a6df8fa529d3f"
  },
  {
    "url": "screenshots/rate/image1.png",
    "revision": "1687398c1907c9f943ef25c8f2b7f76b"
  },
  {
    "url": "screenshots/rate/image2.png",
    "revision": "9a1c248d46556f41a15fd13f8b29cf88"
  },
  {
    "url": "screenshots/rate/image3.png",
    "revision": "5768c6890573c1ad77641d8001f78751"
  },
  {
    "url": "screenshots/rate/image4.png",
    "revision": "7bb88793b50dc4b94bf5d8240e11a82b"
  },
  {
    "url": "screenshots/rate/image5.png",
    "revision": "6d356bb1c73c65dfee75c878d12f6832"
  },
  {
    "url": "screenshots/rate/image6.png",
    "revision": "f586cb01e109e03bfa2ac1d374b999e1"
  },
  {
    "url": "screenshots/rate/image7.png",
    "revision": "b297428070e3d03cc1363a4492fc20b1"
  },
  {
    "url": "screenshots/rate/image8.png",
    "revision": "6ab78b75b4d360c0c102828030b957a7"
  },
  {
    "url": "screenshots/readme/lin-ui小程序.jpg",
    "revision": "342f44d97b4878d1319cd1e0158b5966"
  },
  {
    "url": "screenshots/readme/qq新群.png",
    "revision": "9641ad94ec8d57741bbbde74e02a8b98"
  },
  {
    "url": "screenshots/readme/公众号.jpg",
    "revision": "6ba5747f774f4b6e2d4d7f6acdba7814"
  },
  {
    "url": "screenshots/readme/风袖.jpg",
    "revision": "f89e474cf0c196a2e57e8032e04f7712"
  },
  {
    "url": "screenshots/search-bar/1.png",
    "revision": "55cabb17a1e78a69d6bc6a7bd93f97cb"
  },
  {
    "url": "screenshots/search-bar/2.jpg",
    "revision": "13b481302e4242271d84b388346b5f30"
  },
  {
    "url": "screenshots/search-bar/3.png",
    "revision": "fbe2e984d332891b83fb6f9973197aa2"
  },
  {
    "url": "screenshots/search-bar/4.png",
    "revision": "3d707c0ad0e13bc788cd2765166f0914"
  },
  {
    "url": "screenshots/segment/1.jpeg",
    "revision": "2e7fae31e45535ce52870f71bf895833"
  },
  {
    "url": "screenshots/segment/2.jpeg",
    "revision": "ca96f3384530c04ddadde6bc54515784"
  },
  {
    "url": "screenshots/segment/3.jpeg",
    "revision": "1fc6d1ca1574d780771fa8434f59da46"
  },
  {
    "url": "screenshots/segment/bottom.png",
    "revision": "86646c3fbe692e2f0b37d86ecd93ae3b"
  },
  {
    "url": "screenshots/segment/left.png",
    "revision": "fa17f505a11b26c6c5115b80a95c2d9a"
  },
  {
    "url": "screenshots/segment/right.png",
    "revision": "b9f9ee4bb2a5d62779c35313a6e849dc"
  },
  {
    "url": "screenshots/segment/top.png",
    "revision": "8b6fbcf1f66a5dda4fd3b7a810d9522c"
  },
  {
    "url": "screenshots/skeleton/1.png",
    "revision": "9144ff1be4f82a7651538ec103a67efb"
  },
  {
    "url": "screenshots/skeleton/2.png",
    "revision": "074d2aaf552135f54ec036f7fc82fad9"
  },
  {
    "url": "screenshots/skeleton/3.png",
    "revision": "4e62d2e854da02e3baa543dda0472bbf"
  },
  {
    "url": "screenshots/slide-view/1.jpg",
    "revision": "d9dd583009dd17f533077671968980a5"
  },
  {
    "url": "screenshots/slide-view/2.jpg",
    "revision": "e6bf1a4be3d5a9b0a94541265abbf368"
  },
  {
    "url": "screenshots/slide-view/3.jpg",
    "revision": "4c235a726374f8757334e58ec1c587e8"
  },
  {
    "url": "screenshots/start/YUdIR2E3ME5weEVCVEZMbkRGRHZaRWdTWE9UMzd1Y3ZkN2dHUjBHY2xSS1daZjl0QTkvOVVBPT0.png",
    "revision": "3f83002233ab8eb79ffc2a2cbc972b90"
  },
  {
    "url": "screenshots/start/YUdIR2E3ME5weEZEa3ErKzdJRGVNckFIWUZrS0ZKeWNOUnpxSXh5MlRKQU9Jakh6WnRXenVRPT0.png",
    "revision": "64d624eeecb518fe603a58288ca5c432"
  },
  {
    "url": "screenshots/steps/1.png",
    "revision": "17c1adf64e24b60328ec429829f7552e"
  },
  {
    "url": "screenshots/steps/2.png",
    "revision": "8eb5012326fe5f49a959530efcb30f8c"
  },
  {
    "url": "screenshots/steps/3.png",
    "revision": "a71794e0ed7530a84f0fd0ec83bdd9ba"
  },
  {
    "url": "screenshots/steps/4.png",
    "revision": "dfee8779eff00cd07f83425961437643"
  },
  {
    "url": "screenshots/steps/5.png",
    "revision": "cac8353d139e740f26b6c57f10df831b"
  },
  {
    "url": "screenshots/steps/6.png",
    "revision": "046bb24bfc19608830d768be31adb914"
  },
  {
    "url": "screenshots/steps/7.png",
    "revision": "9f332c4caa74ad38683a7e2196671382"
  },
  {
    "url": "screenshots/steps/8.png",
    "revision": "06a68f3bb78f859cb82c1c623a3bc98f"
  },
  {
    "url": "screenshots/tab-bar/1.png",
    "revision": "f0e1b88581d0eb52ea6ad64b49d70e07"
  },
  {
    "url": "screenshots/tab-bar/2.png",
    "revision": "7a14484c49e928122238be0f479db582"
  },
  {
    "url": "screenshots/tabs/1.png",
    "revision": "e001f57c9a4c76dcab5fe1008a818237"
  },
  {
    "url": "screenshots/tag/1.png",
    "revision": "9cd12ba33f503df7af99ab226c033ac3"
  },
  {
    "url": "screenshots/tag/2.png",
    "revision": "77b5499687383ac3838ab7b58a10a1ed"
  },
  {
    "url": "screenshots/tag/3.png",
    "revision": "d320cb1caa8b85d693cb6fcf22f7d577"
  },
  {
    "url": "screenshots/tag/4.png",
    "revision": "c06fa905e65ad9bee5501b06ed88f1d9"
  },
  {
    "url": "screenshots/tag/5.png",
    "revision": "3b8f0bfdca2ab3a66cf6298826ba93e9"
  },
  {
    "url": "screenshots/toast/1.jpg",
    "revision": "71dabb958cbb88a1ef67741918d6b81e"
  },
  {
    "url": "screenshots/toast/2.png",
    "revision": "16fd327bb1fb49c8a2f6cdd8c452a010"
  },
  {
    "url": "screenshots/toast/3.png",
    "revision": "64649752994baa28d4802af5ecad8c86"
  },
  {
    "url": "screenshots/toast/4.jpg",
    "revision": "0b2030a996cc9e2e689d6cb99aa4f49d"
  },
  {
    "url": "screenshots/toast/5.jpg",
    "revision": "ae9a593548e38c36be6a146d65c4a58b"
  },
  {
    "url": "start/class.html",
    "revision": "98f4826bb5aaec2eecd032d61d0edffe"
  },
  {
    "url": "start/component.html",
    "revision": "0e0609f791fc4f13d5a3717a7c53bd58"
  },
  {
    "url": "start/contribute.html",
    "revision": "3ae0281f610a796ce1c79fe8ee245c44"
  },
  {
    "url": "start/event.html",
    "revision": "5f2d2a8171f7f4fb2e107a91beec976f"
  },
  {
    "url": "start/index.html",
    "revision": "c78aeb2c50b8d70e68a0d3dc2e593559"
  },
  {
    "url": "start/open-function.html",
    "revision": "f995e6ecd6c697dda2637da9210b6839"
  },
  {
    "url": "start/QA.html",
    "revision": "440f617745c1b06846c3a9356828ca51"
  },
  {
    "url": "start/using.html",
    "revision": "ae59cd2be1ca4c142457611c29592617"
  },
  {
    "url": "start/wx.html",
    "revision": "08cafd57ccf8acddd3921fa2117386eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
