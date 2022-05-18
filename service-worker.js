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
    "revision": "712e374effad307a865bea5caf4a662e"
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
    "url": "assets/js/12.b046fd7c.js",
    "revision": "83cf55251d22b3df8d646cbd4ff55056"
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
    "url": "assets/js/34.849dc3b6.js",
    "revision": "17d8b6fbe19af1021732f052695f0a13"
  },
  {
    "url": "assets/js/35.609b2af2.js",
    "revision": "bd04f222e5f07945b22836bebb2b990d"
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
    "url": "assets/js/41.6c2196b8.js",
    "revision": "6490c3fffd0782544877f563958bcfe3"
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
    "url": "assets/js/46.2ae254d3.js",
    "revision": "ad62adc7d1c448034a72e4dcb9ca6594"
  },
  {
    "url": "assets/js/47.5c70b895.js",
    "revision": "b2e1dd1da863ef4eb77228c86518fb9a"
  },
  {
    "url": "assets/js/48.839f2ae5.js",
    "revision": "677d1f0ae0c09ac5ed47a638d77a5d2b"
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
    "url": "assets/js/62.a173ae26.js",
    "revision": "d9a5136293676d6babebaa52f6d781c6"
  },
  {
    "url": "assets/js/63.bfb9ec1c.js",
    "revision": "941985daa3ab373ef85f212b5ed2fd66"
  },
  {
    "url": "assets/js/64.3bc1c662.js",
    "revision": "7008d8c107ede2b528be8fb2c9573f24"
  },
  {
    "url": "assets/js/65.dbd31705.js",
    "revision": "3416e865505b0f1b431c059d7cb3770b"
  },
  {
    "url": "assets/js/66.fa1925e6.js",
    "revision": "9ae89ee3278881301d53983effb893d3"
  },
  {
    "url": "assets/js/67.1407c2e8.js",
    "revision": "4c06e1128c2c361f22a826d2af13d39c"
  },
  {
    "url": "assets/js/68.b1bbf788.js",
    "revision": "fe80203a2df59c738ddc5dac0723b6a3"
  },
  {
    "url": "assets/js/69.dde0b153.js",
    "revision": "ccd828776eabaad1e022fda04380d13f"
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
    "url": "assets/js/78.7d1ea390.js",
    "revision": "f4cfa3d3753b4a5263d20e35143b6818"
  },
  {
    "url": "assets/js/79.f4ef1dec.js",
    "revision": "b904ae25a4fb5a29282583b9a2926c50"
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
    "url": "assets/js/app.fcbdc9c8.js",
    "revision": "55655ddf567a4ac24a796f69be4e62a5"
  },
  {
    "url": "cli/index.html",
    "revision": "a47b49a45e167de9ad248293571770df"
  },
  {
    "url": "cli/introduce.html",
    "revision": "601607709aeca094e1843c32982c5163"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "8d4d1cac8c1f5104dfa0ecddb86f0c0e"
  },
  {
    "url": "component/basic/button.html",
    "revision": "c6fa4fd21f2c2f33b98446cae684af96"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "67843fff218cbaca12610aa47ae552bf"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "b5fdfc7cbd77fc810fb78773561e7b1e"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "8191b4e03300d3f4f4c32525886006f8"
  },
  {
    "url": "component/form/form.html",
    "revision": "66db09206655e133d3e1c8c397397b0d"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "78511a3bd0069d7d8797d3758449b55f"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "66f4299ae18f0fc5df6c27a83ccec3e0"
  },
  {
    "url": "component/form/input.html",
    "revision": "25a65c812821dc6b8322ade7ce7ba508"
  },
  {
    "url": "component/form/radio.html",
    "revision": "29436fe28dc0fc5a1a8aea46cb4e9e5a"
  },
  {
    "url": "component/form/rate.html",
    "revision": "892d98ed72226be61386acd26405844d"
  },
  {
    "url": "component/form/rules.html",
    "revision": "4629977a98cc08013d7b1595c82724ec"
  },
  {
    "url": "component/form/switch.html",
    "revision": "3bac226c29e9fe0e05874ec09a2e58f6"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "76e121ee1d05097ff387cbff46549d85"
  },
  {
    "url": "component/layout/album.html",
    "revision": "7338780347d76378a422fa2980a2f061"
  },
  {
    "url": "component/layout/card.html",
    "revision": "4020664c7be0067321128490be19cd10"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "af51a363e8e90cd1c23aecfbd2633d40"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "30da4ce55fb1f162d283a2a8315705fa"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "ea3ea9cf9fe25224069c8726085e0d0a"
  },
  {
    "url": "component/layout/list.html",
    "revision": "6906d68e1e7bb7377591cb5560fd7723"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "65f7aaf3e2fb1bc714a2e0f4cbc6519d"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "f64d5e70095ecd95c2cc8f0f3932c007"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "0c5624779db110d3e457e31a234534d7"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "09f9044ba52205e7f46c268418636ee6"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "1fc2becae4ddaeb1300d9539b41bf3f7"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "8543f6a03cf327928bfe0608a1497cf4"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "4c0ffdf6c8c9511b47fd8ff499beb06f"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "62bd392311f24f63a22dfc4c077b06c4"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "7d64daa5f02889aeb9aee7c558a2508b"
  },
  {
    "url": "component/response/message.html",
    "revision": "73be5141b2df7feda3f65c3871f57846"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "d41b59bd57ae41f4c4f876e043451e8f"
  },
  {
    "url": "component/response/toast.html",
    "revision": "ce73b70d4a5d558b288bdba951387b1a"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "4948053de500b2f4897c8da9239f9a28"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "246449c4f6662493980c5d795fda0b41"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "ab3512c79871a8b986779e5d6eb7436b"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "b586c24232e316da2626b3bf0f3c28b9"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "d55ef47b431403adbaf7c4cfee014cde"
  },
  {
    "url": "component/view/badge.html",
    "revision": "2735159da700a8cdda904e86058a31af"
  },
  {
    "url": "component/view/circle.html",
    "revision": "97c101b81eeeb3673cfa7b3314c5c35f"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "d1403bf37ccfaa39220799638e7b41fa"
  },
  {
    "url": "component/view/loading.html",
    "revision": "781eb022945bec5642f68feacd9da11f"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "492d7f17bf3aa5691af2bee0d2537117"
  },
  {
    "url": "component/view/mask.html",
    "revision": "7e737e614c27e6f5a9186e18cc37f181"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "d6933c1c7ae536de236a8d341df73b29"
  },
  {
    "url": "component/view/popover.html",
    "revision": "34b5659fcc6e83c1b3ff7a802a9d8d3a"
  },
  {
    "url": "component/view/popup.html",
    "revision": "eb5a236117f43ed1a4a0c34fea6e83fb"
  },
  {
    "url": "component/view/progress.html",
    "revision": "9a75a50ea10810467bf26c461de75715"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "39d713a52ffad8a8e85c627796291463"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "f2dffe037b239c8cf8fb4508b9f9bf5f"
  },
  {
    "url": "component/view/steps.html",
    "revision": "57e6f0450b3af4397ebdfdab09f6b707"
  },
  {
    "url": "component/view/tag.html",
    "revision": "5282a328bb5cbd88b4458edf45bcce00"
  },
  {
    "url": "filter/array.html",
    "revision": "62a97402de0061bdbd9ebd2aa039cfdd"
  },
  {
    "url": "filter/classnames.html",
    "revision": "f1eeb741060742a54f5eb380628b6574"
  },
  {
    "url": "filter/index.html",
    "revision": "a1fd61690e43927164d65a5175ce203b"
  },
  {
    "url": "filter/is.html",
    "revision": "ca35278dd9a7326e891258c73804028f"
  },
  {
    "url": "filter/string.html",
    "revision": "e65091d637166c1e3862e65882ba0c59"
  },
  {
    "url": "function/index.html",
    "revision": "fd663fd9c1567c6139726a3e688ebc7e"
  },
  {
    "url": "function/promisic.html",
    "revision": "c96cd9fcdd3bf26c06af3b4028be9819"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "e0133724960d356e2c054fa5559691d7"
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
    "revision": "a8d8872b5b3e14e806566d7493754175"
  },
  {
    "url": "index.html",
    "revision": "5a03bd982bac5a15a7cb44b6dfcb4ffc"
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
    "revision": "115c371e2f26ac1571a5d289010dc30a"
  },
  {
    "url": "start/component.html",
    "revision": "0e556bd0f2fe33516c2e53d5fa408c63"
  },
  {
    "url": "start/contribute.html",
    "revision": "405d27122ca7b65c8f908a2e93713dc6"
  },
  {
    "url": "start/event.html",
    "revision": "5661578c216d61218b0b6082dc475b30"
  },
  {
    "url": "start/index.html",
    "revision": "8b21fee352642f04ecda3ad1d93fb153"
  },
  {
    "url": "start/open-function.html",
    "revision": "19cdc13c45792741ba4799683ebf13ae"
  },
  {
    "url": "start/QA.html",
    "revision": "2587400b8760213d1cb622a8e92f3619"
  },
  {
    "url": "start/using.html",
    "revision": "dc3cbf8ccb8986e56fa8e481ec1d8f00"
  },
  {
    "url": "start/wx.html",
    "revision": "4b13f858f1be71d36ac67d162ada8e64"
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
