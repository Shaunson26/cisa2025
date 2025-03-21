"use client"

import Link from "next/link"
import Image from "next/image"
import { AlertCircle, CreditCard, Loader2, LogOut, Mail, Menu, Settings, Sun, Trash, Twitter, User } from "lucide-react"

import { Button } from "@/components/ui/button"
//import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function ComponentsPage() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/program", label: "Program" },
    { href: "/speakers", label: "Speakers" },
    { href: "/venue", label: "Venue" },
    { href: "/contact", label: "Contact" },
    { href: "/components", label: "Components", active: true },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Conference Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">ConferenceX 2025</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? "text-sm font-medium transition-colors hover:text-primary"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button className="hidden md:inline-flex">Register Now</Button>
          {/* <MobileNav links={navLinks} /> */}
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UI Components</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A showcase of all available UI components for the ConferenceX website
                </p>
              </div>
            </div>
          </div>
        </section>

        <ComponentShowcase />
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © CISA 2025. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ComponentShowcase() {
  const { toast } = useToast()

  return (
    <div className="container px-4 py-12 md:px-6">
      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data-display">Data Display</TabsTrigger>
        </TabsList>

        {/* Buttons Section */}
        <TabsContent value="buttons" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Button with Icon</h3>
            <div className="flex flex-wrap gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
              </Button>
              <Button variant="outline">
                <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
              </Button>
              <Button variant="secondary">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Icon Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button size="icon" variant="outline">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Open menu</span>
              </Button>
              <Button size="icon" variant="destructive">
                <Trash className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Delete item</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Loading Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button disabled variant="secondary">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Typography Section */}
        <TabsContent value="typography" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Typography</h2>
            <div className="space-y-4">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
                <p className="text-muted-foreground">Font size: 4xl (desktop: 5xl)</p>
              </div>
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Heading 2
                </h2>
                <p className="text-muted-foreground">Font size: 3xl</p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
                <p className="text-muted-foreground">Font size: 2xl</p>
              </div>
              <div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
                <p className="text-muted-foreground">Font size: xl</p>
              </div>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  This is a paragraph of text. The default paragraph style with proper line height and spacing. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl
                  nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
              </div>
              <div>
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  "After all," he said, "everyone enjoys a good joke, so it's only fair that they should occasionally
                  enjoy a bad one too." — Zaphod Beeblebrox
                </blockquote>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Small text with muted color</p>
                <p className="text-xs text-muted-foreground">Extra small text with muted color</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Cards Section */}
        <TabsContent value="cards" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cards</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with header, content, and footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content area of the card. You can put any content here.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Notification</CardTitle>
                  <CardDescription>You have 3 unread messages</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Hey, are you coming to the conference?</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">I just submitted my paper for review.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?height=160&width=320" alt="Card cover" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Card with Image</CardTitle>
                  <CardDescription>A card with an image at the top</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cards can include images, avatars, and other media.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Dialogs Section */}
        <TabsContent value="dialogs" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Dialogs & Popovers</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>A modal dialog that interrupts the user</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value="John Doe" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@johndoe" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sheet</CardTitle>
                  <CardDescription>A slide-in dialog for mobile and larger screens</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Profile</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="sheet-name">Name</Label>
                          <Input id="sheet-name" value="John Doe" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="sheet-username">Username</Label>
                          <Input id="sheet-username" value="@johndoe" />
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                  <CardDescription>A popover that floats around a trigger element</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Dimensions</h4>
                          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>
                            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">Height</Label>
                            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover for Tooltip</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>A simple tooltip that appears on hover</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Forms Section */}
        <TabsContent value="forms" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Form Controls</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                  <CardDescription>Text input components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." id="message" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                  <CardDescription>Checkboxes, radio buttons, and switches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Checkboxes</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to newsletter
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Switch</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select & Slider</CardTitle>
                  <CardDescription>Dropdown select and range slider</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="volume">Volume</Label>
                      <span className="w-12 text-right text-sm">75%</span>
                    </div>
                    <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Example</CardTitle>
                  <CardDescription>A complete form with various controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input type="text" id="full-name" placeholder="John Doe" />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="form-email">Email</Label>
                    <Input type="email" id="form-email" placeholder="john@example.com" />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="attendee">Attendee</SelectItem>
                        <SelectItem value="speaker">Speaker</SelectItem>
                        <SelectItem value="sponsor">Sponsor</SelectItem>
                        <SelectItem value="organizer">Organizer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea placeholder="Tell us about yourself" id="bio" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <label
                      htmlFor="marketing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receive marketing emails
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Feedback Section */}
        <TabsContent value="feedback" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Feedback Components</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>Alerts to provide feedback to users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>This is an informational alert with neutral styling.</AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>This is an error alert with destructive styling.</AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toast</CardTitle>
                  <CardDescription>Temporary notifications that appear on the screen</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        toast({
                          title: "Success!",
                          description: "Your action was completed successfully.",
                        })
                      }}
                    >
                      Show Toast
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => {
                        toast({
                          variant: "destructive",
                          title: "Error!",
                          description: "There was a problem with your request.",
                        })
                      }}
                    >
                      Show Error Toast
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Small status descriptors for UI elements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Navigation Section */}
        <TabsContent value="navigation" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Navigation Components</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>Switch between different views</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="p-4">
                      <p>Account settings tab content</p>
                    </TabsContent>
                    <TabsContent value="password" className="p-4">
                      <p>Password settings tab content</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>Vertically collapsing content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that match the other components.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Data Display Section */}
        <TabsContent value="data-display" className="space-y-8 pt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Display Components</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                  <CardDescription>Image element with fallback for user profiles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>

                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>A horizontal or vertical separator line</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Blog</div>
                      <Separator orientation="vertical" />
                      <div>About</div>
                      <Separator orientation="vertical" />
                      <div>Contact</div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Terms</div>
                      <Separator orientation="vertical" />
                      <div>Privacy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

