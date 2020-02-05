import { ArgsType, Field, ID } from "type-graphql";
import { Post } from "./entity";
import { BaseFilterArgs } from "../Base/args";

/**
 * Arg fields needed to identify ONE instance of Post
 */
@ArgsType()
export class PostArgs implements Partial<Post> {

    @Field(() => ID)
    public post_id: string;
}

/**
 * Unnecessary (nullable) arg fields to filter posts as you want
 */
@ArgsType()
export class PostFilterArgs extends BaseFilterArgs implements Partial<Post> {

    @Field(() => ID, { nullable: true })
    public post_id?: string;

    @Field({ nullable: true })
    public title: string;
}
