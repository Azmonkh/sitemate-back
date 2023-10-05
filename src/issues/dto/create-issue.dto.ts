import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateIssueDto {

    @ApiProperty({ type: String })
    @IsNotEmpty({ message: 'Insert name of the issue' })
    readonly name: string

    @ApiProperty({ type: String })
    @IsNotEmpty({ message: 'Insert description of the issue' })
    readonly description: string
}
