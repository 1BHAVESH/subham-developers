import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import CommomImg from "@/components/CommonBackgroundImg"
import { useForm } from "react-hook-form";
import { toast } from "sonner"

export default function ContactForm() {
  const contactData = [
    { icon: <Phone size={28} />, text: "Call : +91 9024 195 195" },
    { icon: <Mail size={28} />, text: "info@subhamdevelopers.com" },
    { icon: <MapPin size={28} />, text: "Our Address" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

   const onSubmit = async (data) => {
    await toast.promise(
      fetch("http://localhost:3001/api/mail/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(res => res.json()),

      {
        loading: "Sending your message... ⏳",
        success: "Mail sent successfully! 📩",
        error: "Failed to send email ❌",
      }
    );

    reset(); 
  };

  return (
    <>
      <CommomImg page="Contact us" />

      {/* FORM SECTION */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <p className="text-center text-[#D2AB48] text-[24px] font-medium">Have Any Queries?</p>
        <h2 className="text-center text-[36px] font-semibold mt-2">Reach Out To Us Today!!</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-2">First Name</Label>
              <Input
                placeholder="Enter your first name"
                className="border-[#C29A2D] h-[49px]"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label className="mb-2">Last Name</Label>
              <Input
                placeholder="Enter your last name"
                className="border-[#C29A2D] h-[49px]"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label className="mb-2">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-[49px] border-[#C29A2D]"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <Label className="mb-2">Phone Number</Label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="h-[49px] border-[#C29A2D]"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit Indian phone number",
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Message */}
          <div>
            <Label className="mb-2">Message</Label>
            <Textarea
              rows={5}
              placeholder="Enter your message"
              className="border-[#C29A2D] h-[123px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-[#C29A2D] cursor-pointer hover:bg-[#B58920] text-black font-medium w-full rounded-xl py-6 text-[16px]"
          >
            Send Message
          </Button>
        </form>
      </section>

      {/* CONTACT CARDS SECTION */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactData.map((item, i) => (
            <Card
              key={i}
              className="bg-[#D2AB48] w-[317px] h-[242px] rounded-2xl text-center shadow-lg p-2"
            >
              <CardContent className="flex pt-15 flex-col items-center gap-4">
                <div className="bg-black p-3 rounded-xl text-white">{item.icon}</div>

                <a
                  href={
                    item.text === "Call : +91 9024 195 195"
                      ? "tel:+919024195195"
                      : item.text === "info@subhamdevelopers.com"
                      ? "mailto:info@subhamdevelopers.com"
                      : ""
                  }
                  className="flex items-center gap-1"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm mb-5">{item.text}</p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="max-w-8xl mx-auto pt-12">
        <h2 className="text-center text-[28px] md:text-[24px] font-medium text-[#D2AB48] mb-6">Our Location</h2>

        <div className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.1930421365405!2d73.01455147528317!3d26.921499960814955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941dd43b52b505d%3A0x58ce8000a2d0d896!2sSmart%20Homes%20by%20Subham%20Developers!5e0!3m2!1sen!2sin!4v1709521862635!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
