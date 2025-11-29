import LatestCard from "@/components/LatestCard";
import MediaCard from "@/components/MediaCard";
import carimg from "../assets/Screenshot_3.png";
import CommomImg from "@/components/CommonBackgroundImg";
import subhamDeveloper from "../assets/image 28.png";

const Media = () => {
  const mediaData = [
    {
      id: 1,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome to the contemporary spaces to dwell in the modern luxuries of a premium 3 BHK duplex.",
      date: "Dec 17, 2025",
    },
    {
      id: 2,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome...",
      date: "Dec 17, 2025",
    },
    {
      id: 3,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome...",
      date: "Dec 17, 2025",
    },
    {
      id: 4,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome to the contemporary spaces to dwell in the modern luxuries of a premium 3 BHK duplex.",
      date: "Dec 17, 2025",
    },
    {
      id: 5,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome...",
      date: "Dec 17, 2025",
    },
    {
      id: 6,
      img: carimg,
      title: "The beauty lies in little details",
      desc: "Welcome...",
      date: "Dec 17, 2025",
    },
  ];

  // ARTICLE DATA (h2 + paragraph)
  const articleData = [
    {
      id: 1,
      title: "Build Your Future With Us: Why a Career in Real Estate is the Right Choice",
      content: `The real estate industry is one of the fastest-growing sectors in India,
      offering countless opportunities for individuals who want a rewarding and dynamic career.
      At [Your Company Name], we believe that our people are the foundation of our success.
      As we build homes, communities, and investment opportunities, we are equally
      committed to building strong careers for talented professionals. Whether you're
      passionate about sales, marketing, engineering, customer service, or project
      management — the real estate industry has a place for you.`
    }
  ];

  return (
    <>
      <CommomImg page="Media" />

      {/* IMAGE SECTION */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <img src={subhamDeveloper} alt="Company" className="rounded-xl shadow-lg w-full" />
      </section>

      {/* ARTICLE + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 mb-5">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* LEFT ARTICLE USING MAP */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
              <p>📅 Dec 17, 2025</p>
              <p>✍️ Writer Name</p>
            </div>

            {/* Article Mapping */}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
            {articleData.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR - LATEST POSTS */}
          <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
            <h3 className="text-[16px] font-medium mb-4">Latest Posts</h3>
            <div className="flex flex-col gap-4">
              {mediaData.map((item) => (
                <LatestCard key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Media;
