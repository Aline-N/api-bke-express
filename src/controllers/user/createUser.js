import { create, validateUser } from "../../models/userModel.js"

const createUser = async (req, res) => {
    const user = req.body
    
    const userValidated = validateUser(user)
    console.log(userValidated)

    if(userValidated?.error){
        return res.status(400).json({
            error: "Erro ao criar usuário, verifique os dados!",
            fieldErrors: userValidated.error.flatten().fieldErrors
        })
    }

    const result = await create(userValidated.data) 

    if(!result)
        return res.status(500).json({
            error: "Erro ao criar usuário"
        })

    return res.json({
        success: "Usuário criado com sucesso!",
        user: result
    })
}

export default createUser