import * as enums from '../utils/enums/Contact'

class Tarefa {
  id: number
  name: string
  title: string
  email: string
  phone: number
  group: enums.Group

  constructor(
    id: number,
    name: string,
    title: string,
    email: string,
    phone: number,
    group: enums.Group
  ) {
    this.id = id
    this.name = name
    this.title = title
    this.email = email
    this.phone = phone
    this.group = group
  }
}

export default Tarefa
