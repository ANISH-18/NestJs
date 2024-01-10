import { MigrationInterface, QueryRunner } from "typeorm";

export class Updated1704864457843 implements MigrationInterface {
    name = 'Updated1704864457843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "name" TO "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "user_id" TO "name"`);
    }

}
