const { Router } = require('express')
const client = require('./client.js')
const customers = require('./customers/index.js')
const customerAddresses = require('./customers/addresses/index.js')
const customerCoupons = require('./customers/coupons/index.js')
const countries = require('./countries.js')
const currencies = require('./currencies.js')
const products = require('./products/index.js')
const coupons = require('./coupons.js')
const categories = require('./categories.js')
const brands = require('./brands.js')
const variations = require('./variations.js')
const store = require('./store.js')
const shippingAddress = require('./shipping/address/index.js')
const shippingZones = require('./shipping/zones/index.js')
const shippingMethods = require('./shipping/zones/methods/index.js')
const settings = require('./settings.js')
const productVariants = require('./products/variants/index.js')
const productVariantImages = require('./products/variants/images/index.js')
const productOptions = require('./products/options/index.js')
const productImages = require('./products/images/index.js')
const performance = require('./performance.js')
const orders = require('./orders/index.js')
const orderStatus = require('./orders/status/index.js')
const orderRefunds = require('./orders/refunds/index.js')

const router = Router()

router.use(
  client,
  customers,
  coupons,
  customerAddresses,
  customerCoupons,
  countries,
  currencies,
  products,
  categories,
  brands,
  variations,
  store,
  shippingAddress,
  shippingZones,
  shippingMethods,
  settings,
  productVariants,
  productVariantImages,
  productOptions,
  productImages,
  performance,
  orders,
  orderStatus,
  orderRefunds
)

module.exports = router
