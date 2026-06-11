const express=require('express')
const {addVenue, listVenues} = require('../Controllers/venueController')
const { imageUpload } = require('../config/cloudConfig')
const router = express.Router()

router.route('/add').post(imageUpload.array("image"),addVenue)
router.route('/venues').get(listVenues)

module.exports=router