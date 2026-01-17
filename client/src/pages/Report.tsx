import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Handshake,
  Cpu,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Building2,
  FileText,
  ShieldCheck,
  ExternalLink,
  Heart,
  ZoomIn
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Asset imports
import adminDashboardImg from "@assets/Screenshot_2026-01-16_at_18-18-10_Admin_Dashboard_-_Fatherhood_1768617584305.png";
import fatherhoodInitiativeImg from "@assets/Screenshot_2026-01-16_at_18-19-17_Fatherhood_Initiative_Man_Up_1768617593745.png";
import fatherhoodSignupImg from "@assets/Screenshot_2026-01-16_at_18-20-55_Fatherhood_Initiative_-_Sign_1768617600632.png";
import fatherhoodFlyerImg from "@assets/8876954279097277120_1768617614008.JPG";
import safestepDemoImg from "@assets/Screenshot_2026-01-16_at_18-56-41_SafeStep_-_Demo_Access_1768617633660.png";
import hackathonFlyerImg from "@assets/3292103089454230872(1)(1)_1768617649039.PNG";
import thanksgivingDriveImg from "@assets/IMG_0306_1768618354896.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Report() {
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
            <span className="text-primary uppercase">Man Up! Inc.</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-muted-foreground">
            <button onClick={() => scrollToSection('tech')} className="hover:text-primary transition-colors">Infrastructure</button>
            <button onClick={() => scrollToSection('community')} className="hover:text-primary transition-colors">Impact</button>
            <button onClick={() => scrollToSection('restructuring')} className="hover:text-primary transition-colors">Restructuring</button>
            <button onClick={() => scrollToSection('hackathon')} className="hover:text-secondary transition-colors font-bold uppercase tracking-wide">Hackathon</button>
          </div>
          <div>
             <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary/5">
               Highlight Report
             </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-10 space-y-24 mx-auto">
        
        {/* Hero Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[2.5rem] bg-primary text-white p-8 md:p-16 border-b-8 border-secondary"
        >
          <div className="relative z-10 max-w-4xl space-y-6">
            <motion.div variants={item} className="inline-flex items-center rounded-full bg-secondary/20 border border-secondary/30 px-4 py-1.5 text-sm font-bold text-secondary backdrop-blur-sm uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Recent Highlights
            </motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-7xl font-bold tracking-tight leading-none text-white">
              Elevating Impact <br className="hidden md:block"/> through Innovation
            </motion.h1>
            <motion.p variants={item} className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium">
              A highlight report documenting technical infrastructure development, community mobilization, and institutional partnerships.
            </motion.p>
            
            <motion.div variants={item} className="pt-8 flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[140px]">
                <div className="text-3xl font-bold text-secondary">170+</div>
                <div className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-black">Community Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[140px]">
                <div className="text-3xl font-bold text-secondary">3</div>
                <div className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-black">Digital Platforms</div>
              </div>
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[140px]">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-black">Partnerships</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section I: Technical Infrastructure */}
        <section id="tech" className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-primary uppercase">Technical Infrastructure</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg">
              Proprietary digital tools modernized to streamline participant engagement and data integrity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <Card className="border-2 border-primary/10 overflow-hidden shadow-xl rounded-2xl">
                  <img src={fatherhoodInitiativeImg} alt="Fatherhood Initiative Web Platform" className="w-full h-auto object-cover" />
                  <div className="p-6 bg-primary text-white">
                    <h3 className="text-xl font-bold mb-2">Fatherhood Initiative Ecosystem</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Custom-built signup portal and administrative dashboard ready for integration with Manupinc.org.
                    </p>
                    <Button asChild variant="secondary" size="sm" className="font-bold">
                      <a href="https://as12711.github.io/MUI-Fatherhood/" target="_blank" rel="noopener noreferrer">
                        View Live Platform <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                   <div
                     className="relative group cursor-pointer"
                     onClick={() => setEnlargedImage({ src: adminDashboardImg, alt: "Admin Dashboard" })}
                   >
                     <img src={adminDashboardImg} alt="Admin Dashboard" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl flex items-center justify-center">
                       <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                   <div
                     className="relative group cursor-pointer"
                     onClick={() => setEnlargedImage({ src: fatherhoodSignupImg, alt: "Mobile Signup Form" })}
                   >
                     <img src={fatherhoodSignupImg} alt="Mobile Signup Form" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl flex items-center justify-center">
                       <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                </div>
             </div>
             
             <div className="space-y-8">
                <div className="space-y-6">
                   <Badge className="bg-secondary text-primary font-bold px-3 py-1">Departmental Expansion</Badge>
                   <h3 className="text-3xl font-bold tracking-tight">Sisterhood Initiative Replication</h3>
                   <p className="text-muted-foreground leading-relaxed text-lg">
                     Taking initiative to expand technical capacity across departments, I replicated the Fatherhood system for the Community Development Team (CDT) to ensure organizational consistency.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-primary">
                         <h4 className="font-bold text-primary mb-1">Source Tracking</h4>
                         <p className="text-xs text-muted-foreground">Distinguishing online vs. manual registrations for accurate reporting.</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-primary">
                         <h4 className="font-bold text-primary mb-1">Staff Dashboard</h4>
                         <p className="text-xs text-muted-foreground">Manual entry capabilities for paper signup sheets from the field.</p>
                      </div>
                   </div>
                </div>

                <Card className="p-6 bg-primary text-white overflow-hidden relative">
                   <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3">
                         <Database className="h-6 w-6 text-secondary" />
                         <h4 className="font-bold text-xl text-secondary">Q1 Data Mandate</h4>
                      </div>
                      <p className="text-sm text-white/80 italic">
                        "Goal: 500 participants by next quarter through QR code signup, online outreach, and cross-organizational collaboration."
                      </p>
                      <Separator className="bg-white/20" />
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                        <CheckCircle2 className="h-4 w-4" />
                        Infrastructure Ready for Integration
                      </div>
                   </div>
                   <Database className="absolute bottom-[-20px] right-[-20px] w-32 h-32 opacity-10" />
                </Card>
             </div>
          </div>
        </section>

        {/* Section II: Community Impact & Thanksgiving Drive */}
        <section id="community" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-secondary pb-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tight uppercase text-primary">Community Impact</h2>
              <p className="text-muted-foreground text-lg">Mobilizing resources and advocating for high-risk youth.</p>
            </div>
            <div className="flex gap-2">
               <Badge className="bg-primary text-white">100+ Attendees at Fatherhood Gathering</Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8 order-2 lg:order-1">
                <div className="bg-white rounded-3xl border-2 border-primary/10 p-8 shadow-xl space-y-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 text-primary/5">
                      <Heart className="h-24 w-24" />
                   </div>
                   <div className="space-y-2">
                      <Badge className="bg-secondary text-primary font-bold">November 26, 2025</Badge>
                      <h3 className="text-3xl font-bold text-primary uppercase">Thanksgiving Community Kickback</h3>
                   </div>
                   <p className="text-muted-foreground leading-relaxed">
                      Organized and mobilized 12 community volunteers to host a kickback at PJACC. Served approximately 70 community members with hot food, Gently used clothes, and footwear. 
                   </p>
                   <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm font-semibold">
                         <Users className="h-4 w-4 text-primary" /> 12 Volunteers
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm font-semibold">
                         <Calendar className="h-4 w-4 text-primary" /> Served 70+ Members
                      </div>
                   </div>
                   <p className="text-xs font-medium text-primary/60 border-t pt-4">
                      Donated leftovers delivered to Samaritan Village on Van Siclen Ave.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <Card className="p-6 bg-primary text-white">
                      <GraduationCap className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-bold text-lg mb-2">Advocacy & Mentorship</h4>
                      <p className="text-xs text-white/70">11 school support visits conducted for high-risk participants, yielding documented behavioral improvements.</p>
                   </Card>
                   <Card className="p-6 border-primary border-2">
                      <Smartphone className="h-8 w-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg mb-2 text-primary uppercase tracking-tighter">Media Synergy</h4>
                      <p className="text-xs text-muted-foreground">Collaborated with Media & Arts to integrate QR codes for digital-first outreach.</p>
                   </Card>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <Card className="overflow-hidden rounded-[2rem] border-4 border-secondary shadow-2xl relative group">
                   <img src={thanksgivingDriveImg} alt="Thanksgiving Drive Volunteers" className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <p className="text-sm font-bold uppercase tracking-widest text-secondary">Volunteer Team @ PJACC</p>
                      <p className="text-xs text-white/80">Community mobilization in action</p>
                   </div>
                </Card>
             </div>
          </div>
        </section>

        {/* Updated Restructuring Section */}
        <section id="restructuring" className="space-y-12">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl font-bold tracking-tight text-primary uppercase">Boys Club Restructuring</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                    At the direction of the Executive Director, I completed a full restructuring of the Boys Club curriculum and participant protocols to modernize our approach to "low-intensity case management."
                 </p>
                 <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                       <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                          <FileText className="h-5 w-5 text-white" />
                       </div>
                       <div>
                          <h4 className="font-bold">Three-Tier Curriculum</h4>
                          <p className="text-sm text-muted-foreground">Tailored for ages 5-15, covering Hygiene, Leadership, STEM, and Workforce Prep.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                          <ShieldCheck className="h-5 w-5 text-white" />
                       </div>
                       <div>
                          <h4 className="font-bold">Legal Compliance</h4>
                          <p className="text-sm text-muted-foreground">Updated waivers and permission slips with appropriate legalese to protect MUI liability.</p>
                       </div>
                    </div>
                 </div>
                 <div className="flex gap-4 pt-4">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <a href="./Overview_MU_Boys_Club.pdf" target="_blank" rel="noopener noreferrer">
                        View Curriculum PDF <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <a href="./updated_waivers.pdf" target="_blank" rel="noopener noreferrer">
                        Waiver Protocols <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                 </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 <img src={fatherhoodFlyerImg} alt="Updated Materials" className="rounded-3xl border-4 border-secondary shadow-xl" />
              </div>
           </div>
        </section>

        {/* Combined Innovation Section: Hackathon + SafeStep */}
        <section id="hackathon" className="relative overflow-hidden rounded-[3.5rem] bg-slate-950 text-white">
           <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-16 space-y-10 relative z-10">
                 <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest">
                       <Cpu className="h-4 w-4" /> Upcoming • January 28, 2026
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">THE ALGORITHM OF INTERRUPTION</h2>
                    <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                       A landmark collaboration with <span className="text-white font-bold">NYU CUSP</span>. We are bringing together Violence Interrupters and university scholars for community-led data collection.
                    </p>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm space-y-6">
                       <div className="flex items-center gap-3">
                          <Badge className="bg-primary text-white">Featured Tool</Badge>
                          <h3 className="text-2xl font-bold text-secondary uppercase">SafeStep App</h3>
                       </div>
                       <p className="text-sm text-white/70 leading-relaxed">
                          Inspired by community canvassing, this navigation app demonstrates how crowdsourced safety data informs violence interruption methodologies. It will be a core focus of our upcoming hackathon.
                       </p>
                       <div className="flex flex-wrap gap-4 pt-2">
                          <Button asChild variant="secondary" size="sm" className="font-bold">
                             <a href="https://safestep-demo.surge.sh/" target="_blank" rel="noopener noreferrer">
                                Launch SafeStep Demo <ExternalLink className="ml-2 h-3 w-3" />
                             </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 font-bold">
                             <a href="https://lu.ma/na5an5dn" target="_blank" rel="noopener noreferrer">
                                View Hackathon RSVP <ExternalLink className="ml-2 h-3 w-3" />
                             </a>
                          </Button>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-l-2 border-secondary pl-6">
                       <div>
                          <h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-1">Keynote Speaker</h4>
                          <p className="font-bold text-lg">A.T. Mitchell-Mann</p>
                          <p className="text-xs text-white/50">MUI CEO & NYC Safety Czar</p>
                       </div>
                       <div>
                          <h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-1">Venue</h4>
                          <p className="font-bold text-lg">12 Washington Pl</p>
                          <p className="text-xs text-white/50">NYU Campus</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative min-h-[500px] overflow-hidden">
                 <img src={hackathonFlyerImg} alt="Hackathon Flyer" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-l lg:from-slate-950 lg:via-slate-950/60 lg:to-transparent"></div>
                 
                 {/* SafeStep Overlay Preview */}
                 <div className="absolute top-10 right-10 w-48 h-auto hidden md:block animate-bounce-slow">
                    <Card className="bg-black/80 border-secondary border p-2 overflow-hidden shadow-2xl">
                       <img src={safestepDemoImg} alt="SafeStep Preview" className="rounded opacity-90" />
                    </Card>
                 </div>
              </div>
           </div>
        </section>

        {/* Section IV: Strategic Partnerships Grid */}
        <section id="partners" className="space-y-8">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary uppercase">Institutional Partners</h2>
              <div className="h-1 w-24 bg-secondary mx-auto"></div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "NYU Prison Ed.", "NYU CUSP", "KAVI Data", "City Council", "Public Advocate", 
                "DYCD", "SCO Family", "RISE (DV)", "Brooklyn Defender", "Fortune Society"
              ].map((p, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-primary/5 rounded-xl text-center group hover:bg-primary hover:text-white transition-all">
                   <Building2 className="h-6 w-6 mx-auto mb-2 text-primary group-hover:text-secondary" />
                   <p className="text-[10px] font-black uppercase tracking-tighter">{p}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Roadmap */}
        <section className="pb-20">
           <Card className="bg-primary text-white p-10 md:p-16 rounded-[3rem] border-b-[12px] border-secondary relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-16">
                 <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-secondary">Q1 2026 Priorities</h2>
                    <p className="text-white/70 italic leading-relaxed">
                       "My commitment is to Man Up! Inc.'s mission, and I believe the most effective execution of that mission sometimes requires presence in community spaces, partner institutions, and technical environments."
                    </p>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded bg-secondary flex items-center justify-center font-black text-primary text-[10px]">01</div>
                          <p className="text-sm font-bold">Microsoft GitHub intro to CS Series</p>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded bg-secondary flex items-center justify-center font-black text-primary text-[10px]">02</div>
                          <p className="text-sm font-medium">Dashboard scale-up with Brother Shoebi</p>
                       </div>
                    </div>
                 </div>
                 <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md flex flex-col justify-center text-center">
                    <h4 className="text-6xl font-bold text-secondary mb-2">500</h4>
                    <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">Participant Data Goal</p>
                    <div className="mt-8">
                       <Button asChild className="bg-secondary text-primary hover:bg-white font-black w-full uppercase tracking-widest text-xs">
                         <a href="./Q4_2025_Highlight_Report.docx" target="_blank" rel="noopener noreferrer">
                           Full Highlight Report <ExternalLink className="ml-2 h-3 w-3" />
                         </a>
                       </Button>
                    </div>
                 </div>
              </div>
           </Card>
        </section>

      </main>

      <footer className="bg-white py-12 border-t">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="space-y-1">
              <p className="text-primary font-black uppercase tracking-tighter text-2xl">Aunray Stanford</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Program Development • Outreach • Partnerships</p>
           </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      <Dialog open={!!enlargedImage} onOpenChange={() => setEnlargedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-2 bg-black/95 border-none">
          <DialogTitle className="sr-only">{enlargedImage?.alt}</DialogTitle>
          {enlargedImage && (
            <img
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
