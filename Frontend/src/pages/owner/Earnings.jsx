export default function Earnings() {

const earnings = [
{
id: 1,
month: "June",
amount: 12000
},
{
id: 2,
month: "May",
amount: 9000
}
];

const total = earnings.reduce((sum, e) => sum + e.amount, 0);

return (

<div className="max-w-6xl mx-auto p-4 space-y-6">

<h1 className="text-3xl font-bold text-gray-900">

Earnings

</h1>

{/* TOTAL CARD */}
<div className="bg-white border rounded-xl p-6 shadow">

<p className="text-gray-500">

Total Earnings

</p>

<h2 className="text-3xl font-bold text-green-600">

₹ {total}

</h2>

</div>

{/* MONTHLY LIST */}
<div className="grid grid-cols-2 gap-6">

{earnings.map((item)=>(

<div
key={item.id}
className="
border
rounded-xl
p-5
shadow
bg-white
hover:shadow-lg
transition
"
>

<h3 className="text-xl font-bold">

{item.month}

</h3>

<p className="text-green-600 font-semibold">

₹ {item.amount}

</p>

</div>

))}

</div>

</div>

);

}