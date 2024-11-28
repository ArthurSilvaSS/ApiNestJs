import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')

export class HeroController {
    constructor(private readonly heroService: HeroService) { }

    @Post()
    async create(@Body() data: HeroDto) {
        return this.heroService.create(data);
    }

    @Get()
    async findAll() {
        return this.heroService.findAll();
    }

}
