
const loginRepository = {}

loginRepository.getAll = () => {
  const context =  pool()
  return context.query('select * from tb_user')
}

loginRepository.getById = (username) => {
  const context =  pool()
  return context.query('select * from tb_user where username=$1',[username])
}

loginRepository.create = (user) => {
  const context =  pool()
  return context.query('insert into tb_user (username,password) values ($1,$2) RETURNING username',[user.username,user.password])
}

loginRepository.update = (user) => {
  const context =  pool()
  return context.query('update tb_user SET password = $2 where username=$1',[user.username,user.password])
}

loginRepository.delete = (username) => {
  const context =  pool()
  return context.query('delete from tb_user where username=$1',[username])
}
module.exports = loginRepository; 