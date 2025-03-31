import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { IntroText } from "@/components/home/intro-text";
// import { CountdownSection } from "@/components/home/countdown";
import { KeyDateSection } from "@/components/home/key-date-section";
import { KeynoteSpeakerSection } from "@/components/home/keynote-speaker-section";
import { OrganisationCommitteeSection } from "@/components/home/organisation-committee-section";
import { ScientificCommitteeSection } from "@/components/home/scientific-committee-section";
import { SponsorSection } from "@/components/home/sponsors";
import { Footer } from "@/components/footer";

const pageProps = {
  mainTitle: "CISA 2025",
  subTitle: "VI Iberian Congress of Biological Systematics",
  conferenceDates: "October 26 - 30, 2025",
  location: "Tenerife, Spain",
  cardImage: "/cisa2025/images/venue/la_laguna.webp",
  bgImage: "/cisa2025/images/background-desktop.webp",
  abstractDate: "Janurary 1, 2025",
  earlyRegistrationDate: "June 30, 2025",
  regularRegistrationDate: "July 1, 2025"
}

// bg-gradient-to-b from-background to-background/90
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
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
        <KeynoteSpeakerSection />  

        {/* <CountdownSection /> */}
        < KeyDateSection
          abstractDate = {pageProps.abstractDate}
          earlyRegistrationDate = {pageProps.earlyRegistrationDate}
          regularRegistrationDate = {pageProps.regularRegistrationDate}
          conferenceDates = {pageProps.conferenceDates}
        />

    
        <OrganisationCommitteeSection />
        <ScientificCommitteeSection />    
        <SponsorSection />   


      </main>
      <Footer />
      
    </div>
  );
}
