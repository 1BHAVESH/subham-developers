import { useNavigate } from "react-router-dom";
import EnquiryDialog from "./EnquiryDialog";
import { useState } from "react";
import hero from "../assets/the fort jodhpur.png"; import hero2 from "../assets/shubham paradise.png"; import pdf1 from "../assets/Brochure The Fort Jodhpur.pdf"; 
import pdf2 from "../assets/Brochure Shubham Paradise-I.pdf";
// ShadCN UI elements
 import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label"; 
  import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState("");

  const projects = [
    { img: hero, title: "The Fort Jodhpur", location: "Near AIIMS Hospital, Jodhpur(Raj.)", pdf: pdf1, path: "the-fort-jodhpur"},
    { img: hero2, title: "Shubham Paradise", location: "Tagore Nagar, Opp. Circuit House Pali Rajasthan", pdf: pdf2,   path: "Shubham-Paradise" }
  ];

  return (
    <section className="max-w-[1370px] mx-auto px-6 lg:px-12 py-16">
      <div className="mb-5">
        <div className="flex items-center gap-2">
  <div className="h-1 w-5 bg-yellow-500"></div>
  <p className="font-bold text-[24px]">Projects</p>
</div>

        <h2 className="text-3xl md:text-2xl font-normal">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
       {
        projects.map((project, idx) => (
             <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={project.img} className="w-full h-56 object-cover" />

            <div className="p-4 flex items-center justify-between cursor-pointer">
              <div onClick={() => navigate(`/${project.path}`)}>
                <h3 className="text-lg font-semibold hover:underline">{project.title}</h3>
                <p className="text-sm text-[#d4af37] hover:underline">{project.location}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = project.pdf;
                    link.download = project.pdf.split("/").pop();
                    link.click();
                  }}
                  className="cursor-pointer bg-[#d4af37] hover:bg-yellow-600"
                >
                  Download
                </Button>

                {/* IMPORTED DIALOG */}
              <Dialog>
                 <DialogTrigger asChild>
                       <Button className="cursor-pointer bg-black text-[#d4af37] px-7 py-1 rounded-full text-sm">
                         Enquiry
                       </Button>
                     </DialogTrigger>
                     <DialogTitle></DialogTitle>
                     <DialogContent>
                      <EnquiryDialog selectedProject={project.title}/>
                     </DialogContent>
              </Dialog>
              </div>
            </div>
          </div>
        ))
       }
        
      </div>
    </section>
  );
}
