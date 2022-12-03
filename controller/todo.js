const Todo = require( "../model/todo.js")

 const createTodo = async(req, res) => {

  const {name, desc} = req.body
  try{
    const todo = new Todo({
      name,
      desc
    }) 
    if (todo) {
      await todo.save()
      res.status(201).json({
          _id: todo._id,
          name: todo.name,
          desc: todo.desc
      }).send('created successfully')
  }
} catch(err){
  console.log(err)
    res.status(400)
}
}

 const updateTodo = async (req, res) => {

    const todo = await Todo.findById(req.params.id)
    console.log(req.params.id)
    if(todo){
      todo.name = req.body.name || todo.name
      todo.desc = req.body.desc || todo.desc
      const updatedTodo = await Todo.save()
      res.json({
        _id: updatedTodo._id,
        name: updatedTodo.name,
        desc: updatedTodo.desc
      })
    } else {
      res.status(404).send('Not Found')}
}

const deleteTodo = async (req, res) => {

  const todo = await Todo.findById(req.params.id)
 
  if(todo){
    await Todo.remove()
    res.status(200).send('Deleted Successfully')
  } else {
    res.status(404).send('Not Found')}
}

 const getTodo = async (req, res) => {

  const todo = await Todo.findById(req.params.id)
  if(todo){
    res.send(todo).status(200)
  } else {
    res.status(404).send('Not Found')}
}

// const getAllTodo =  async (req, res) => {

//   const todo = await Todo.find({})
//   if(todo){
//     res.send(todo).status(200)
//   } else {
//     res.status(404).send('Not Found')}
// }

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  // getAllTodo
}

