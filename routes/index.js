import express from "express"
import { getTag, createTag, getTagId, updateTodo, deleteTodo } from "../controller/tagController.js"

const router = express.Router()

//get all
router.get('/', getTag)

//create data
router.post('/', createTag)

//get by id
router.get('/:id', getTagId)

//update id
router.patch('/:id', updateTodo)

//delete id
router.delete('/:id', deleteTodo)

export default router