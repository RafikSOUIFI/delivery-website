import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Feature from './Feature';
import Projects from './Projects';
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
                    <Feature />
                    <Projects />
                    <Blog />
                    <Newsletter />
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default Home;