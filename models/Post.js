const mongoose = require("mongoose");
//mongoDBはフレキシブルにスキーマ作成
const PostSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 200,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);