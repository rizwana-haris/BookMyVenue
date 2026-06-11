import Button from "../components/ButtonNew";

export default function VenueDetails() {
    const venue = {
        name: "Grand Convention Hall",
        location: "Trivandrum",
        price: "₹5000/day",
        capacity: "200 People",
        images: [
            "/images/hall0.jpg",
            "/images/hall1.jpg",
            "/images/hall2.jpg",
        ],
        facilities: ["Parking", "AC Hall", "WiFi", "Stage", "Catering Support"],
        description:
            "A premium venue suitable for weddings, corporate events, and parties.",
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {venue.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Venue ${index + 1}`}
                        className="w-full h-56 object-cover rounded-lg"
                    />
                ))}
            </div>

            <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>

            <div className="mb-6 space-y-2">
                <p className="text-gray-600">
                    📍 {venue.location}
                </p>

                <p>
                    💰 <span className="font-semibold">{venue.price}</span>
                </p>

                <p>
                    👥 {venue.capacity}
                </p>
            </div>

            <h2 className="text-xl font-semibold mb-2">
                About Venue
            </h2>

            <p className="mb-6 text-gray-700">
                {venue.description}
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Facilities
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
                {venue.facilities.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg px-4 py-2"
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <Button buttonV="primary">
                    Book Now
                </Button>
            </div>
        </div>
    );
}