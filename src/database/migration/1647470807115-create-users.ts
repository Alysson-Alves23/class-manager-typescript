import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUsers1647470807115 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       return  queryRunner.createTable(new Table({
            name: 'Users',
            columns:[{
                name:"id",
                type:"int",
                isGenerated:true,
                isPrimary: true,
                isNullable: false

            },{
                name:"name",
                type:"varchar",
                isNullable: false,

            },{
                name:"email",
                type:"varchar",
                isUnique: true,
                isNullable: false
            },{
                name:"password",
                type:"varchar",
                isNullable: false,

            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('Users');
    }

}
