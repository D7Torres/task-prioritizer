import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  listId: number
}
