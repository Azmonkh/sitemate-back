import { ApiProperty } from '@nestjs/swagger'
import { Any } from 'typeorm'

export class ResponseStruct {

    @ApiProperty({ type: Number })
    readonly statusCode: Number

    @ApiProperty({ type: Any })
    readonly data: any
}