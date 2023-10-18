import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
)

const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema)

export default Item