import './HeroSection.css';

type HeroSectionProps = {
    illustration: string;
};

export function HeroSection(props: HeroSectionProps) {
    return (
        <section className="hero-section">
        <div className="content">
            <h1>Your awesome traffic permit consultant.</h1>
            <button>Get Started →</button>
        </div>
        <div className="image">
            <img src={props.illustration} alt="Hero Illustration" />
        </div>
        </section>
    );
}
