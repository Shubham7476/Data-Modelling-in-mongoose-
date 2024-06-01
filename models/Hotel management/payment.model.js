import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      enum: ['Credit Card', 'UPI', 'Debit Card'],
      default: 'UPI',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'Failed'],
      default: 'pending',
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model('Payment', userSchema);
