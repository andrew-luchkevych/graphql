import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, PrimaryColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Post } from "../Post/entity";

@ObjectType()
@Entity()
export class User {

    @Field(() => ID)
    @PrimaryColumn("uuid", {generated: "uuid"})
    public user_id: string;

    @Column()
    public password: string;


    @Field()
    @Column()
    public firstName: string;

    @Field()
    @Column()
    public lastName: string;

    @Field(() => [Post], { nullable: true })
    @OneToMany(() => Post, (post) => post.author)
    @JoinColumn({ name: "user_id", referencedColumnName: "user_id" })
    public posts: Promise<Post[]>;
}

export default User;
