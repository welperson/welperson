export default function () {
  return {
    items: [
      {
        id: 'item1',
        name: '맥북 Pro 16형',
        img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_KR?wid=892&hei=820&&qlt=80&.v=1573165435305',
        salePrice: 2919000,
        price: 2800000,
        review: 1000,
        types: ['best'],
        team: true,
        fit: false
      },
      {
        id: 'item2',
        name: '국산 하이큐 네임펜',
        img: 'image/1.png',
        salePrice: 15000,
        price: 12000,
        review: 20,
        types: ['new', 'best'],
        team: true,
        fit: true
      },
      {
        id: 'item3',
        name: '모던오피스 고급 스틸 연필꽂이',
        img: 'image/2.png',
        salePrice: 0,
        price: 9900,
        review: 13,
        types: ['new', 'best'],
        team: true,
        fit: true
      },
      {
        id: 'item4',
        name: '25절 A5 밴드 양장',
        img: 'image/3.png',
        salePrice: 25000,
        price: 22500,
        review: 198,
        types: ['new'],
        team: true,
        fit: true
      }
    ],
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
