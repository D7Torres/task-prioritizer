import { Injectable } from '@nestjs/common'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  create(createListDto: CreateListDto) {
    return this.prisma.list.create({ data: createListDto })
  }

  // Hardcoded userId, eventually it will obtain the userId from the authentication
  findAll() {
    return this.prisma.list.findMany({ where: { userId: 1 } })
  }

  findOne(id: number) {
    return this.prisma.list.findUnique({ where: { id } })
  }

  update(id: number, updateListDto: UpdateListDto) {
    return this.prisma.list.update({
      where: { id },
      data: updateListDto,
    })
  }

  remove(id: number) {
    return this.prisma.list.delete({ where: { id } })
  }
}
