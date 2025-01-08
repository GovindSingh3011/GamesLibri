import background from "../assets/home_img.png";
import LatestGames from "./LatestGames";

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center flex items-center justify-end"
        style={{
          backgroundImage: `url(${background})`,
          height: '400px'
        }}
      >
        <div className="text-center text-white pr-24 max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Discover <span className="text-yellow-500">Your Next</span> Favorite <span className="text-yellow-500">Game</span></h2>
          <p className="text-lg">
            Step into your personalized gaming hub! We&apos;ve handpicked games just for you based on your perferences. The more you explore and engage, the more refined and exciting your recommendation become. Ready to see what&apos;s waiting for you?
          </p>
        </div>
      </div>

      <div className="p-8 bg-[#19182b] ">
        <h1 className="text-4xl font-bold text-white ">Latest <span className="text-yellow-500">Release</span> </h1>
        <LatestGames />
      </div>
    </>
  );
}

export default Home;
