const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
    status: {
      type: String,
      emum: ["pending", "paid"],
      required: true,
      default: "pending",
    },
    total: { type: Number, default: 0, required: true },
    isDeleted: { type: Boolean, default: false, required: true },
  },
  { timestamp: true }
);

orderSchema.plugin(require("./plugins/isDeletedFalse"));

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
