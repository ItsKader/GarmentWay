import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/FDsy8QW/hat.webp",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "footwear",
      imageUrl: "https://i.ibb.co/F8CsXBY/sneakers.webp",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/Vw9VnSN/woman.jpg",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/wy1y2Yg/men.webp",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
