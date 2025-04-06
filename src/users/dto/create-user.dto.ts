import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'test@gmail.com'
    })
    email: string;

    @ApiProperty({
        default: '12345678'
    })
    password: string; 
    
    @ApiProperty({
        default: 'Ivan'
    })
    fullName: string;
}
