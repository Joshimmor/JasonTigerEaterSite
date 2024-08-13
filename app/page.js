import Slider from "./components/Home/Slider";
import { SwipeCarousel } from "./components/Home/SwipeCarousel";


export default function Home() {
  let images  = ["https://i.imgur.com/X82lB59.png","https://i.imgur.com/X82lB59.png"]
  return (
    <main className="flex h-screen ">
        <SwipeCarousel imgs={images}/>
    </main>
  );
}
