import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function EnquiryDialog({ selectedProject }) {   // 👈 projects array receive

  console.log(selectedProject)

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  useEffect(() =>{
    if(selectedProject){
      setValue("projectType", selectedProject)
    }
  },[selectedProject, setValue])

  const onSubmit = async (data) => {
  const finalData = { ...data, project: selectedProject };

  //  Use toast.promise
  await toast.promise(
    fetch("http://localhost:3001/api/mail/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    }).then(res => res.json()),

    {
      loading: "Sending your enquiry...",   
      success: "Mail sent successfully! ",  
      error: "Something went wrong ❌",     
    }
  );

  reset(); // Reset form after mail send
};


  return (
  
      

     

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">


          {/* DROPDOWN PROJECT LIST */}
          <Select defaultValue={selectedProject} onValueChange={(value) => setValue("projectType",value)}>
            <SelectTrigger className="w-full  rounded-md">
              <SelectValue placeholder="Select Project" />
            </SelectTrigger>
            <SelectContent className="">
              {selectedProject ? <SelectItem value={selectedProject} className="text-3xl">{selectedProject}</SelectItem> :
              <>
              <SelectItem value="The Fort Jodhpur" className="text-3xl">The Fort Jodhpur</SelectItem>
              <SelectItem value="Shubham Paradise" className="text-3xl">Shubham Paradise</SelectItem>
              </>
                }
            </SelectContent>
          </Select>

          {/* NAME */}
          <div>
            <Label>Your Name *</Label>
            <Input {...register("name", { required: true })} />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* EMAIL */}
          <div>
            <Label>Email *</Label>
            <Input type="email" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

           <div>
            <Label>Phone *</Label>
            <Input type="number" {...register("phone", { required: true, pattern:{value: /^[0-9]{10}$/}, message: "Please a enter a valid 10 digit number" }, )} />
            {errors.phone && <p className="text-red-500 text-sm">phone is required</p>}
          </div>

          {/* MESSAGE */}
          <textarea
            {...register("message", { required: true })}
            className="w-full border rounded-md p-2 text-black"
            rows={3}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">Message is required</p>}

          <Button type="submit" className="w-full bg-[#d4af37] hover:bg-yellow-600">
            Submit Enquiry
          </Button>
        </form>
      
   
  );
}
