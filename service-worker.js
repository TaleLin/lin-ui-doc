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
    "revision": "bdfaf16083b71985208ea6007e74fb5c"
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
    "url": "assets/js/21.1b0799b5.js",
    "revision": "5111d712ea1b92aa760500750c077c11"
  },
  {
    "url": "assets/js/22.f8468083.js",
    "revision": "46331f9940d12a6929acc4e2b9e4d679"
  },
  {
    "url": "assets/js/23.c01c877e.js",
    "revision": "ab502b24c210af1f9a0eb10bc1508742"
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
    "url": "assets/js/28.04b6ff95.js",
    "revision": "f5cf88790290958e60946742f5710640"
  },
  {
    "url": "assets/js/29.d795b6a9.js",
    "revision": "5599c95edcfb6617745964d3750f38e0"
  },
  {
    "url": "assets/js/3.43e67a98.js",
    "revision": "61f307afd0ce7bb32b09910abf81d4b7"
  },
  {
    "url": "assets/js/30.d24a45a1.js",
    "revision": "b132279dba19f38a5c9c162fec923e63"
  },
  {
    "url": "assets/js/31.19ca6820.js",
    "revision": "16e876a1ad4fb868561f61a4c29b57fd"
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
    "url": "assets/js/37.de6fe709.js",
    "revision": "50d6291e8d47c9538abd334bfadaa108"
  },
  {
    "url": "assets/js/38.5a5f8d0d.js",
    "revision": "a4ce43161525657e67d3660072f53611"
  },
  {
    "url": "assets/js/39.7ab3af41.js",
    "revision": "b78ffa47d626cc64e6c57168fa7db3f4"
  },
  {
    "url": "assets/js/4.da25035e.js",
    "revision": "14597c9be3ca348d452f783daecac2df"
  },
  {
    "url": "assets/js/40.0c19ac7e.js",
    "revision": "cdaa20971ce807ddf2e4141401275fe0"
  },
  {
    "url": "assets/js/41.745b9781.js",
    "revision": "658bf845f60d544b51588ebe16c6f62c"
  },
  {
    "url": "assets/js/42.2696ac2a.js",
    "revision": "b67480ffef6a49d8527ab530a6dcb4b9"
  },
  {
    "url": "assets/js/43.1f301edb.js",
    "revision": "fa033dc822c4a909fe6a498ad5849ef1"
  },
  {
    "url": "assets/js/44.7270aaf7.js",
    "revision": "5071ea43507a267634faca8f3c606888"
  },
  {
    "url": "assets/js/45.6f6dc1c0.js",
    "revision": "8e28e7d54d8a3183961ffa28eb6ef933"
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
    "url": "assets/js/51.4f39775b.js",
    "revision": "17103d325cd2f18534a2ad49da636c54"
  },
  {
    "url": "assets/js/52.312f556e.js",
    "revision": "a85f59ddacc9b7320d1a9425252105c9"
  },
  {
    "url": "assets/js/53.984db6b0.js",
    "revision": "373cd18e1c3bcba823b6f42e501006e5"
  },
  {
    "url": "assets/js/54.9f332eff.js",
    "revision": "50f6e6ca648760fc1861b6d7ea75a2e1"
  },
  {
    "url": "assets/js/55.87028f1b.js",
    "revision": "388f024e7ba5f9e8b0ede18f68290e48"
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
    "url": "assets/js/58.6d1c7f55.js",
    "revision": "c20ccb71a386e4a91196a65b2016a651"
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
    "url": "assets/js/60.a1902eac.js",
    "revision": "5f9a94771eb39a014408fa2bbd81495d"
  },
  {
    "url": "assets/js/61.18bd75ee.js",
    "revision": "08a6148e044205fd737de4a1179439c4"
  },
  {
    "url": "assets/js/62.a173ae26.js",
    "revision": "d9a5136293676d6babebaa52f6d781c6"
  },
  {
    "url": "assets/js/63.c8dbc096.js",
    "revision": "a1669a080d3faa1f69dae085a8e3145f"
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
    "url": "assets/js/70.ebba6813.js",
    "revision": "4f3d39e5bd0584e41aa7860476564a42"
  },
  {
    "url": "assets/js/71.99047eae.js",
    "revision": "b0a4b9e2bc5808bd3cb49c18dd8344de"
  },
  {
    "url": "assets/js/72.a12bbf24.js",
    "revision": "60ef46b36d41406aecd4abfd83852b65"
  },
  {
    "url": "assets/js/73.b5326289.js",
    "revision": "d02412e416c6cf387ce9efed04761262"
  },
  {
    "url": "assets/js/74.d4261161.js",
    "revision": "c760c499e7f1861f53f5371598bd2511"
  },
  {
    "url": "assets/js/75.bedb1c10.js",
    "revision": "6c8be9e227596d0e087178d03d8ce650"
  },
  {
    "url": "assets/js/76.a51a4aa8.js",
    "revision": "31de8d132645317faf1cf44a09cbc4bd"
  },
  {
    "url": "assets/js/77.7ab44e58.js",
    "revision": "6354ef5218af8fc9670c4cb0ed272b46"
  },
  {
    "url": "assets/js/78.7d1ea390.js",
    "revision": "f4cfa3d3753b4a5263d20e35143b6818"
  },
  {
    "url": "assets/js/79.537957fe.js",
    "revision": "18b856d03df0a963c4cc454ec94200aa"
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
    "url": "assets/js/81.1f6a5fe8.js",
    "revision": "d63b57769802eb6433afe66d92bd6f67"
  },
  {
    "url": "assets/js/82.b42df486.js",
    "revision": "42584f07ea7825e0d1f6a966f46d077f"
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
    "url": "assets/js/app.3aa0e6c2.js",
    "revision": "988c7dcba31ae66216548cb5c902fbb5"
  },
  {
    "url": "cli/index.html",
    "revision": "561ecc9252ca8e6d6dfae4d5551dc18e"
  },
  {
    "url": "cli/introduce.html",
    "revision": "17791b1eca9a2fa79a1950b60c7208c8"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "8502f89d9e7bafbe4b9df574ed243d4d"
  },
  {
    "url": "component/basic/button.html",
    "revision": "9bfd5a89bedaaa088a0cd071629e63d4"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "d333e912f1024976187e99f9efca289f"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "22fc1ce2e2e69dd4ac090bc56e972a90"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "2b87a5019538392b73583e1cd57371e9"
  },
  {
    "url": "component/form/form.html",
    "revision": "b2e93b8b1a864bbdf432f2894443db76"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "a0425f25db69cfab020dcd5ba747ad11"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "115b5bfdf26cce426c0fe3dc9b4df444"
  },
  {
    "url": "component/form/input.html",
    "revision": "d1d5784aed3d6c681423256453a9fbf4"
  },
  {
    "url": "component/form/radio.html",
    "revision": "ac6cc153f917e72196107498aebf244e"
  },
  {
    "url": "component/form/rate.html",
    "revision": "5952c8f2d6cb7515c36ff62cfc32be01"
  },
  {
    "url": "component/form/rules.html",
    "revision": "e4bd43c074a047d79f9cf3238a3764fb"
  },
  {
    "url": "component/form/switch.html",
    "revision": "58af09c94ed91e83d8c0991d4830a367"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "af4998f74b4fb2605ca37ab2fc27c0e8"
  },
  {
    "url": "component/layout/album.html",
    "revision": "a2b52691e904686a248bcf5541ec2a00"
  },
  {
    "url": "component/layout/card.html",
    "revision": "a0f18dbf494e43bc6e0ee172ec786c30"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "3a407a1b41c69d2334034e3d65f4b0df"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "3bfd942fead676b8e6c01b037db77872"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "8614291aa03428db651776e4dfed786f"
  },
  {
    "url": "component/layout/list.html",
    "revision": "4f9bdba51707021184e238f845c803cb"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "62e2987dea1e9bbcc425bbf7042bcb55"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "80b56188f1b17808c4116c7fd9f2cd35"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "3bbc63b501bb951de300f9a958403489"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "7e5ccd3b8ce61e62d96335d40243657c"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "59105df65672b47ad5f7d471c68cbd21"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "40a4185e1f937ce80d1a3e16b952df20"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "ec573e56d0902958843b1d76f73dcd95"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "033269e729e1264dc092278c21792fa4"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "cb663105281f1a03d3b1ba9fef4981c5"
  },
  {
    "url": "component/response/message.html",
    "revision": "c7a5ee73a37cf227c5ef65ba66f47822"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "8d4f55b8693858268514e71f85cb1d89"
  },
  {
    "url": "component/response/toast.html",
    "revision": "f11f5bdc309bce8e7173e1a6433c3f9e"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "780c6ae7f15008e94e5a2f84d6e22751"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "18720c0816974d91d5dd430db46e1290"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "d1c0d56cdce088306956549a87201cf6"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "8c262b6bb72d9e95ee8f9869acdf6b7a"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "f06e660bd9f7e5be457f1667b6e91146"
  },
  {
    "url": "component/view/badge.html",
    "revision": "62ff53bde1beb2e887a0f98e72d9b000"
  },
  {
    "url": "component/view/circle.html",
    "revision": "84c45d55d507cfaaab24d0baa22d49f8"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "281b0d20777fa4d194b3aa2a1909722d"
  },
  {
    "url": "component/view/loading.html",
    "revision": "998d54d390cdee46ba762155496ea483"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "d22820cca3eadc0594896caafc2a10d3"
  },
  {
    "url": "component/view/mask.html",
    "revision": "fd9854622b27cbb868fa3f902895b2a5"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "7af437a9906308ab49089e004276ffd8"
  },
  {
    "url": "component/view/popover.html",
    "revision": "6c9469a7a718694b42cead917e6f26c0"
  },
  {
    "url": "component/view/popup.html",
    "revision": "3f38bd05d780dffc824f0ea6022cc37c"
  },
  {
    "url": "component/view/progress.html",
    "revision": "3dd81adcd9024a301d541a1757631b58"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "73196f79f40a4e1784df41b208581fb7"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "b6ca005078be4ee07143e36c91b229f1"
  },
  {
    "url": "component/view/steps.html",
    "revision": "9c2879585db29423b6735b4611024b5e"
  },
  {
    "url": "component/view/tag.html",
    "revision": "0e5df12980c148e895225bf09e20487b"
  },
  {
    "url": "filter/array.html",
    "revision": "df3a4bb39f686aff71362073d611049b"
  },
  {
    "url": "filter/classnames.html",
    "revision": "720e4c435caa16754355dcc9ef3b3a14"
  },
  {
    "url": "filter/index.html",
    "revision": "076c3f535c917ffc2002ab823ca2c959"
  },
  {
    "url": "filter/is.html",
    "revision": "5bb0323e214deeab23f5d3372b9632fd"
  },
  {
    "url": "filter/string.html",
    "revision": "86e92aaedddc1f28ddfbb59dd9d19de5"
  },
  {
    "url": "function/index.html",
    "revision": "06090cdb9cddb6357543f1582df9eaf7"
  },
  {
    "url": "function/promisic.html",
    "revision": "dd10dc40e45ee906bd9492d45a4b1da7"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "f42da5fc4a828ef8d8df4583c2897167"
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
    "revision": "ae5335a88c9f790c0cd2611b0e50bc0a"
  },
  {
    "url": "index.html",
    "revision": "379e6f51c2ab0a9df4c1551c50fa2502"
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
    "revision": "3fcf01758c5df93dda30ea0c3bff5597"
  },
  {
    "url": "start/component.html",
    "revision": "5c3eb81a027af42f1be6a9784059da63"
  },
  {
    "url": "start/contribute.html",
    "revision": "040b36d520fabd5eddc915883c5ecf52"
  },
  {
    "url": "start/event.html",
    "revision": "1206abf4d2a5a9b96728a4ffc2a10546"
  },
  {
    "url": "start/index.html",
    "revision": "abd0e9287a35e8f1009d0a4b62241370"
  },
  {
    "url": "start/open-function.html",
    "revision": "b1031bdd406505e2e22d81d5d303a6e8"
  },
  {
    "url": "start/QA.html",
    "revision": "e4d791f4212bae140899ec8688441910"
  },
  {
    "url": "start/using.html",
    "revision": "1b2e4bc9e322b4088e7daeb9a4389417"
  },
  {
    "url": "start/wx.html",
    "revision": "442c907fddce5c804531430fdca013a7"
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
