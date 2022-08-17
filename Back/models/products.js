const products = [
  {
    _id: "1",
    name: "iPhone 12",
    image: "/images/iphone-12.jpg",
    description: "توضیحات محصول",
    price: 1100 + "$",
  },
  {
    _id: "2",
    name: "iPhone SE",
    image: "/images/Iphone se/iphone se-black.jpg",
    color: [
      {
        name: "Black",
        image: "/images/Iphone se/iphone se-black.jpg",
        id: "black",
      },
      { name: "Red", image: "/images/Iphone se/iphone se-red.jpg", id: "red" },
      { name: "White", image: "/images/Iphone se/iphone se.jpg", id: "white" },
    ],
    description: "توضیحات محصول",
    price: 430 + "$",
  },
  {
    _id: "8",
    name: "iPhone 11",
    image: "/images/Iphone 11/iphone 11-black.jpg",
    color: [
      {
        name: "Black",
        image: "/images/Iphone 11/iphone 11-black.jpg",
        id: "black",
      },
      {
        name: "Yellow",
        image: "/images/Iphone 11/iphone 11-Yellow.jpg",
        id: "yellow",
      },
      { name: "Red", image: "/images/Iphone 11/Iphone 11.png", id: "red" },
    ],
    description: "توضیحات محصول",
    price: 430 + "$",
  },
  {
    _id: "3",
    name: "MacBook Pro",
    image: "/images/macbook.jpg",
    description: "توضیحات محصول",
    price: 1500 + "$",
  },
  {
    _id: "4",
    name: "MacBook Air",
    image: "/images/Macbook-air-m2.jpg",
    description: "توضیحات محصول",
    price: 1200 + "$",
  },
  {
    _id: "5",
    name: "Imac M1",
    image: "/images/Imac.jpg",
    description: "توضیحات محصول",
    price: 1800 + "$",
  },
  {
    _id: "9",
    name: "Apple Watch",
    image: "/images/apple-watch.jpg",
    description: "توضیحات محصول",
    price: 340 + "$",
  },
  {
    _id: "6",
    name: "Airpods Max",
    image: "/images/Airpod-ma.jpg",
    description: "توضیحات محصول",
    price: 530 + "$",
  },
  {
    _id: "7",
    name: "Airpods",
    image: "/images/airpods.jpg",
    description: "توضیحات محصول",
    price: 250 + "$",
  },
];

module.exports = products;
