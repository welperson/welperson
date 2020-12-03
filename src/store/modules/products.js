export default {
  namespaced: true,
  state: {
    point: '1,000,000',
    accum: 39,
    items: [
      {
        id: '1',
        name: '맥북 Pro 16형',
        exp: '16형 Retina 디스플레이 화면에 빠져드는 시각적 경험',
        img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_KR?wid=892&hei=820&&qlt=80&.v=1573165435305',
        salePrice: 2900000,
        price: 2610000,
        opts: ['실버', '화이트', '블랙'],
        review: 1000,
        types: ['best', 'tech'],
        team: true,
        fit: false
      },
      {
        id: '2',
        name: '국산 하이큐 네임펜',
        exp: '부드러운 사용감',
        img: 'image/1.png',
        salePrice: 15000,
        price: 12000,
        opts: ['검정', '파랑', '빨강'],
        review: 20,
        types: ['new', 'best', 'office'],
        team: true,
        fit: true
      },
      {
        id: '3',
        name: '모던오피스 고급 스틸 연필꽂이',
        exp: '깔끔한 정리와 모던한 디자인의 연필꽂이',
        img: 'image/2.png',
        salePrice: 0,
        price: 9900,
        opts: ['실버', '화이트', '블랙'],
        review: 13,
        types: ['new', 'best', 'office'],
        team: true,
        fit: true
      },
      {
        id: '4',
        name: '25절 A5 밴드 양장',
        exp: '편리한 사용을 위한 실용적 디자인',
        img: 'image/3.png',
        salePrice: 25000,
        price: 22500,
        opts: ['블루', '네이비', '그레이', '레드'],
        review: 198,
        types: ['new', 'office'],
        team: true,
        fit: true
      },
      {
        id: '5',
        name: '28인치 4K UHD TV M28ACS',
        exp: '초경량 디자인 모넥스 28인치 UHD TV',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4F8i9pY5Z12cpkMiYKKEEuExbKbK0mumOSqKFB_nLCG8ox_-8UVtc4AGcsQ&usqp=CAc',
        salePrice: 179000,
        price: 159000,
        opts: ['블랙'],
        review: 250,
        types: ['best', 'tech'],
        team: false,
        fit: true
      },
      {
        id: '6',
        name: '비앙카 LED 수납 침대',
        exp: '럭셔리 수납침대 NEW 프리미엄 디자인',
        img: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159135411032102253.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
        salePrice: 239900,
        price: 219900,
        opts: ['메이플', '화이트', '그레이'],
        review: 1996,
        types: ['new', 'home'],
        team: false,
        fit: false
      },
      {
        id: '7',
        name: 'Core3 휴대용 블루투스 스피커',
        exp: 'Hi-Fi 멀티플레이어의 완성작',
        img: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159661805937571109.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
        salePrice: 0,
        price: 206000,
        opts: ['블랙', '베이지', '우든'],
        review: 1,
        types: ['new', 'tech'],
        team: false,
        fit: true
      },
      {
        id: '8',
        name: '유니클럽 풀 커버 포어 파우더 8g',
        exp: '보송보송한 기름종이 파우더',
        img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/160x160ex/image/retail/images/192269891549727-ad85ffdb-a82e-4efc-83ab-66ca2c983027.jpg',
        salePrice: 8900,
        price: 7900,
        opts: ['21호', '22호', '23호'],
        review: 1298,
        types: ['new', 'beauty'],
        team: false,
        fit: true
      },
      {
        id: '9',
        name: '노세범 미네랄 파우더',
        exp: '번들거림 없이 보송한 아기 피부를 연출해주는 피지 컨트롤 파우더',
        img: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2018/10/02/3011022357/7bf86205-95cc-4633-a49f-6086ddd90d8b.jpg',
        salePrice: 6000,
        price: 3990,
        opts: ['단일'],
        review: 10024,
        types: ['best', 'beauty'],
        team: true,
        fit: true
      },
      {
        id: '10',
        name: '휠라 레이 운동화',
        exp: '편안한 쿠션으로 제작된 운동화',
        img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/160x160ex/image/product/image/vendoritem/2019/03/27/4524409863/cba6cf25-6411-4213-a8b9-0e57d0f43450.jpg',
        salePrice: 33120,
        price: 31680,
        opts: ['230', '240', '250', '260'],
        review: 384,
        types: ['fashion'],
        team: false,
        fit: false
      },
      {
        id: '11',
        name: '입생로랑 베르니 아 레브르 워터스테인 6ml',
        exp: '내장된 브러쉬를 사용하여 입술에 자연스럽게 발라줍니다',
        img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/288431760946745-5ba2bbd5-e340-4809-aad9-681111090074.jpg',
        salePrice: 0,
        price: 41150,
        opts: ['602호', '612호', '618호'],
        review: 1207,
        types: ['best', 'beauty'],
        team: false,
        fit: true
      },
      {
        id: '12',
        name: '골드 진주 헤어집게핀 올림머리 집게핀',
        exp: '세비어 골드진주 헤어집게핀 올림머리 집게핀',
        img: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/0a10/c3a5d67dd5d5e35260002ae5cce6681a03f70fe7e4737c10add7df440f8d.jpg',
        salePrice: 0,
        price: 3900,
        opts: ['세비어'],
        review: 53,
        types: ['new', 'fashion'],
        team: false,
        fit: false
      },
      {
        id: '13',
        name: '폴햄 스퍼 롱다운 점퍼',
        exp: 'PHZ4JP3060A',
        img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2019/10/21/10/9/d110efa2-ccfb-4cfc-bc48-d94e40ad22d3.jpg',
        salePrice: 0,
        price: 249000,
        opts: ['베이지', '화이트', '블랙', '핑크'],
        review: 47,
        types: ['new', 'fashion'],
        team: false,
        fit: true
      },
      {
        id: '14',
        name: '집으로온 매콤 해물 곤약 볶음밥 (냉동)',
        exp: '건강하고 가벼운 한 끼를 만들어줄',
        img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/2019/08/14/10/2/ffab5a8a-09bf-4384-9440-9d62ed10e6d1.jpg',
        salePrice: 15000,
        price: 12690,
        opts: ['매콤해물'],
        review: 685,
        types: ['best', 'food'],
        team: false,
        fit: true
      },
      {
        id: '15',
        name: '마이셰프 밀푀유나베 & 칼국수',
        exp: '간편하게 완성하는 근사한 요리',
        img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/8753829180202-0602edd0-5361-43b1-8421-692a9ae49340.JPG',
        salePrice: 15900,
        price: 13900,
        opts: ['마이셰프 밀푀유나베 & 칼국수'],
        review: 4291,
        types: ['new', 'food'],
        team: false,
        fit: false
      },
      {
        id: '16',
        name: '종근당건강 락토핏 생유산균 골드 80',
        exp: '우리 가족에게 꼭 맞는 맞춤형 생유산균',
        img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/105795032197413-3b5afcb4-5a45-474d-b00d-f817dbfd88e0.jpg',
        salePrice: 62500,
        price: 47000,
        opts: ['골드', '슬림'],
        review: 16082,
        types: ['best', 'new', 'food'],
        team: true,
        fit: true
      },
      {
        id: '17',
        name: '부케가르니 나드 샴푸',
        exp: '나드 허브의 은은한 향기가 마음까지 진정시켜드립니다',
        img: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/160x160ex/image/product/image/vendoritem/2019/09/05/3131010071/bd88a040-c2cd-4f0c-b9eb-459df340e038.jpg',
        salePrice: 22000,
        price: 10900,
        opts: ['샴푸'],
        review: 20135,
        types: ['best', 'new', 'beauty', 'home'],
        team: false,
        fit: false
      },
      {
        id: '18',
        name: '데일리워터 물걸레 청소포 대형 리필 30매',
        exp: '기존 물걸레 청소포보다 넉넉한 사이즈로 모든 막대걸레 호환 가능',
        img: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/product/image/vendoritem/2018/10/25/3060083979/d78b5ac7-8fa1-40f5-93b5-8505e83ffb23.jpg',
        salePrice: 40000,
        price: 18700,
        opts: ['물걸레 청소포'],
        review: 3186,
        types: ['best', 'new', 'home'],
        team: true,
        fit: false
      },
      {
        id: '19',
        name: '르미에 라지자 캔들 630g',
        exp: '대한민국 대표 국산 프리미엄 향초',
        img: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/retail/images/2020/02/19/0/7/8ae62d11-a170-4b68-9301-b2817022c8f0.jpg',
        salePrice: 19720,
        price: 18820,
        opts: ['라벤더 바닐라', '라일락 블라썸', '레몬 라벤더', '로맨틱 비치', '로즈마리', '미드나잇 자스민'],
        review: 1338,
        types: ['best', 'home'],
        team: true,
        fit: true
      }
    ]
  },
  getters: {
    newItems (state, getters) {
      return getters.getCom('new')
    },
    bestItems (state, getters) {
      return getters.getCom('best')
    },
    techItems (state, getters) {
      return getters.getCom('tech')
    },
    fashionItems (state, getters) {
      return getters.getCom('fashion')
    },
    beautyItems (state, getters) {
      return getters.getCom('beauty')
    },
    foodItems (state, getters) {
      return getters.getCom('food')
    },
    officeItems (state, getters) {
      return getters.getCom('office')
    },
    homeItems (state, getters) {
      return getters.getCom('home')
    },
    getCom: (state) => (type) => {
      return state.items.filter(item => item.types.includes(type))
    }
  }
}
