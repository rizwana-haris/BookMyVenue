import { useParams } from "react-router-dom";
import Button from "../../components/ButtonNew";
import { useVenueDetailQuery } from "../../redux/api/venueApiSlice";

export default function VenueDetails() {
    const { id } = useParams()
    console.log(id)
    const { data } = useVenueDetailQuery(id)
    console.log(data)
    const venue = data?.venue


    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {venue?.image?.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Venue ${index + 1}`}
                        className="w-full h-56 object-cover rounded-lg"
                    />
                ))}
            </div>

            <h1 className="text-3xl font-bold mb-2">{venue?.name}</h1>

            <div className="mb-6 space-y-2">
                <p className="text-gray-600">
                    📍 {venue?.city},{venue?.district}
                </p>

                <p>
                    💰 <span className="font-semibold">{venue?.price}</span>
                </p>

                <p>
                    👥 {venue?.capacity}
                </p>
            </div>

            <h2 className="text-xl font-semibold mb-2">
                About Venue
            </h2>

            <p className="mb-6 text-gray-700">
                {venue?.description}
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Facilities
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
                {venue?.amenities?.map((item, index) => (
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