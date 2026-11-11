import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
       1. GET /users
       2. GET /users/:id
       3. GET /users/interns
       4. PATCH
       5. DELETE
    */

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return {id}
    }

    @Post()
    create(@Body() user:{}){
        return user
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() userUpdate: {}){
        return {id, ...userUpdate}
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return {id}
    }

}
