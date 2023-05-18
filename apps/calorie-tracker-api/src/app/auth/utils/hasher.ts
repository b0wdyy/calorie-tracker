import * as bcrypt from 'bcrypt';

export class HasherUtil {
  private static readonly HASH = bcrypt.genSaltSync()

  static hashPassword(password: string) {
    return bcrypt.hashSync(password, this.HASH)
  }

  static comparePassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
  }
}
