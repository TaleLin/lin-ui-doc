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
    "revision": "0b52f82c150f302972a554f49bb15672"
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
    "url": "assets/js/12.3682da35.js",
    "revision": "3aa75798fa38885343c6a5ef4c10f431"
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
    "url": "assets/js/17.898e6727.js",
    "revision": "21e90207fa95b026e3a553f9227a8dac"
  },
  {
    "url": "assets/js/18.051b4975.js",
    "revision": "57483f68721dac61387e74b48752ba56"
  },
  {
    "url": "assets/js/19.f0c2d62b.js",
    "revision": "b442003b5886d4dde6b890d8cc9b2949"
  },
  {
    "url": "assets/js/2.9db51047.js",
    "revision": "25a7aa3d1887704ada155695c0d70553"
  },
  {
    "url": "assets/js/20.4634f722.js",
    "revision": "2caceb6258ea475be9ebee98fd668e6e"
  },
  {
    "url": "assets/js/21.7b607173.js",
    "revision": "1bc4a9f189f8f5fa5ad222b86ab3c5ba"
  },
  {
    "url": "assets/js/22.f8468083.js",
    "revision": "46331f9940d12a6929acc4e2b9e4d679"
  },
  {
    "url": "assets/js/23.564f185a.js",
    "revision": "75b6b3184368332903ded59c9ddd249b"
  },
  {
    "url": "assets/js/24.bf75b7c4.js",
    "revision": "fee3f26914d81bcc32a4bace5287d1d7"
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
    "url": "assets/js/31.6682849f.js",
    "revision": "51e7be1d2669ff7dc9b05318c76353ae"
  },
  {
    "url": "assets/js/32.8d256aae.js",
    "revision": "67b7a4164c5d985c2333381b5bf224e9"
  },
  {
    "url": "assets/js/33.9169d131.js",
    "revision": "cbae821555d0fab098c6447fb88126b6"
  },
  {
    "url": "assets/js/34.13996d61.js",
    "revision": "ff56c2f82daa54b349db266c569a7e85"
  },
  {
    "url": "assets/js/35.9a382338.js",
    "revision": "7b285791ff166dd1623b429b649b9f92"
  },
  {
    "url": "assets/js/36.8884a443.js",
    "revision": "4f868fac46b3c06d31a71b4cfda9954d"
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
    "url": "assets/js/40.9cf82c6b.js",
    "revision": "c039b59f7236c5151b85bccf10528bad"
  },
  {
    "url": "assets/js/41.13be5574.js",
    "revision": "4646d21c5e7350c76cc8a5027ce779c8"
  },
  {
    "url": "assets/js/42.270d1ee1.js",
    "revision": "2d2c21ec9e5e0090a41cce54aebc89c7"
  },
  {
    "url": "assets/js/43.c0df3cb0.js",
    "revision": "3a0f7e58e3bfe5c40ffc160da4aa44f8"
  },
  {
    "url": "assets/js/44.375ff632.js",
    "revision": "b763696d63d3d92fb03883e57065ae89"
  },
  {
    "url": "assets/js/45.b7d49107.js",
    "revision": "b08468c46ccb25da9a68e21a68a7f5ed"
  },
  {
    "url": "assets/js/46.81a06d97.js",
    "revision": "c69e5926e0a0a994fffd7eec26f37d12"
  },
  {
    "url": "assets/js/47.1692c5fc.js",
    "revision": "b59f54d9cd963deaff5a3ba461c031d7"
  },
  {
    "url": "assets/js/48.d986722d.js",
    "revision": "be54c4ae98249ecd7c871ff50f627035"
  },
  {
    "url": "assets/js/49.f9dc2037.js",
    "revision": "e4e1a1224aeaf399b3b71061b8104aa5"
  },
  {
    "url": "assets/js/5.bb64fdf1.js",
    "revision": "77bc600ffb2cbb822937b24e7b40671a"
  },
  {
    "url": "assets/js/50.70b4deb4.js",
    "revision": "39e77400bbd198bd244022a2fcb3e814"
  },
  {
    "url": "assets/js/51.7ecbb115.js",
    "revision": "ce36a0426407d68fbf5f27ca2ea124b4"
  },
  {
    "url": "assets/js/52.312f556e.js",
    "revision": "a85f59ddacc9b7320d1a9425252105c9"
  },
  {
    "url": "assets/js/53.c8d96cee.js",
    "revision": "de419628f202cdd339e1956a0aa14c3f"
  },
  {
    "url": "assets/js/54.95ac3da6.js",
    "revision": "b5e7d07833b43287563567ccc8f9d3e7"
  },
  {
    "url": "assets/js/55.41db8358.js",
    "revision": "9f906ea05851f04fcd4a5fb6857562cc"
  },
  {
    "url": "assets/js/56.dada2314.js",
    "revision": "8fc4c591c7894646e01daf4526febf91"
  },
  {
    "url": "assets/js/57.a0d6dab2.js",
    "revision": "34a91be5b29f320eca51a41631c9a181"
  },
  {
    "url": "assets/js/58.109e2de7.js",
    "revision": "b6a734917144c454a5fd1639b37355c2"
  },
  {
    "url": "assets/js/59.e7a4b675.js",
    "revision": "53a05dc3138619251502a14d19f2000c"
  },
  {
    "url": "assets/js/6.b36f9542.js",
    "revision": "b74eef43faf02bb4a015f0737d1f7677"
  },
  {
    "url": "assets/js/60.68de122c.js",
    "revision": "6403c0f8be42858031f811fbc5e75bf1"
  },
  {
    "url": "assets/js/61.63d1ceae.js",
    "revision": "45030ab8ac00d91aaa006134046eb0bb"
  },
  {
    "url": "assets/js/62.7e45f838.js",
    "revision": "414a8d126c41bcfabf41a7a799d8dfe6"
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
    "url": "assets/js/65.2daee788.js",
    "revision": "09fb9c761caf3b2658928259dd81ee56"
  },
  {
    "url": "assets/js/66.a54d80d9.js",
    "revision": "739ef526a4bd76edce2e11a283446ad6"
  },
  {
    "url": "assets/js/67.faebc045.js",
    "revision": "c07cfe684e9bb68568404afd9ecda846"
  },
  {
    "url": "assets/js/68.aa12bb07.js",
    "revision": "3d587a7b1938e01ef8fea125c60c29c3"
  },
  {
    "url": "assets/js/69.ab28d1ad.js",
    "revision": "47663d3ea4eac51f664e7be53d760b44"
  },
  {
    "url": "assets/js/7.2d8c6aad.js",
    "revision": "38570773febbc07297aa840efa905637"
  },
  {
    "url": "assets/js/70.5c7a2096.js",
    "revision": "e13f9adf61c1c682e9df59ae5891f461"
  },
  {
    "url": "assets/js/71.7a879e12.js",
    "revision": "34341c8ccbda32bf98d73f273fa40a54"
  },
  {
    "url": "assets/js/72.972fa9c7.js",
    "revision": "8271d936820f863c29f7109efa1bd791"
  },
  {
    "url": "assets/js/73.22036f2d.js",
    "revision": "00234c2dbfac1aa131a20b413f26bf79"
  },
  {
    "url": "assets/js/74.a32923a9.js",
    "revision": "6c7ad12d4e965c002fa0ebb50969805e"
  },
  {
    "url": "assets/js/75.dcaa3cc9.js",
    "revision": "d0be22beb810771e15c345bf7e74111d"
  },
  {
    "url": "assets/js/76.7b998a00.js",
    "revision": "59c79ea9870a299bf4c328a7d8a39467"
  },
  {
    "url": "assets/js/77.7ab44e58.js",
    "revision": "6354ef5218af8fc9670c4cb0ed272b46"
  },
  {
    "url": "assets/js/78.f6fa5c21.js",
    "revision": "4a5e9a2adfd3cbea3b466252e4400ea0"
  },
  {
    "url": "assets/js/79.18eb5158.js",
    "revision": "3bffeafa27015a91cfd45aff76f9dc54"
  },
  {
    "url": "assets/js/8.402e3d98.js",
    "revision": "3b8d7c2503a9af153563213628b2c985"
  },
  {
    "url": "assets/js/80.ba3c35f5.js",
    "revision": "6729ad97f4604823371971019cc14ddf"
  },
  {
    "url": "assets/js/81.663ce180.js",
    "revision": "93d363b7c9435658ff41e085403cae3f"
  },
  {
    "url": "assets/js/82.b42df486.js",
    "revision": "42584f07ea7825e0d1f6a966f46d077f"
  },
  {
    "url": "assets/js/83.552760c8.js",
    "revision": "645c6a4b462c53797b547a2a026496f1"
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
    "url": "assets/js/app.affc8e07.js",
    "revision": "b3d27978f7c009787b7658358615a2e3"
  },
  {
    "url": "cli/index.html",
    "revision": "e1b45487b9dabf3624eaee93eacbba31"
  },
  {
    "url": "cli/introduce.html",
    "revision": "693deabff397d6f32fefcd40e44b5ebc"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "97009628bb0246367921a2d81588fa23"
  },
  {
    "url": "component/basic/button.html",
    "revision": "bb0335d665bce93cd35b360eeab531c2"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "6e6bb9be1044490446ac7a9e00bf6f73"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "54112f51f86d8eb00caae16cf22cba5c"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "d36dd8b1a64ae1d9590a47cd9800091e"
  },
  {
    "url": "component/form/form.html",
    "revision": "2ebc886fec4807d08e274dda6a5f78f6"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "6ed8696613bc95cc93e4d2e6af5faa5d"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "3efce90677de9db07c8603ff265175aa"
  },
  {
    "url": "component/form/input.html",
    "revision": "aa9f6f839cc7f1dc3ace04a6b567bc4d"
  },
  {
    "url": "component/form/radio.html",
    "revision": "7f07a4e999486e9ba7bedc7a68f0bd1d"
  },
  {
    "url": "component/form/rate.html",
    "revision": "c820e71bbb8d55f7ad4c528cb5b9bf11"
  },
  {
    "url": "component/form/rules.html",
    "revision": "6d10e6b865b851eab999a3b7244747d6"
  },
  {
    "url": "component/form/switch.html",
    "revision": "0e58bd2955d1b2c0ef282800bfd9462c"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "d7cd2f558ca12f039b7b4775e5bf41d5"
  },
  {
    "url": "component/layout/album.html",
    "revision": "9116fc41d7b3b898bcca223e6a045bde"
  },
  {
    "url": "component/layout/card.html",
    "revision": "1a63b6064ec92c7718ecb4e40c99b604"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "348431bc359590c8ca8bfaaa14fe4132"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "0c960459694d86217e40363af004b3d5"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "b304eef66a8fa6804627023207199804"
  },
  {
    "url": "component/layout/list.html",
    "revision": "5540bd52adac8af73a2a8cd87798af10"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "9d0f196fb7618ab8fc3826b68cd8db4f"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "dedd1d32d26b32363f1ba25466e0306f"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "57192c0b8284d46da67e56da6be84e05"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "e6c9737c0d2404d2ed35f36ac74b5e73"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "d311c8d45ffb50455ab6f42a2a0d0984"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "c0981aafc4be17d009fc44bf53135f69"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "d049f695939ae35e27739ebe42b634d4"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "4c18050eb9f18fb6a0c3b6dc87002ef9"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "ee8f1176b26588f3eb9e967c2b916baa"
  },
  {
    "url": "component/response/message.html",
    "revision": "333e9e6e0c616a91c8420eb16cbfd845"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "b0b8cf8f65fd573b064152ca8903dccf"
  },
  {
    "url": "component/response/toast.html",
    "revision": "569dc838cd9be24acfd6c825e4118de6"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "ac0b5e455d735eb3b3df2d509605461f"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "9d9af7bd414eba8b8e613690123acc66"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "c9f3e428006a711054910b846b287429"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "cefda25f7ca25b15d299bcbf99d5df3e"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "2c684d973459f6942a68ab39f9c7ef11"
  },
  {
    "url": "component/view/badge.html",
    "revision": "9ea5ac183558307bbabd69039a8393f7"
  },
  {
    "url": "component/view/circle.html",
    "revision": "15b0ecb7f0119bb646440e193af56223"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "48d6d104015d2e67c1d855b145ea0457"
  },
  {
    "url": "component/view/loading.html",
    "revision": "ef9c61a7f42178c94abb8600cc018063"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "b3be0f0cc0dcf51689f142173726894d"
  },
  {
    "url": "component/view/mask.html",
    "revision": "a7cc25bbd8a087205685736a1f6d2c1c"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "511e5c50dcb99114d10120cc0b24801d"
  },
  {
    "url": "component/view/popover.html",
    "revision": "ac866f82f423eee464c0f28b904b38ac"
  },
  {
    "url": "component/view/popup.html",
    "revision": "9d552f57cb08797de8fca11be73693c1"
  },
  {
    "url": "component/view/progress.html",
    "revision": "8887dee06ad735e56728b6ccddbd59ca"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "5891fdef6be5fddf54af70d58d2f6d7c"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "26204d3226926882919f0de21646a3a8"
  },
  {
    "url": "component/view/steps.html",
    "revision": "194ba9464c53fa885f15fdc9882384fe"
  },
  {
    "url": "component/view/tag.html",
    "revision": "db4f9ff4abce1ed2aa00ce2b0d047e98"
  },
  {
    "url": "filter/array.html",
    "revision": "3aaf1cb812532daf351068ea66bb3e75"
  },
  {
    "url": "filter/classnames.html",
    "revision": "824cf3c46a5e17e6cbe840860fec68f4"
  },
  {
    "url": "filter/index.html",
    "revision": "112bb704aa32d64b93357638f8d15d34"
  },
  {
    "url": "filter/is.html",
    "revision": "4f8a13030786b2e6b5b0ccc6ac710c5b"
  },
  {
    "url": "filter/string.html",
    "revision": "53315ebb43adce911a20121997248e9a"
  },
  {
    "url": "function/index.html",
    "revision": "e931385bea6634e6bb82cade2f8683ab"
  },
  {
    "url": "function/promisic.html",
    "revision": "94bdc1d627b9af20f3c2f0abdddb38b8"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "6f8cb948d8be26afcc88658094834bac"
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
    "revision": "927eeb430506aad39c8082fdf933514c"
  },
  {
    "url": "index.html",
    "revision": "a659214bb73b815fad2e9e6f8e024cc9"
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
    "revision": "1db84a98b878b2c9e988e8ba189d1494"
  },
  {
    "url": "start/component.html",
    "revision": "db76ee82aeceb775d2c56cde1ab81eae"
  },
  {
    "url": "start/contribute.html",
    "revision": "4e89e808631d289819145f316d8ae2ae"
  },
  {
    "url": "start/event.html",
    "revision": "c616e98d1f7b785d1168680f60f3b361"
  },
  {
    "url": "start/index.html",
    "revision": "d6b26b4bad8425341b6d01f55de0eed1"
  },
  {
    "url": "start/open-function.html",
    "revision": "f3cc8876f5a5652f75636f91970150f5"
  },
  {
    "url": "start/QA.html",
    "revision": "0ff5e3831bd6a35797bf113f90a8352c"
  },
  {
    "url": "start/using.html",
    "revision": "d7a466d9fb8c952314b743ee6f4ca93d"
  },
  {
    "url": "start/wx.html",
    "revision": "a270305f607f102725e2187a19464c36"
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
