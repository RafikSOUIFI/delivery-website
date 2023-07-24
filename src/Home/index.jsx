import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Blog from './Blog';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Home = () => {

    return (
        <div id="top">
            <Navbar />
            <main>
                <article>
                    <Hero />
                    <About />
                    <Service />
                    <Blog />
                    <Newsletter />
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default Home;