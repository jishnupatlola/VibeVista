import AddFriendCard from "../ui/AddFriendCard";
import CardComponent from "../ui/CardComponent";
import MainHero from "../ui/MainHero";
import MainInfoCard from "../ui/MainInfoCard";

function Hero() {
  return (
    <div className="hero-section flex items-center justify-center min-h-screen">
        <div className="mr-10">
            <div>
                <MainHero></MainHero>
            </div>
        </div>
         <div className="flex-col items-center justify-between">
            <div className="mb-10">
            <MainInfoCard></MainInfoCard>
            </div>
            <div>
                <CardComponent />
            </div>
        </div>
    </div>
  );
}

export default Hero;
