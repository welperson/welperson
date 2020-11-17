export default function () {
  return {
    items: [
      {
        id: 'item1',
        name: '맥북 Pro 16형',
        exp: '16형 Retina 디스플레이 화면에 빠져드는 시각적 경험',
        img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_KR?wid=892&hei=820&&qlt=80&.v=1573165435305',
        salePrice: 2900000,
        price: 2610000,
        opts: ['실버', '화이트', '블랙'],
        review: 1000,
        types: ['best'],
        cart: true,
        cartCnt: 1,
        team: true,
        fit: false
      },
      {
        id: 'item2',
        name: '국산 하이큐 네임펜',
        exp: '부드러운 사용감',
        img: 'image/1.png',
        salePrice: 15000,
        price: 12000,
        opts: ['검정', '파랑', '빨강'],
        review: 20,
        types: ['new', 'best'],
        cart: false,
        cartCnt: 0,
        team: true,
        fit: true
      },
      {
        id: 'item3',
        name: '모던오피스 고급 스틸 연필꽂이',
        exp: '깔끔한 정리와 모던한 디자인의 연필꽂이',
        img: 'image/2.png',
        salePrice: 0,
        price: 9900,
        opts: ['실버', '화이트', '블랙'],
        review: 13,
        types: ['new', 'best'],
        cart: false,
        artCnt: 0,
        team: true,
        fit: true
      },
      {
        id: 'item4',
        name: '25절 A5 밴드 양장',
        exp: '편리한 사용을 위한 실용적 디자인',
        img: 'image/3.png',
        salePrice: 25000,
        price: 22500,
        opts: ['블루', '네이비', '그레이', '레드'],
        review: 198,
        types: ['new'],
        cart: true,
        cartCnt: 1,
        team: true,
        fit: true
      }
    ],
    carts: [
      {
        id: 'item2',
        cnt: 1
      },
      {
        id: 'item3',
        cnt: 1
      }
    ],
    heart: ['item2', 'item3'],

    adds: [
      {
        id: 'add1',
        address: '서울시 관악구 신림동 1839-5 우리동네아파트 102동 418호',
        person: '김장미',
        num: '010-1111-2222'
      },
      {
        id: 'add2',
        address: '서울시 관악구 봉천동 551-3 104호',
        person: '박봉천동',
        num: '010-1234-5678'
      },
      {
        id: 'add3',
        address: '강원도 춘천시 퇴계3차 주공아파트 4동 102호',
        person: '최춘천',
        num: '010-7777-8888'
      }
    ]
  }
}
