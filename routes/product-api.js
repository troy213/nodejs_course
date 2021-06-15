const express = require('express')
const router = express.Router()

const {
  getProduct,
  getProductByID,
  postProduct,
  putProduct,
  deleteProduct,
} = require('../controllers/product')

//set up api request and send back json data
router.get('/', getProduct)

router.get('/:id', getProductByID)

//post request
router.post('/', postProduct)

//put request
router.put('/:id', putProduct)

//delete request
router.delete('/:id', deleteProduct)

//alternate way to set up router in oneline
//router.route('/').get(getProduct).post(postProduct);
//router.route('/:id').get(getProductByID).put(putProduct).delete(deleteProduct);

module.exports = router
