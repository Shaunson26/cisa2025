import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

export function HTMLprogram(){
    return(
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="day0" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-primary text-primary-foreground">
                <TabsTrigger value="day0">Day 0</TabsTrigger>
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              {/* Day 0 */}
              <TabsContent value="day0" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Monday 27th October</h2>
                  </div>
                  <div className="rounded-lg border ">
                    <div className="bg-primary text-primary-foreground p-4 rounded-t-lg border-b ">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 " />
                          <span className="text-sm">
                            Museo de la Ciencia y el Cosmos, La Laguna
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Badge pickup & Icebreaker
                      </h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 1 */}
              <TabsContent value="day1" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Tuesday 28th October</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Welcome</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            9:15-10:00
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Plenary Talk - Miquel Arnedo
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            10:00-17:30
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Talks and Speed Talks
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        With coffee breaks and Lunch
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            17:30-18:30
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Poster Session</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 2 */}
              <TabsContent value="day2" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">
                      Wednesday 29th October
                    </h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00-9:45</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Plenary Talk - Amrita Srivathsan
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            9:45-17:30
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Talks and Speed Talks
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        With coffee breaks and Lunch
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            17:30-18:30
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">Poster Session</h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            19:00-19:45
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Divulgate Talk to the General Public
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <h3 className="text-lg font-bold">Congress Dinner</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Day 3 */}
              <TabsContent value="day3" className="mt-6">
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Thursday 30th October</h2>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">9:00-9:45</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Plenary Talk - Lisa Pokorny
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            9:45-12:30
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Talks and Speed Talks
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        With Coffee break
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            12:30-13:00
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Farewell and Closing
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted p-4 rounded-t-lg border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">15:00</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mt-2">
                        Visit to Teide N.P.
                      </h3>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
    )
}