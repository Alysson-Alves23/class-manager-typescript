import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClasses1647647588654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name:"classes",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isGenerated:true,
                    isPrimary: true,
                    isNullable: false
    
                
            },
                {
                    name:"title",
                    type:"varchar",
                    width:32,
                    isNullable: false

                },{

            name: "description",
            type:"varchar",
            width: 255
        },{
            name: "url",
            type:"varchar",
            width: 255,
            isNullable:false

        },{
            name: "created_at",
            type:"timestamp",
            default: Date.now()
        },{
            name: "updated_at",
            type:"timestamp",
            default: Date.now()
        }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable('classes')
    }

}
