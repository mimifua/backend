import { Router } from 'express'
import { changePassword, deleteUser, forgotPassword, loginUser, registerUser } from '../controllers/auth.controllers'

const authRouter:Router = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/forgot-password',forgotPassword)
authRouter.patch('/change-password/:id',changePassword)
authRouter.delete('/delete/:id',deleteUser)

export default authRouter
