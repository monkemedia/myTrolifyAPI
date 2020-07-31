const OrderRefund = require('../../../models/order/refund/index.js')

const createOrderRefund = async (req, res) => {
  const data = req.body
  const orderId = req.params.orderId

  const { type, items, payment } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  if (type && type !== 'order-refund') {
    return res.status(401).send({
      message: 'Correct type is required'
    })
  }

  if (!items) {
    return res.status(401).send({
      message: 'Items is required'
    })
  }

  if (items.length < 1) {
    return res.status(401).send({
      message: 'Items must be populated'
    })
  }

  if (!payment.provider) {
    return res.status(401).send({
      message: 'Payment provider is required'
    })
  }

  try {
    const orderRefund = new OrderRefund({
      order_id: orderId,
      ...data
    })

    await orderRefund.save()

    res.status(201).send(orderRefund)
  } catch (err) {
    let error = {}
    err.message ? error.message = err.message : error = err
    res.status(400).send(error)
  }
}

const getOrderRefunds = async (req, res) => {
  const orderId = req.params.orderId

  try {
    const orderRefunds = await OrderRefund.findOrderRefunds(orderId)

    res.status(200).send(orderRefunds)
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  createOrderRefund,
  getOrderRefunds
}
