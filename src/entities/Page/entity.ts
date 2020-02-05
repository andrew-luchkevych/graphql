import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Post } from "../Post/entity";

@ObjectType()
@Entity()
export class Page {

    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    public page_id: string;

    @Field(() => ID)
    @Column("uuid")
    public post_id: string;

    @Field()
    @Column()
    public content: string;

    @Field(() => Post)
    @ManyToOne(() => Post, (post) => post.pages)
    @JoinColumn({ name: "post_id", referencedColumnName: "post_id" })
    public post: Promise<Post>;
}
