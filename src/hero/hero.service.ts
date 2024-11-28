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

    async getById(id: number) {

        const heroExist = await this.prinsma.hero.findUnique({
            where: { id },
        });

        if (!heroExist) {
            throw new Error('heroi nao encontrado');
        }
        return heroExist;
    };


    async updata(id: number, data: HeroDto) {

        const heroExist = await this.prinsma.hero.findUnique({
            where: { id },
        });

        if (!heroExist) {
            throw new Error('heroi nao encontrado');
        }

        return await this.prinsma.hero.update({
            where: { id },
            data: {
                ...data,
            },
        });
    }

    async delete(id: number) {
        const heroExist = await this.prinsma.hero.findUnique({
            where: { id },
        });

        if (!heroExist) {
            throw new Error('heroi nao encontrado');
        }

        return await this.prinsma.hero.delete({
            where: { id, }
        });
    }


}
