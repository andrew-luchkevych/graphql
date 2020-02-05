import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "../User/entity";
import { Page } from "../Page/entity";

@ObjectType()
@Entity()
export class Post {

    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    public post_id: string;

    @Field(() => ID)
    @Column("uuid")
    public user_id: string;

    @Field()
    @Column()
    public title: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: "user_id", referencedColumnName: "user_id" })
    public author: Promise<User>;

    @Field(() => [Page], { nullable: true })
    @OneToMany(() => Page, (page) => page.post)
    @JoinColumn({ name: "post_id", referencedColumnName: "post_id" })
    public pages: Promise<Page[]>;
}
