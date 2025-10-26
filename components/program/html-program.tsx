import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

interface TabContentProps {
  text: string;
  location: string;
  time: string;
  bg: string;
}

let times1 = [
  {
    text: "Welcome & Institutional event",
    time: "09:15 - 09:35",
  },
  {
    text: "Plenary Talk - Miquel Arnedo",
    time: "09:35 - 10:20",
    bg: "bg-accent",
  },
  {
    time: "10:20 - 10:50",
    text: "Taxonomy, phylogeny & Systematics: Session T1: Chair Rafael Zardoya",
  },
  { time: "10:50 - 11:15", text: "Coffee Break", bg: "bg-secondary" },
  {
    time: "11:15 - 13:05",
    text: "Taxonomy, phylogeny & Systematics: Session T2: Chair Ana Riesgo",
  },
  { time: "13:05 - 14:30", text: "Lunch", bg: "bg-secondary" },
  {
    time: "14:30 - 15:30",
    text: "Taxonomy, phylogeny & Systematics: Session T3: Chair Xavier Turon",
  },
  { time: "15:30 - 16:00", text: "Coffee Break", bg: "bg-secondary" },
  {
    time: "16:00 - 16:30",
    text: "Taxonomy, phylogeny & Systematics: Session T4: Chair Sergi Taboada",
  },
  {
    time: "16:30 - 18:00",
    text: "Biodiversity monitoring & community ecology: Session B1: Chair RosaFernández",
  },
  {
    time: "18:00 - 18:45",
    text: "Poster Session 1",
    bg: "bg-primary-500",
  },
  {
    time: "18:30 - 19:30",
    text: "Plenary Talk - Patricia Álvarez Campos",
    bg: "bg-accent",
  },
];

let times2 = [
  {
    time: "09:15-10:00",
    text: "Plenary Talk - Amrita Srivathsan",
    bg: "bg-accent",
  },
  {
    time: "10:00-10:45",
    text: "Biodiversity monitoring & community ecology: Session B2: Chair Patricia Álvarez-Campos",
  },
  { time: "10:45-11:15", text: "Coffee Break", bg: "bg-secondary" },
  {
    time: "11:15-12:10",
    text: "Biodiversity monitoring & community ecology: Session B3: Chair Marta Novo",
  },
  {
    time: "12:10-13:10",
    text: "Evolutionary Biology: Session E1: Chair Miquel Arnedo",
  },
  { time: "13:10-14:30", text: "Lunch", bg: "bg-secondary" },
  {
    time: "14:30-15:30",
    text: "Evolutionary Biology: Session E2: Chair María Capa",
  },
  { time: "15:30-16:00", text: "Coffee Break", bg: "bg-secondary" },
  {
    time: "16:00-17:15",
    text: "Evolutionary Biology: Session E3: Chairs Lisa Pokorny",
  },
  {
    time: "17:15-18:00",
    text: "Phylogeography and Population genetics: Session P1: Chair Nuria Macías",
  },
  { time: "18:00-18:45", text: "Poster Session 2", bg: "bg-primary-500" },
  {
    time: "20:30-00:00",
    text: "Congress Dinner",
    location: "Gulagú (C. Manuel de Osuna, 24, La Laguna)",
    bg: "bg-secondary-700",
  },
];

let times3 = [
  { time: "09:15-10:00", text: "Plenary Talk - Lisa Pokorny", bg: "bg-accent" },
  {
    time: "10:00-10:45",
    text: "Phylogeography and Population genetics: Session P2: Chair Mario García-París",
  },
  { time: "10:45-11:15", text: "Coffee Break", bg: "bg-secondary" },
  {
    time: "11:15-13:00",
    text: "Phylogeography and Population genetics: Session P3: Chair Jairo Patiño",
  },
  { time: "13:00-13:30", text: "Farewell and Closing" },
  { time: "13:30-15:00", text: "Lunch", bg: "bg-secondary" },
  {
    time: "15:00",
    text: "Visit to Teide",
    location: "Departure from MCC",
    bg: "bg-secondary-700",
  },
];

function TabContent(props: TabContentProps) {
  let bg = props.bg || "bg-primary";
  return (
    <div className="rounded-lg border ">
      <div
        className={`${bg} text-primary-foreground p-4 rounded-t-lg border-b`}
      >
        <div className="flex items-center justify-between">
          {props.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 " />
              <span className="text-sm">{props.location}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{props.time}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mt-2">{props.text}</h3>
      </div>
    </div>
  );
}

export function HTMLprogram() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-10">

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Online Program Outline (short)
            </h2>
            <p className="max-w-[700px]  md:text-xl">
                            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-4">
        <Tabs defaultValue="day0" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-primary text-primary-foreground">
            <TabsTrigger value="day0">Day 0</TabsTrigger>
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {/* Day 0 */}
          <TabsContent value="day0" className="mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Monday 27th October</h2>
              </div>

              <TabContent
                text="Badge pickup & Icebreaker"
                location="Museo de la Ciencia y el Cosmos, La Laguna"
                time="17:00 - 19:15"
                bg=""
              />
            </div>
          </TabsContent>

          {/* Day 1 */}
          <TabsContent value="day1" className="mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Tuesday 28th October</h2>
              </div>

              {times1.map((v, i) => (
                <TabContent
                  key={i}
                  text={v.text}
                  time={v.time}
                  location={v.location}
                  bg={v.bg}
                />
              ))}
            </div>
          </TabsContent>

          {/* Day 2 */}
          <TabsContent value="day2" className="mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Wednesday 29th October</h2>
              </div>

              {times2.map((v, i) => (
                <TabContent
                  key={i}
                  text={v.text}
                  time={v.time}
                  location={v.location}
                  bg={v.bg}
                />
              ))}
            </div>
          </TabsContent>

          {/* Day 3 */}
          <TabsContent value="day3" className="mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Thursday 30th October</h2>
              </div>

              {times3.map((v, i) => (
                <TabContent
                  key={i}
                  text={v.text}
                  time={v.time}
                  location={v.location}
                  bg={v.bg}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
