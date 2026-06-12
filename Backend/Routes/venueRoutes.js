const express = require('express')
const { addVenue, listVenues, venueDetail } = require('../Controllers/venueController')
const { imageUpload } = require('../config/cloudConfig')
const router = express.Router()

router.route('/add').post(imageUpload.array("image"), addVenue)
router.route('/venues').get(listVenues)
router.route('/venue-details/:id').get(venueDetail)

module.exports = router