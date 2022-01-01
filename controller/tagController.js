import Tag from "../models/Tag.js";

export const getTag = async(req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createTag = async(req, res) => {

    const tag = new Tag(req.body)
 
    try {
        const tagSave = await tag.save();
        res.status(200).json(tagSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
 
export const getTagId = async(req, res) => {
    try {
        const tag = await Tag.find({id_user: req.params.id});
        res.status(200).json(tag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTodo = async(req, res) => {

    var tag = await Tag.findOne({id_todo: req.params.id});

    if(!tag) return res.status(404).json({status: false, message: "tag not found"})    

    try {
        const resSave =  await Tag.updateOne({_id:tag._id}, {$set:req.body}) 
        res.status(200).json(resSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTodo = async(req, res) => {

    var tag = await Tag.findOne({id_todo: req.params.id});

    if(!tag) return res.status(404).json({status: false, message: "Id not found"})    

    try {
        const resSave =  await Tag.deleteOne({_id:tag._id})
        res.status(200).json(resSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
