import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
      userId: { type: String, required: true },
      items: [
            {
                  _id: { type: String, required: true },
                  name: { type: String, required: true },
                  description: { type: String },
                  price: { type: Number, required: true },
                  image: { type: String },
                  category: { type: String },
                  quantity: { type: Number, required: true },
            },
      ],
      amount: { type: Number, required: true },
      address: { type: Object, required: true },
      status: { type: String, default: "Food Processing" },
      date: { type: Date, default: Date.now() },
      payment: { type: Boolean, default: false }
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel; 