import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateDto} from './dto/create.dto';
import {UpdateDto} from './dto/update.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    /**
     * Get users
     */
    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    /**
     * Get the user by id
     *
     * @param id
     */
    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    /**
     * Create a user
     *
     * @param dto
     */
    @Post()
    async create(@Body() dto: CreateDto) {
        return this.userService.create(dto);
    }

    /**
     * Update the user
     *
     * @param id
     * @param dto
     */
    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateDto) {
        return this.userService.update(id, dto);
    }

    /**
     * Delete the user
     *
     * @param id
     */
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
