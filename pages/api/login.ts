// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken'

const KEY='123456YH'
export default (req, res) => {

  if(!req.body){
    res.status=404
    res.end('error')
    return
  }
  const {username,password} = req.body
  res.json({ token: 
  jwt.sign ({
    username,
    admin: username ==='admin'&& 'password' === 'admin'
  }, KEY)
  })
}
