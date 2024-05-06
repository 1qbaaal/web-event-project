import { prisma } from '../../connection'
import {IFindRoleByEmailParams} from'./types'


export const findRolebyEmail = async({email}: IFindRoleByEmailParams) => {
    const findUser:any = await prisma.user.findFirst({
        where: {
            email
        },
        include:{
            role:  true     
            
        }
    })

    if(!findUser) throw new Error('User Not Found!')

    return findUser
}

export const findUserByUid = async({uid}: {uid: string}) => {
    return await prisma.user.findUnique({
        where: {
            uid
        },
        include: {
            role: true
        }
    })
}