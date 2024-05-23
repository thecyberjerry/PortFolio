import mongoose from "mongoose";

const Contact = new mongoose.Schema(
    {
        name: String,
        phone: Number,
        email: String,
        msg: String,
        subject: { type: String, default: null }
    },
    {
        timestamps: true,
    }
);
mongoose.pluralize(null);
export default mongoose.models.Contact || mongoose.model("Contact", Contact);