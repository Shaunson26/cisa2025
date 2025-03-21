import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { IntroText } from "@/components/home/intro-text";
// import { CountdownSection } from "@/components/home/countdown";
import { KeyDateSection } from "@/components/home/key-date-cards";
import { SpeakerSection } from "@/components/home/speaker-cards";
import { SponsorSection } from "@/components/home/sponsers";
import { Footer } from "@/components/footer";

const pageProps = {
  mainTitle: "CISA 2025",
  subTitle: "VI Iberian Congress of Biological Systematics",
  conferenceDates: "October 26-30, 2025",
  location: "Tenerife, Spain",
  cardImage: "/cisa2025/images/logos/cisa-logo-no-letters.svg",
  bgImage: "/cisa2025/images/background-desktop.webp",
  abstractDate: "Janurary 1, 2025",
  earlyRegistrationDate: "June 30, 2025",
  regularRegistrationDate: "July 1, 2025"
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      
      <Navbar />

      <main className="flex-1">

        <Hero 
          mainTitle = {pageProps.mainTitle}
          subTitle = {pageProps.subTitle}
          dates = {pageProps.conferenceDates}
          location = {pageProps.location}
          cardImage ={pageProps.cardImage}
          bgImage = {pageProps.bgImage}
          />

        <IntroText />
        {/* <CountdownSection /> */}
        < KeyDateSection
          abstractDate = {pageProps.abstractDate}
          earlyRegistrationDate = {pageProps.earlyRegistrationDate}
          regularRegistrationDate = {pageProps.regularRegistrationDate}
          conferenceDates = {pageProps.conferenceDates}
        />

        <SpeakerSection />  
  
        {/* Organizing Committee */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Organizing Committee
                </h2>
                <p className="text-muted-foreground">
                  Meet the team behind CISA 2025
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Paula Arribas</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Carmelo Andújar</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Brent Emerson</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Jairo Patiño</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Alfredo Valido</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Manuel Nogales</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Heriberto López</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Antonia Saces-Castellano</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Irene Santos-Perdomo</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Nira Vega</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Lorenzo Falcón</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Marius Eisele</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Victoria Nieto</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">María Borrallo</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Carmen Balibrea</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Antonio Pérez</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Louis Steven Jay</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Raul Orihuela</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Oscar Castillo</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Lucía Belén Bernardos</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Committee */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Scientific Committee
                </h2>
                <p className="text-muted-foreground">
                  Meet our scientific committee members
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Miquel Ángel Arnedo</h3>
                    <p className="text-sm text-muted-foreground truncate">Universitat de Barcelona</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Rafael Zardoya</h3>
                    <p className="text-sm text-muted-foreground truncate">MNCN-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Mario García Paris</h3>
                    <p className="text-sm text-muted-foreground truncate">MNCN-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Marta Novo</h3>
                    <p className="text-sm text-muted-foreground truncate">Universidad Complutense de Madrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Ana Riesgo</h3>
                    <p className="text-sm text-muted-foreground truncate">MNCN-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Rosa Fernández</h3>
                    <p className="text-sm text-muted-foreground truncate">IBE-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Sergi Taboada</h3>
                    <p className="text-sm text-muted-foreground truncate">MNCN-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Lisa Pokorny</h3>
                    <p className="text-sm text-muted-foreground truncate">Real Jardín Botánico-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Nuria Macías</h3>
                    <p className="text-sm text-muted-foreground truncate">Universidad de La Laguna</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Xavier Turón</h3>
                    <p className="text-sm text-muted-foreground truncate">CEAB-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Paulo Borges</h3>
                    <p className="text-sm text-muted-foreground truncate">Universidade dos Açores</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Gerard Talavera</h3>
                    <p className="text-sm text-muted-foreground truncate">IBE-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Jesús Gómez-Zurita</h3>
                    <p className="text-sm text-muted-foreground truncate">IBE-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Yurena Arjona</h3>
                    <p className="text-sm text-muted-foreground truncate">Universidad de La Laguna</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Isabel Sanmartín</h3>
                    <p className="text-sm text-muted-foreground truncate">Real Jardín Botánico-CSIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">Alfredo Reyes</h3>
                    <p className="text-sm text-muted-foreground truncate">IPNA-CSIC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SponsorSection />   


      </main>
      <Footer />
      
    </div>
  );
}
