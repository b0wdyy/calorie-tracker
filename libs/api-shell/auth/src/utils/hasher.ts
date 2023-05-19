import * as bcrypt from 'bcrypt'

export function hashPassword(password: string) {
  const hash = bcrypt.genSaltSync()

  return bcrypt.hashSync(password, hash)
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash)
}
