import mongoose from "mongoose";

const Tag = mongoose.Schema({
    id_user:{
        type: Number,
        require: true
    },
    id_todo: {
        type: Number,
        require: true
    },
    tag: {
        type: String,
        require: true
    }    
},{
    timestaps: true,
});

export default mongoose.model("Tag", Tag);