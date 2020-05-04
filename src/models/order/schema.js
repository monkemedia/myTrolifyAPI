const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  customer_id: {
    type: Schema.Types.Mixed,
    default: 0
  },
  status_id: {
    type: Number,
    default: 1
  },
  discount_amount: {
    type: Number,
    default: 0
  },
  subtotal_exc_tax: {
    type: Number,
    default: 0
  },
  subtotal_inc_tax: {
    type: Number,
    default: 0
  },
  total_exc_tax: {
    type: Number,
    default: 0
  },
  total_inc_tax: {
    type: Number,
    default: 0
  },
  shipping_cost_exc_tax: {
    type: Number,
    default: 0
  },
  shipping_cost_inc_tax: {
    type: Number,
    default: 0
  },
  currency_code: {
    type: String,
    default: 'GBP'
  },
  payment_method: {
    type: String,
    default: ''
  },
  payment_provider_id: {
    type: String,
    default: ''
  },
  payment_status: {
    type: String,
    default: ''
  },
  refunded_amount: {
    type: Number,
    default: 0
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  order_is_digital: {
    type: Boolean,
    default: false
  },
  is_email_opt_in: {
    type: Boolean,
    default: false
  },
  comments: {
    type: String,
    default: ''
  },
  staff_notes: {
    type: String,
    default: ''
  },
  billing_address: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    company_name: {
      type: String,
      default: ''
    },
    line_1: {
      type: String,
      required: true
    },
    line_2: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    country_code: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: ''
    },
    phone_number: {
      type: String,
      default: ''
    }
  },
  shipping_address: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    company_name: {
      type: String,
      default: ''
    },
    line_1: {
      type: String,
      required: true
    },
    line_2: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    country_code: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: ''
    },
    phone_number: {
      type: String,
      default: ''
    }
  },
  products: [{
    product_id: {
      type: String,
      required: true
    },
    variant_id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    sale_price: {
      type: Number,
      default: 0
    },
    on_sale: {
      type: Boolean,
      default: false
    },
    is_refunded: {
      type: Boolean,
      default: false
    },
    refund_amount: {
      type: Number,
      default: 0
    },
    product_options: [
      {
        _id: false,
        display_name: {
          type: String,
          required: true
        },
        display_value: {
          type: String,
          required: true
        }
      }
    ]
  }]
}, { versionKey: false })

module.exports = orderSchema
