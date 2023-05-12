import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/FDsy8QW/hat.webp",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "footwear",
    imageUrl: "https://i.ibb.co/F8CsXBY/sneakers.webp",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl: "https://i.ibb.co/Vw9VnSN/woman.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/wy1y2Yg/men.webp",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
