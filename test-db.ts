import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] })

async function main() {
  console.log("Connecting to DB...")
  const user = await prisma.user.findFirst()
  console.log("DB Connection Success! Found user:", user?.email || "none")
}

main()
  .catch(e => {
    console.error("DB Connection FAILED:", e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
