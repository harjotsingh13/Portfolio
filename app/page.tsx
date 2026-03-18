import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import CertificatesActivities from "@/components/CertificatesActivities";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="bg-[var(--bg-primary)] min-h-screen flex flex-col">
            <Hero3D />
            <div className="relative z-20 flex flex-col">
                <About />
                <Skills />
                <Projects />
                <Education />
                <CertificatesActivities />
                <Contact />
            </div>
        </main>
    );
}
