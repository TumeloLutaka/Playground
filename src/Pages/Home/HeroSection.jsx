export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content-box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Tumelo</p>
                    <h1 className="hero--section--title">
                        Welcome to my <span className="hero--section--title--color">Playground!</span>
                        <br />
                    </h1>
                    <p className="hero--section--description">
                        I design and build beautiful websites and linked them here for your viewing pleasure.
                        <br />If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.
                    </p>
                </div>

                <button className="btn btn-primary">Get In Touch</button>
            </div>
        </section>
    )
}