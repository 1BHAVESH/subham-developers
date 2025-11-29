import { Calendar } from "lucide-react";

export default function LatestCard({ item }) {
  return (
    <div className="flex gap-3 items-start p-2">
      {/* LEFT IMAGE */}
      <img
        src={item.img}
        alt={item.title}
        className="w-[95px] h-[95px] rounded-md object-cover flex-shrink-0"
      />

      {/* RIGHT TEXT */}
      <div className="flex flex-col justify-between">
        <h4 className="text-[14px] font-semibold l">
          {item.title}
        </h4>
        <p className="text-[12px] font-normal line-clamp-2">
          {item.desc}
        </p>

        {/* DATE */}
        <div className="flex items-center text-gray-500 text-[12px] gap-1 mt-1">
          <Calendar className="w-3 h-3" />
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}
