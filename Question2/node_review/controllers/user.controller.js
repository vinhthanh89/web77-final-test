import jwt from "jsonwebtoken";
import Users from "../models/user.model.js"

export const login = async (req , res) => {
    try {
        const { username, password } = req.body;

        const findUser = await Users.findOne({ username })
        if (!findUser) {
            return res.status(404).json({
              message: "username người dùng không tồn tại",
            });
          }

        if(password !== findUser.password){
            return res.status(401).json({
                message : "mật khẩu không chính xác"
            })
        }

        const accessToken = jwt.sign({
            username: findUser.username,
          } , process.env.SCRET_KEY , {
            expiresIn : "1d"
          })

          return res.status(200).json({
            message: "Đăng nhập thành công",
            username : findUser.username,
            accessToken
          });
    } catch (error) {
        return res.status(400).json({
            message: "lỗi sever",
          });
    }
}

