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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "revision": "1b9173fd69aba207fabaaf35f65d9d8d"
  },
  {
    "url": "archives/index.html",
    "revision": "17604d418d317def1e9ec007a889910a"
  },
  {
    "url": "assets/css/0.styles.4346b530.css",
    "revision": "a9fc191528ac4a07046fd3bb5982f237"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a75ef64.js",
    "revision": "4ec57f631153759b1741f5f5d5afeec4"
  },
  {
    "url": "assets/js/11.7f790357.js",
    "revision": "cdc640bca30b215a07245cfd3a6f6f9f"
  },
  {
    "url": "assets/js/12.c67e11b2.js",
    "revision": "658e2aab0f05881e54f83e00a4607f8d"
  },
  {
    "url": "assets/js/13.52a721d4.js",
    "revision": "b4a5f62093d1f1fa09bc3b4ff42c03d7"
  },
  {
    "url": "assets/js/14.b62d0cfe.js",
    "revision": "8b30bc1a304acdb92df39acc9f3b21e8"
  },
  {
    "url": "assets/js/15.b1c5a771.js",
    "revision": "21daf10676156abb3f51210570daf0fd"
  },
  {
    "url": "assets/js/16.6578f80f.js",
    "revision": "1c105c90b0ec052d1073601d9c1daed9"
  },
  {
    "url": "assets/js/17.92559a10.js",
    "revision": "1b7eac1d6cff990692e9886a600c5f71"
  },
  {
    "url": "assets/js/18.93a9968e.js",
    "revision": "696da4413466467a64568f4b36f02777"
  },
  {
    "url": "assets/js/19.d12b5a48.js",
    "revision": "d1c6f397f072b9cfba51367e1632f617"
  },
  {
    "url": "assets/js/2.94401f0d.js",
    "revision": "48cae4dec38760c404cfd8cc2d0133e6"
  },
  {
    "url": "assets/js/20.440fc33e.js",
    "revision": "45da97f3ddb2b3ef8597144e7ada8b12"
  },
  {
    "url": "assets/js/21.19c2366e.js",
    "revision": "fab1c57a7003e58e75988c5d681a8eb8"
  },
  {
    "url": "assets/js/22.264505b0.js",
    "revision": "1786fc93fe13bf68869d53279641ee2e"
  },
  {
    "url": "assets/js/23.93100346.js",
    "revision": "bda7eaf8be0b9b5e4a66b210b3136d2c"
  },
  {
    "url": "assets/js/24.55896661.js",
    "revision": "19e2678fec48a36461f2e98013ee7e7e"
  },
  {
    "url": "assets/js/25.23359982.js",
    "revision": "5a4bcaec9c916ddd94a38db3527fb1f3"
  },
  {
    "url": "assets/js/26.a216a89c.js",
    "revision": "01ab11bceafc94cadf4fe1640f08ae63"
  },
  {
    "url": "assets/js/27.6d61b45c.js",
    "revision": "7822083ffe5dbd75a8498987a26887da"
  },
  {
    "url": "assets/js/28.8fc2ea6e.js",
    "revision": "3caab8e4e51fb652f53094b900e12724"
  },
  {
    "url": "assets/js/29.19eb5eb5.js",
    "revision": "90e88af6f59a5829557c8814ae934061"
  },
  {
    "url": "assets/js/3.d4769d2f.js",
    "revision": "ac32a3714c5aaa3d3b7dbb9363bc920e"
  },
  {
    "url": "assets/js/30.62426168.js",
    "revision": "bd4d033291378ee7b8914edcdbbf6a70"
  },
  {
    "url": "assets/js/31.a8aab90b.js",
    "revision": "59527635bb6082c49cf42636be5959d9"
  },
  {
    "url": "assets/js/32.f02ccc89.js",
    "revision": "4164707b2178575cee5cfbcd33f2512f"
  },
  {
    "url": "assets/js/4.7a4f5b33.js",
    "revision": "19212d74507a955ea18b41839ff6e795"
  },
  {
    "url": "assets/js/5.add5a2b8.js",
    "revision": "e271b6f0a40a5390f2142e434663dcde"
  },
  {
    "url": "assets/js/6.2f5347df.js",
    "revision": "d6057f2b62f18376c0184c571c7cefd6"
  },
  {
    "url": "assets/js/7.4f1ba2fd.js",
    "revision": "5114ea451c6c558574ff415745289f86"
  },
  {
    "url": "assets/js/8.9d40a80a.js",
    "revision": "d8acd392613889465149824df3fbadd7"
  },
  {
    "url": "assets/js/9.3353ddf1.js",
    "revision": "ba91160503ed116a1ee6b6a07788dcce"
  },
  {
    "url": "assets/js/app.2258c150.js",
    "revision": "3d0082a50431689274bac25b30745968"
  },
  {
    "url": "categories/index.html",
    "revision": "dfbe017b217a07790906f8bd232b5ce6"
  },
  {
    "url": "image/bg1.jpg",
    "revision": "2de388ffddaf308f2091da89d748b3a3"
  },
  {
    "url": "image/bg2.jpg",
    "revision": "dcdde6e6acdb4497619842428cd963fd"
  },
  {
    "url": "img/128x128.png",
    "revision": "8e6d03923ef866aebcdbf711e7289487"
  },
  {
    "url": "img/256x256.png",
    "revision": "920fd0383a91247283f0ec81bfe918d5"
  },
  {
    "url": "img/32x32.png",
    "revision": "e542f5a5b16d86595bdf51220f2b99de"
  },
  {
    "url": "img/512x512.png",
    "revision": "cd9b438c55b77df92bca09605c9672be"
  },
  {
    "url": "img/64x64.png",
    "revision": "baaaa2fe5471bdcdee3a4daa85fb9f04"
  },
  {
    "url": "img/logo.png",
    "revision": "19898783a19f03d68b42f3522134d9d2"
  },
  {
    "url": "index.html",
    "revision": "d55f96a45f6d6ba332d93d07609132ab"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "28d011844f18e98b0f801b0af96ee207"
  },
  {
    "url": "pages/131438/index.html",
    "revision": "24bc6ed79005358b6068ec2efc0a5c01"
  },
  {
    "url": "pages/2b8e22/index.html",
    "revision": "5f0e3967b8499ebff9d95ca928606f41"
  },
  {
    "url": "pages/41b6cc/index.html",
    "revision": "9e4b857a5fd5747ac687d9bae463712e"
  },
  {
    "url": "pages/54e58e/index.html",
    "revision": "db17130cd2f74d2cd3adad1bfa445f51"
  },
  {
    "url": "pages/951535/index.html",
    "revision": "10ff06e73199028424f3f2029600199f"
  },
  {
    "url": "pages/9a27d2/index.html",
    "revision": "74218ac185ae9ad1c912de6b7f0a1760"
  },
  {
    "url": "pages/a91214/index.html",
    "revision": "5012d7692021c90ff15507278eb2a5b4"
  },
  {
    "url": "pages/aa917b/index.html",
    "revision": "832e4e2e46166dbc67e70fdcaad56874"
  },
  {
    "url": "pages/about/index.html",
    "revision": "e2d852a2b85ce0921357ca74c3516abd"
  },
  {
    "url": "pages/b870ed/index.html",
    "revision": "fd29558367be5e399f7dd684aaa650fb"
  },
  {
    "url": "pages/b9b976/index.html",
    "revision": "3e2fd2084b6524cd059be163e2cee7dd"
  },
  {
    "url": "pages/bbca02/index.html",
    "revision": "48d453de149205fba26e38ac0d023018"
  },
  {
    "url": "pages/c7906c/index.html",
    "revision": "5587260ccb7a95d0864423e9b33e3ac0"
  },
  {
    "url": "pages/ca447e/index.html",
    "revision": "2ce697f4fa72a71177ffd6bc401e527e"
  },
  {
    "url": "pages/cd8123/index.html",
    "revision": "c61482c1a103656d6ab0bd23ffd777d7"
  },
  {
    "url": "pages/contact/index.html",
    "revision": "8f34158c6732b7817edb7f4a12b2d299"
  },
  {
    "url": "pages/eb5b06/index.html",
    "revision": "ce22dd9f5eabcac5637d53ad5f6f010a"
  },
  {
    "url": "pages/faf39d/index.html",
    "revision": "77fbeefd2817f78cfd5c1ead04da675d"
  },
  {
    "url": "pages/joinus/index.html",
    "revision": "0483a093da52752d04ba7c1584f6e6c1"
  },
  {
    "url": "pages/zhaoxin/index.html",
    "revision": "24ced2fb618ac83ca957a5d7c3e3274d"
  },
  {
    "url": "tags/index.html",
    "revision": "3015c0f2ebc1af94cdd7af2fed754730"
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
