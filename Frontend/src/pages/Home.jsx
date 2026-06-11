import Carousel from "react-bootstrap/Carousel";
import Button from "../components/ButtonNew";
import VenueCard from "../components/VenueCard"
import hall1 from "../assets/images/hall1.jpg";
import hall2 from "../assets/images/hall2.jpg";
import hall3 from "../assets/images/hall3.jpg";
import hall4 from "../assets/images/hall4.jpg";



function Home() {

  const carouselImages = [
    hall1,
    hall2,
    hall3,
    hall4,
  ];

  const featuredVenues = [
    "Birthday Hall",
    "Cafes",
    "Hotels",
    "Resorts",
    "Malls",
    "Auditoriums",
  ];

  return (
    <div>

      {/* Hero Carousel */}
      <section className="container my-4">

        <Carousel>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Hall ${index + 1}`}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              
           
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Featured Venues */}
      <section className="container my-8 py-5">
        <h2 className="text-center !mb-8">
          Featured Venues
        </h2>
        <div className="row justify-content-center g-4">
          {featuredVenues.map((venue) => (
            <div key={venue} className="col-md-4 d-flex justify-content-center">
              <Button
                key={venue}
                buttonV="outline"
                style={{
                  width: "500px",
                  height: "100px",
                }}
              >
                {venue}
              </Button>
            </div>
          ))}
        </div>

        
      </section>

      {/* Popular Venues */}
      <section className="container my-12 py-5">
        <h2 className="text-center !mb-8">Popular Venues</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            {
              name: "Grand Palace Hall",
              location: "Kochi",
              capacity: 500,
              rating: 4.8,
              price: 15000,
              verified: true,
              image: hall1,
            },
            {
              name: "Sea View Resort",
              location: "Alleppey",
              capacity: 300,
              rating: 4.6,
              price: 12000,
              verified: true,
              image: hall2,
            },
            {
              name: "Royal Convention Center",
              location: "Kochi",
              capacity: 800,
              rating: 4.9,
              price: 25000,
              verified: true,
              image: hall3,
            },
          ].map((venue, index) => (
            <div key={index} className="col-md-4 mb-4">
              <VenueCard {...venue} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container my-12 py-5">
        <h2 className="text-center !mb-8">What Our Users Say</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <p>
                "Amazing booking experience. Found my wedding venue easily."
              </p>
              <h6>★★★★★</h6>
              <small>Anjali, Kochi</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <p>
                "Very easy to compare venues and prices."
              </p>
              <h6>★★★★★</h6>
              <small>Rahul, Thrissur</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <p>
                "The verified badge helped me choose confidently."
              </p>
              <h6>★★★★★</h6>
              <small>Meera, Ernakulam</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center my-5">
        <h2>Ready to Find Your Perfect Venue?</h2>
        <Button variant="primary" className="mt-3">
          Browse Venues
        </Button>
      </section>

      {/* About */}
      <section className="container my-12 py-5 text-center">
        <h2>Kerala-First Venue Platform</h2>

        <h4 className="!mt-12">
          Connecting Kerala's Finest Venues
        </h4>

        
      </section>

    </div>
  );
}

export default Home;