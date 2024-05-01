import {vollmedApi} from '@/services/vollmedApi'
import axios from "axios"
import Usuario from '@/app/model/Usuario'

export class UsuarioService {

    registrarUser(user: Usuario) {
        return vollmedApi.post('/usuarios', user)
    }

}