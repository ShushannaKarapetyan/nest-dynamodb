import {BadRequestException, Injectable} from '@nestjs/common';
import {CreateDto} from "./dto/create.dto";
import {putUser} from "../db/commands/putUser";
import {v4 as uuidv4} from 'uuid';
import {User} from "./users.model";
import {getUsers} from "../db/commands/getUsers";
import {UpdateDto} from "./dto/update.dto";
import {ScanCommandOutput} from "@aws-sdk/lib-dynamodb";
import {getUser} from "../db/commands/getUser";
import {deleteUser} from "../db/commands/deleteUser";

@Injectable()
export class UserService {
    /**
     * Get users
     */
    async getUsers(): Promise<ScanCommandOutput> {
        return getUsers();
    }

    /**
     * Get the user by id
     *
     * @param id
     */
    async getUserById(id: string) {
        const user = await getUser(id);

        if (!user.Item) {
            throw new BadRequestException('User not found.')
        }

        return user;
    }

    /**
     * Create a user
     *
     * @param dto
     */
    async create(dto: CreateDto) {
        const id: string = uuidv4();
        const newUser: User = new User(id, dto.name, dto.surname, dto.email, dto.age);
        await putUser(newUser);

        return newUser;
    }

    /**
     * Update the user
     *
     * @param id
     * @param dto
     */
    async update(id: string, dto: UpdateDto) {
        const user = await this.getUserById(id);
        const {name, surname, email, age} = user.Item;

        const updatedUser: User = new User(
            id,
            dto.name || name,
            dto.surname || surname,
            dto.email || email,
            dto.age || age
        );

        await putUser(updatedUser);

        return updatedUser;
    }

    /**
     * Delete the user
     *
     * @param id
     */
    async delete(id: string) {
        return await deleteUser(id);
    }
}
