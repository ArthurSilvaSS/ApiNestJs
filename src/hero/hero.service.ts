import { Injectable } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HeroService {

    constructor(private prinsma: PrismaService) { }

    async create(data: HeroDto) {
        const hero = await this.prinsma.hero.create({
            data
        });
        return hero;
    }

    async findAll() {
        return await this.prinsma.hero.findMany()
    }
}
