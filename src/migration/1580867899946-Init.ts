import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1580867899946 implements MigrationInterface {
    name = 'Init1580867899946'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "post" ("post_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_4d093caee4d33b2745c7d05a41d" PRIMARY KEY ("post_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "page" ("page_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "post_id" uuid NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_ffdbca57153b281b3e05249f560" PRIMARY KEY ("page_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_e4f34451bf637a57ba8ed28236e" FOREIGN KEY ("post_id") REFERENCES "post"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_e4f34451bf637a57ba8ed28236e"`, undefined);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`, undefined);
        await queryRunner.query(`DROP TABLE "page"`, undefined);
        await queryRunner.query(`DROP TABLE "post"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
