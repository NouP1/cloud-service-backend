import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('users')
 @ApiTags('users')
 @ApiBearerAuth()
export class UsersController {
  constructor(
    private readonly usersService: UsersService) {}


    @Get('/me')
    @UseGuards(JwtAuthGuard)
    getMe(@UserId() id: number) {
      console.log('User ID:', id);
      return this.usersService.findById(id)
    }
  }

