import { useState } from "react";
import Button from "../components/ButtonNew";

export default function Booking() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [eventType, setEventType] = useState("");
    const [requests, setRequests] = useState("");

    const handleBooking = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !date || !guests || !eventType) {
            alert("Please fill all fields");
            return;
        }

        alert("Booking submitted!");
    };

    const availableDates = [
        "2026-06-20",
        "2026-06-21",
        "2026-06-24",
        "2026-06-28",
    ];

    return (
        <div className="max-w-xl mx-auto mt-10 p-6">

            <h1 className="text-3xl font-bold mb-6">
                Book Venue
            </h1>

            <form
                onSubmit={handleBooking}
                className="flex flex-col gap-4"
            >

                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-3 rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 rounded"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border p-3 rounded"
                />

                <div>
                    <p className="font-semibold mb-2">
                        Available Dates
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        {availableDates.map((item, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setDate(item)}
                                className="border rounded px-3 py-2 hover:bg-gray-100"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <input
                    type="date"
                    required
                    min="2026-06-20"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border p-3 rounded"
                />

                <input
                    type="number"
                    placeholder="Number of Guests"
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="border p-3 rounded"
                />

                <select
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="border p-3 rounded"
                >
                    <option value="">
                        Select Event Type
                    </option>

                    <option value="Wedding">
                        Wedding
                    </option>

                    <option value="Birthday">
                        Birthday
                    </option>

                    <option value="Corporate">
                        Corporate
                    </option>

                    <option value="Other">
                        Other
                    </option>
                </select>

                <textarea
                    placeholder="Special Requests"
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    className="border p-3 rounded h-32"
                />

                <Button buttonV="primary"
                    type="submit">
                    Confirm Booking
                </Button>

            </form>

        </div>
    );
}