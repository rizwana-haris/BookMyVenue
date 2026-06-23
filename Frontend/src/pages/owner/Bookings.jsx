export default function Bookings() {

const bookings = [

{
id:1,
venue:"Football Turf",
user:"Rahul",
date:"25 June 2026",
status:"Pending"
},

{
id:2,
venue:"Indoor Court",
user:"Amina",
date:"27 June 2026",
status:"Approved"
}

];

return (

<div className="max-w-6xl mx-auto p-4 space-y-6">

<h1 className="text-3xl font-bold mb-6 text-gray-900">

Bookings

</h1>

<div className="space-y-5">

{bookings.map((booking)=>(

<div
key={booking.id}
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

<div className="flex justify-between">

<div>

<h2 className="text-xl font-bold">

{booking.venue}

</h2>

<p>

Customer:
{booking.user}

</p>

<p>

Date:
{booking.date}

</p>

</div>

<span
className={`
px-3
py-2
rounded-full
${
booking.status==="Approved"
?
"bg-green-100 text-green-700"
:
"bg-yellow-100 text-yellow-700"
}
`}
>

{booking.status}

</span>

</div>

{booking.status==="Pending"&&(

<div className="mt-4 flex gap-3">

<button
className="
bg-green-700
text-white
px-4
py-2
rounded
"
>

Approve

</button>

<button
className="
bg-red-700
text-white
px-4
py-2
rounded
"
>

Reject

</button>

</div>

)}

</div>

))}

</div>

</div>

);

}