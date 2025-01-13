import aboutImage from '../assets/about-bg.jpg'
function About() {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 shadow-white/35 shadow-2xl rounded-2xl">
                    <img src={aboutImage} className='rounded-2xl'/>
                </div>
                <div className="md:w-1/2 md:ml-10">
                    <h2 className="text-4xl font-bold mb-8">About <span className="text-yellow-500">GamesLibri</span></h2>
                    <p className="text-lg mb-6">
                        GamesLibri is your go-to resource for discovering amazing free games.
                        We help gamers find the best free titles across all platforms,
                        saving you time and effort in your search.
                    </p>
                    <p className="text-lg mb-4">
                        Our mission is to make the world of free gaming accessible to everyone.
                        Explore our curated collection, filter by genre and platform,
                        and find your next favorite game today!
                    </p>
                    <p className="text-lg">
                        We are constantly striving to improve our skills and explore new technologies to bring you the best possible gaming experience.
                        Join us on this exciting journey as we continue to create amazing games.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;