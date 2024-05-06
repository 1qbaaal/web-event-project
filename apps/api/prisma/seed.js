const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const dataUser = [
  {
    email: 'iqbal@loket.com',
    password: '123456',
    roleId: 1
  },
  {
    email: 'barent@loket.com',
    password: '123456',
    roleId: 2
  },
  {
    email: 'dio@loket.com',
    password: '123456',
    roleId: 2
  },
  {
    email: 'monjus@loket.com',
    password: '123456',
    roleId: 2
  },
  {
    email: 'rika@loket.com',
    password: '123456',
    roleId: 1
  }
]

const dataRole = [
  {
    name: 'Event Organizer'
  },
  
  {
    name: 'Customer'
  }
]

const dataEventCategory = [
  {
    category: "Music"
  },
  {
    category: "Seminar"
  },
  {
    category: "Festival"
  },
  {
    category: "Theater"
  },
  
]

async function main(){
  for(let item of dataRole){
    await prisma.role.create({
      data: item
    })
  }
  for(let item of dataUser){
    await prisma.user.create({
      data: item
    })
  }
  for(let item of dataEventCategory){
    await prisma.eventCategory.create({
      data: item
    })
  }
}

main().catch(error => {
  console.log(error);
  process.exit(1)
}).finally(async() => {
  await prisma.$disconnect()
})