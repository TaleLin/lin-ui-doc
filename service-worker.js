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
    "revision": "b0b44ba41f4ad468cc1e094eb4d67d96"
  },
  {
    "url": "assets/css/0.styles.2ca54e38.css",
    "revision": "aeedf879aabfd4f8226b6b287f58350d"
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
    "url": "assets/js/12.2d19bdf5.js",
    "revision": "173f8c8362310c4b30b9f62ee9fc4d13"
  },
  {
    "url": "assets/js/13.e5f26613.js",
    "revision": "ccc82a5aba6f0f8ff3aa3df250b02473"
  },
  {
    "url": "assets/js/14.7041f51c.js",
    "revision": "1173ebd7d62d776677d9b9f2d9f49c51"
  },
  {
    "url": "assets/js/15.015ae1b1.js",
    "revision": "f67ba672607d26943900c14ee9759602"
  },
  {
    "url": "assets/js/16.9fc55212.js",
    "revision": "91e8207c490b0e1536a74c8354a27ea8"
  },
  {
    "url": "assets/js/17.5af8103c.js",
    "revision": "6830bf1009da395693e4829d0d1ff82b"
  },
  {
    "url": "assets/js/18.6ac59e9e.js",
    "revision": "2ba0e5dbf60534d78d72dfc768ade0a8"
  },
  {
    "url": "assets/js/19.0d6b6407.js",
    "revision": "a254c2bbb1dc9ce0abaf16f8826c3245"
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
    "url": "assets/js/21.fc88dbff.js",
    "revision": "fa8cd14344cda4fa762af37a1b0907fe"
  },
  {
    "url": "assets/js/22.4c3d37cd.js",
    "revision": "d50da8eadfd9630dbd5723bf6bba972e"
  },
  {
    "url": "assets/js/23.19d3e68a.js",
    "revision": "660721a24c4485e9999e040e6b902311"
  },
  {
    "url": "assets/js/24.46cba89e.js",
    "revision": "ad5da0eeb4be89d462e37f7fc8283b29"
  },
  {
    "url": "assets/js/25.8ab146e3.js",
    "revision": "37c20c1d1186661ca8c7e205144bb85f"
  },
  {
    "url": "assets/js/26.852a6901.js",
    "revision": "25d3dda48bcf2bdfe3d3bacdeb181fdf"
  },
  {
    "url": "assets/js/27.48e1cbe9.js",
    "revision": "c4ef442ae8a2f7dde9bfb2677f6fe241"
  },
  {
    "url": "assets/js/28.8b27021e.js",
    "revision": "5f9acc230f833bb5c81c1871bd71a147"
  },
  {
    "url": "assets/js/29.ff2fda09.js",
    "revision": "6af357449c269f6591beaea9e6c0e8c8"
  },
  {
    "url": "assets/js/3.43e67a98.js",
    "revision": "61f307afd0ce7bb32b09910abf81d4b7"
  },
  {
    "url": "assets/js/30.0bfbc272.js",
    "revision": "095edc37a14f0cf10ea4858c819d6f98"
  },
  {
    "url": "assets/js/31.7baec152.js",
    "revision": "27632f0e75e60c7fda8dcffc3605432b"
  },
  {
    "url": "assets/js/32.5035717d.js",
    "revision": "ff5965321c3c26d051dde572738113bb"
  },
  {
    "url": "assets/js/33.0c5e7a31.js",
    "revision": "5ca299e64c4463ad9a9c941f8902e265"
  },
  {
    "url": "assets/js/34.8070fe6a.js",
    "revision": "e27ad0df2fc2dce3b4159f230cd5cf60"
  },
  {
    "url": "assets/js/35.7d496577.js",
    "revision": "0d5d25fd3191f95b241b39a4ec1e2a3f"
  },
  {
    "url": "assets/js/36.133530d3.js",
    "revision": "7af528481d53b1bb6316f72ce4f5d94e"
  },
  {
    "url": "assets/js/37.0d608735.js",
    "revision": "d50820e1ffcacc7bc6f2f16ca9ff7876"
  },
  {
    "url": "assets/js/38.de62b0d1.js",
    "revision": "759ff2d8d49ae1651fa979a812499459"
  },
  {
    "url": "assets/js/39.71a23cf8.js",
    "revision": "c229f04b9094fd3a129b083c1e1dce6c"
  },
  {
    "url": "assets/js/4.da25035e.js",
    "revision": "14597c9be3ca348d452f783daecac2df"
  },
  {
    "url": "assets/js/40.8e045235.js",
    "revision": "fe445c37301fe7f1d6edcdd79738c225"
  },
  {
    "url": "assets/js/41.c4a1bb0a.js",
    "revision": "41f8e6466c3b6a8e1b0a74d48d0e2be8"
  },
  {
    "url": "assets/js/42.4594ff6b.js",
    "revision": "e608606d81dfd7d5c8480e3518452c50"
  },
  {
    "url": "assets/js/43.fd1b211e.js",
    "revision": "de3635693daaa7f40e2983d295b18ca5"
  },
  {
    "url": "assets/js/44.d2b073e1.js",
    "revision": "9c29e701556183c9dbab6abc858b14d9"
  },
  {
    "url": "assets/js/45.00394efb.js",
    "revision": "871769cc8eff4fac5e41efc725309a80"
  },
  {
    "url": "assets/js/46.45ca5ac5.js",
    "revision": "c219639db6a2e24636531d6eb05e164d"
  },
  {
    "url": "assets/js/47.fb50c243.js",
    "revision": "0a1a2afe0d51f8f4cb0fe471a0257ebb"
  },
  {
    "url": "assets/js/48.9fab9927.js",
    "revision": "cc30b9fc32c4333f73ecb2fec1ae78f8"
  },
  {
    "url": "assets/js/49.04a7210a.js",
    "revision": "32fe46c7d176f60b075f2127c0414911"
  },
  {
    "url": "assets/js/5.bb64fdf1.js",
    "revision": "77bc600ffb2cbb822937b24e7b40671a"
  },
  {
    "url": "assets/js/50.adff27be.js",
    "revision": "d82006c893a24f81e6bdf70be66d91d5"
  },
  {
    "url": "assets/js/51.4106843a.js",
    "revision": "20d9574e7e229daf76c0f1c35820b092"
  },
  {
    "url": "assets/js/52.bf2f02d1.js",
    "revision": "cec1d21290d207bd8c33ad961f1e2dde"
  },
  {
    "url": "assets/js/53.1d6fc191.js",
    "revision": "ef99117ae43a6ebb3a4f6871706f38b4"
  },
  {
    "url": "assets/js/54.ea8cc7b3.js",
    "revision": "5a37ba7e8de2ca6c279d0df5d9d03c15"
  },
  {
    "url": "assets/js/55.58cefe80.js",
    "revision": "9385d78e08333c8d45ab104f9e2acce5"
  },
  {
    "url": "assets/js/56.c8779921.js",
    "revision": "bc596aa39e779208f06e925b995a75a1"
  },
  {
    "url": "assets/js/57.97b21075.js",
    "revision": "b73f7e5f70912ea580e05336cc498445"
  },
  {
    "url": "assets/js/58.5f75e782.js",
    "revision": "4d65d0915ffb1aacfe70b8b72ee648b9"
  },
  {
    "url": "assets/js/59.b758b564.js",
    "revision": "d251a7b58f80d51df9b19e4ab6c7e2ab"
  },
  {
    "url": "assets/js/6.b36f9542.js",
    "revision": "b74eef43faf02bb4a015f0737d1f7677"
  },
  {
    "url": "assets/js/60.f12f2aae.js",
    "revision": "1d099f32e4deb0d7914379621a851ce5"
  },
  {
    "url": "assets/js/61.b2e74c02.js",
    "revision": "d5422ecf1c78231dea625b0a029fe4e7"
  },
  {
    "url": "assets/js/62.77a889c2.js",
    "revision": "1ba2f56d7af4e3fbedd14d159ce11332"
  },
  {
    "url": "assets/js/63.dad0b40a.js",
    "revision": "5142ae596b36e85c81bac9aa30cd4bcf"
  },
  {
    "url": "assets/js/64.b87db10c.js",
    "revision": "fcaf197ed49ce647df72bd6510983ae2"
  },
  {
    "url": "assets/js/65.0193314b.js",
    "revision": "1aacbd557341990d3ab0fb66843bca94"
  },
  {
    "url": "assets/js/66.748ce808.js",
    "revision": "222c6e5d8623f9fe42a40c66e0c859fe"
  },
  {
    "url": "assets/js/67.3a874b79.js",
    "revision": "5753394b8a17d03ffef74e0473d39639"
  },
  {
    "url": "assets/js/68.56cdcc96.js",
    "revision": "07e541b370fa8dcec1a1a592d865b442"
  },
  {
    "url": "assets/js/69.ff82a11d.js",
    "revision": "41e93849eaf0b3c55859a0ed97bfe554"
  },
  {
    "url": "assets/js/7.0b0af9a1.js",
    "revision": "aa47f3087cf55560948cb1d6ec47d314"
  },
  {
    "url": "assets/js/70.a1681da5.js",
    "revision": "b5a43b2c9302eaf0dc0f0557d62a6894"
  },
  {
    "url": "assets/js/71.052ace54.js",
    "revision": "8a25cee4124e5ada351bdf074a0cb47e"
  },
  {
    "url": "assets/js/72.cacbd234.js",
    "revision": "a1e1f1a302360c2a1f4ce13e2cbb38b7"
  },
  {
    "url": "assets/js/73.63a7a0cb.js",
    "revision": "b358ad55d5e27a56efdd536ad3992dbe"
  },
  {
    "url": "assets/js/74.1ca2dce6.js",
    "revision": "24d6defbcdc7e4b062d5071e41f601cd"
  },
  {
    "url": "assets/js/75.c8f04b29.js",
    "revision": "90485b8831b89c0e468fa9b8a14ca59c"
  },
  {
    "url": "assets/js/76.4a357a01.js",
    "revision": "b1108e83e9b92e1ccfa68aef4a53c30b"
  },
  {
    "url": "assets/js/77.e51440b7.js",
    "revision": "4901ad48a732548fa946d23cb2526e92"
  },
  {
    "url": "assets/js/78.f2af7b4a.js",
    "revision": "6e8118162cbc0727a309048407e4a9b2"
  },
  {
    "url": "assets/js/79.a38856a7.js",
    "revision": "95f5a280b1e0ea3da5526fc1a4948309"
  },
  {
    "url": "assets/js/8.402e3d98.js",
    "revision": "3b8d7c2503a9af153563213628b2c985"
  },
  {
    "url": "assets/js/80.ed423f86.js",
    "revision": "8d37841ebd1e0a89a55143c309ea369c"
  },
  {
    "url": "assets/js/81.ae559fa3.js",
    "revision": "bb91877d7343d7c16418357a431021af"
  },
  {
    "url": "assets/js/82.688d2b47.js",
    "revision": "9eec4950c64d5af055e29d86ec6a26d9"
  },
  {
    "url": "assets/js/83.7e1f5eb3.js",
    "revision": "0cf135b4c2cc57a00db255d61feb3dd4"
  },
  {
    "url": "assets/js/9.42f77084.js",
    "revision": "874acf26cef8eb81e4150d2977c27881"
  },
  {
    "url": "assets/js/app.2b71bf11.js",
    "revision": "f682d2e798693d65c20eb126110f98c0"
  },
  {
    "url": "cli/index.html",
    "revision": "be7ad59fda3054b6b6deb3cfea0b1f95"
  },
  {
    "url": "cli/introduce.html",
    "revision": "76d795070f6c6b31e0e0ddd3928125f3"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "897d783398cba118e4514117fe9d3858"
  },
  {
    "url": "component/basic/button.html",
    "revision": "c1b7f4af621dd1aa3c464a4c3cbfd579"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "4ebec0d34ebdb5816f739d27f54fd5b8"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "513e42bd0554bbcd7b9698406106f2b4"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "68321c1a087cd3a6331c91dc1d98a925"
  },
  {
    "url": "component/form/form.html",
    "revision": "66cf912754f0625fc824d1a98563cfbf"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "0c7d8c1b99254160f8738fd3c3e04458"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "fceef9e379b2e4e8702e242338e89f5c"
  },
  {
    "url": "component/form/input.html",
    "revision": "9da1bd0b4939321d20f373410cc756f5"
  },
  {
    "url": "component/form/radio.html",
    "revision": "54d433fd66a9376456882dc7d5ca51b0"
  },
  {
    "url": "component/form/rate.html",
    "revision": "15c7a0a18437df315eb7de1dfa63c11f"
  },
  {
    "url": "component/form/rules.html",
    "revision": "6a77ca7f2514df6a2415ecfe0391fbb6"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "0ff59b8bdf4c81e3197b62353d5c9c8f"
  },
  {
    "url": "component/layout/album.html",
    "revision": "17317886e12c2edfe9dc8b7ae0198645"
  },
  {
    "url": "component/layout/card.html",
    "revision": "50a5da6a62a391e5def4b73f5d629f06"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "5b3e095141742eed66662ba0e8418096"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "2cbf683185845c552903c77a08c126b1"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "a3d7aa6ad9d1f91b06a185064118524e"
  },
  {
    "url": "component/layout/list.html",
    "revision": "5f88e53629f32c8738b10f0b4a76f2a4"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "93daedb96f0b361f407cb1b07ce43e7a"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "e8409476c37f95b0a343a41a8e58fedc"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "9476ca9cbcdaf0d8c2a64006b1ba53c9"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "da28ab2e506ad3e557e6257eb8856359"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "a0da516609efdb984e2adb67965d9730"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "6ae63fa51230585b13c1f0b7d137f899"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "158d011b5e8adfe4377dff326fc9cf6a"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "40a5ef6c3b6a35dfbdede8cdd0c4376c"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "840eddbc47164b2035bafe601c227720"
  },
  {
    "url": "component/response/message.html",
    "revision": "d50a2597c72b6a1d1587c5ec77d7a4ff"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "ed2e72c3c25e0a7e6bd58b5d1a9fb73b"
  },
  {
    "url": "component/response/toast.html",
    "revision": "9471373b100aa39c452232a3ad64c0e1"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "756b17d88efd56b46e896056d6a3423d"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "aa4421edf89c6a306775e96269137896"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "c444593f8536cb1a86475b2af571b397"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "b55d3a9e977a5a5423df3cacbb905fe3"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "103433a270741add756bab56519e88ce"
  },
  {
    "url": "component/view/badge.html",
    "revision": "1a4b618285bd1847461e88916dc9bf9d"
  },
  {
    "url": "component/view/circle.html",
    "revision": "f45be2ad020a6fcac7622534354f81e4"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "ad498090c283663afe52059a3b878432"
  },
  {
    "url": "component/view/loading.html",
    "revision": "19ffd893f65a5d914739abf51a1616b5"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "7082e3431b28100be719b4f38c1b4bf7"
  },
  {
    "url": "component/view/mask.html",
    "revision": "bd194f7bcce7bd7e2364a262d9a67200"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "2a50ef498488808269dee655c0063f11"
  },
  {
    "url": "component/view/popover.html",
    "revision": "3e6a761bb8b5055c1bc92d89c1860f15"
  },
  {
    "url": "component/view/popup.html",
    "revision": "99c70a5dc55a9b12b7bc2916675f65a7"
  },
  {
    "url": "component/view/progress.html",
    "revision": "94729f2a449a586cbf1341f3d4e518f7"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "2a65926e422a1f368d70d7d12ff99ae8"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "2179e56ae90bbdeac3c944b5b009c67a"
  },
  {
    "url": "component/view/steps.html",
    "revision": "04cb08f6501110f8ba111fd7cc97f715"
  },
  {
    "url": "component/view/tag.html",
    "revision": "37252bdd324bd36eea6c8cd53e2b1e7c"
  },
  {
    "url": "filter/array.html",
    "revision": "ca7ba6a1d7b448876689c29e1a899701"
  },
  {
    "url": "filter/classnames.html",
    "revision": "8b7cdb7c2132146164fafbc0c6d20abd"
  },
  {
    "url": "filter/index.html",
    "revision": "51b4f742807e66815620cc2cd27f0867"
  },
  {
    "url": "filter/is.html",
    "revision": "120153485c4896b55b13fc20d695d763"
  },
  {
    "url": "filter/string.html",
    "revision": "40336f0338c5df2b47aadc3bd130e420"
  },
  {
    "url": "function/index.html",
    "revision": "2931e85334b653856f0bc7d522123d6a"
  },
  {
    "url": "function/promisic.html",
    "revision": "b2e898ffb6325f32e2c528f4975d7a0f"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "faba249aac410ee9a43bbc74c10082a2"
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
    "revision": "a35674a66851e4cac315eee342f0b9dd"
  },
  {
    "url": "index.html",
    "revision": "d1601dda55e2d8f16d0bd5a94782d941"
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
    "revision": "eb8bb9981d61c040b5b4df7aca3022e4"
  },
  {
    "url": "start/component.html",
    "revision": "8c9d04b7211ee32cdac773da78b2bca8"
  },
  {
    "url": "start/contribute.html",
    "revision": "1ca6f011a5024a6beb3bfb9850114aa0"
  },
  {
    "url": "start/event.html",
    "revision": "0d5280f6b677a820ee8361b07a720d2d"
  },
  {
    "url": "start/index.html",
    "revision": "dc09d70dd462ee97dbe1de6fd4b9502d"
  },
  {
    "url": "start/open-function.html",
    "revision": "42d6745ad8d9f37d41a4719a2164661e"
  },
  {
    "url": "start/QA.html",
    "revision": "ba29938ee9623f068a21183a76166041"
  },
  {
    "url": "start/using.html",
    "revision": "7dd117fa5fb32e8f9704db9f86b9b8f2"
  },
  {
    "url": "start/wx.html",
    "revision": "336a52e67f13f3a477278792491ea386"
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
