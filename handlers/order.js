const Order = require("../database/order")

const addOrder =  async (req, res) => {
    try {
      const { userId, subTotal, phoneNumber } = req.body;

      const newOrder = new Order({
        userId,
        subTotal,
        phoneNumber,
      });
      await Order.create(newOrder);
      res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
      console.error('Add order error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
const getOrders =  async (req, res) => {
    try {
      const { userId } = req.query;
      // Find orders by user ID
      const orders = await Order.find({ userId });
      res.status(200).json({ orders });
    } catch (error) {
      console.error('Get order error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
    
module.exports={addOrder,getOrders}