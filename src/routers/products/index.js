const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {
  createProduct,
  getProducts,
  getProduct,
  getProductCount,
  updateProduct,
  deleteProduct
} = require('../../controller/products')

// Create product
router.post('/:storeHash/products', auth, (req, res) => createProduct(req, res))
// Get products
router.get('/:storeHash/products', auth, (req, res) => getProducts(req, res))
// Get product count
router.get('/:storeHash/products/count', auth, (req, res) => getProductCount(req, res))
// Get product
router.get('/:storeHash/products/:productId', auth, (req, res) => getProduct(req, res))
// Update product
router.put('/:storeHash/products/:productId', auth, (req, res) => updateProduct(req, res))
// Delete product
router.delete('/:storeHash/products/:productId', auth, (req, res) => deleteProduct(req, res))

module.exports = router
