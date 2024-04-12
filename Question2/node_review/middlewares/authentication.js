import jwt from "jsonwebtoken";


export const authentication = async (req, res, next) => {
    try {
      const bearerToken = req.headers.authorization;
  
      if(!bearerToken){
          return res.status(401).json({
              message: "bạn chưa đăng nhập",
            });
      }
  
      const token = bearerToken.split(" ")[1];
  
      const verify = jwt.verify(token , process.env.SCRET_KEY);
      if(!verify){
        return res.status(401).json({
          message : "token không tồn tại"
        })
      }
  
      next();
    } catch (error) {
      return res.status(401).json({
        message: "lỗi sever",
      });
    }
  };