import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function MyVenues() {

    const navigate = useNavigate();
    const handleDelete = (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure?"
            );

        if (confirmDelete) {

            setVenues(
                venues.filter(
                    venue => venue.id !== id
                )
            );

        }

    };
    const [venues, setVenues] = useState([
        {
            id: 1,
            name: "Football Turf",
            district: "Calicut"
        },

        {
            id: 2,
            name: "Indoor Court",
            district: "Kochi"
        }
    ]);

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-6">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold mb-6 text-gray">
                    My Venues
                </h1>

                <button
                    onClick={() => navigate("/owner/add-venue")}

                    className="
                bg-blue-950
                text-white
                px-4
                py-2
                rounded-lg
                "
                >

                    + Add Venue
                </button>

            </div>

            {venues.length === 0 ? (
                <div className="text-center py-10">
                <p className="text-gray-500 text-lg">

                    No venues added yet

                </p>
            </div>
            ) : (

                <div className="grid grid-cols-2 gap-5">

                    {venues.map((venue) => (

                        <div
                            key={venue.id}
                            className="
            border
            rounded-xl
            p-5
            shadow
            transition
            hover:shadow-lg
            hover:scale-[1.02]
            duration-200
            bg-white
            "
                        >

                            <div
                                className="
                            h-40
                            rounded
                            mb-4
                            bg-gradient-to-r
                            from-blue-900
                            to-blue-700
                            flex
                            items-center
                            justify-center
                            text-white
                            text-xl
                            "
                            >

                                Venue Image

                            </div>


                            <h2 className="text-xl font-bold">
                                {venue.name}
                            </h2>


                            <p className="text-gray-500">
                                {venue.district}
                            </p>


                            <div className="mt-4 flex gap-3">

                                <button
                                    onClick={() =>
                                        navigate("/owner/add-venue")
                                    }
                                    className="
                bg-yellow-500
                px-4
                py-2
                rounded
                "
                                >
                                    Edit
                                </button>


                                <button

                                    onClick={() =>
                                        handleDelete(venue.id)
                                    }

                                    className="
                                bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded
                                "

                                >

                                    Delete

                                </button>

                            </div>

                        </div>

                    ))}

                </div>
            )}
        </div>
    );
}