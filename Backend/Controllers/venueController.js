const asyncHandler = require('express-async-handler');
const StatusCode = require('../statusCode');
const Venue = require('../Models/venueModel');

const addVenue = asyncHandler(async (req, res) => {
    const { name, description, category, price, capacity, phone, amenities, city, district, state, zipcode, longitude, latitude } = req.body
    console.log(req.body.amenities)
    console.log("am", amenities)
    const files = req.files;
    if (!name) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Name is required");
    }
    if (!description) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Description is required");
    }
    if (!category) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Category is required");
    }
    if (!price) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Price is required");
    }
    if (!amenities) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Amenities required");
    }
    if (!capacity) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Capacity is required");
    }
    if (!phone) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("Phone is required");
    }
    if (!city) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("city is required");
    }
    if (!state) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("state is required");
    }
    if (!district) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("district is required");
    }
    if (!zipcode) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("zipcode is required");
    }
    if (!longitude) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("longitude is required");
    }
    if (!latitude) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("latitude is required");
    }
    if (!files || files.length === 0) {
        res.status(StatusCode.BAD_REQUEST)
        throw new Error("At least three images are required");
    }
    const imageUrls = files.map((file) => file.path);

    const venue = await Venue.create({
        name, description, category, price, capacity, phone, amenities, city, district, state, zipcode,
        location: {
            type: 'Point',
            coordinates: [longitude, latitude]
        },
        image: imageUrls
    })
    await venue.save()
    console.log(venue)
    return res.status(StatusCode.OK).json({
        status: "success",
        message: "Venue added successfully",

    })
})

const listVenues = asyncHandler(async (req, res) => {
    const venues = await Venue.find({})
    return res.status(StatusCode.OK).json({
        status: "success",
        venues
    })
})

const venueDetail = asyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log("iddddd", id)
    const venue = await Venue.findById({ _id: id })
        .select("name description category price city district capacity amenities state zipcode image")
        .populate("category")
    console.log(venue)
    return res.status(StatusCode.OK).json({
        status: "success",
        venue
    });
});
module.exports = { addVenue, listVenues, venueDetail }