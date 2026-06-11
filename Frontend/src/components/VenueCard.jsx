import Button from "./ButtonNew";


export default function VenueCard({
  image,
  name,
  location,
  capacity,
  rating,
  price,
  verified,
}) {
  return (
    <div className="h-full flex flex-col max-w-sm border rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* VERIFIED BADGE */}
        {verified && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Verified
          </span>
        )}

      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 text-center">

        {/* NAME */}
        <h5 className="text-lg font-semibold mb-1">
          {name}
        </h5>

        {/* LOCATION */}
        <p className="text-sm text-gray-500 mb-2">
          📍 {location}
        </p>

        {/* DETAILS */}
        <div className="text-sm text-gray-700 space-y-1 mb-3">
          <p>👥 Capacity: {capacity}</p>
          <p>⭐ Rating: {rating}</p>
          <p>💰 Price: ₹{price}</p>
        </div>

        {/* ACTION BUTTON */}
        <div className="mt-auto">
          <Button buttonV="primary" onClick={() => console.log("View Details Clicked")} className="w-full">
            View Details
          </Button>
        </div>

      </div>
    </div>
  );
}