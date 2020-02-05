import { ArgsType, Field, ID, InputType } from "type-graphql";
import { User } from "./entity";
import { BaseFilterArgs } from "../Base/args";

/**
 * Arg fields needed to identify ONE instance of User
 */
@ArgsType()
export class UserArgs implements Partial<User> {

    @Field(() => ID)
    public user_id: string;
}

/**
 * Unnecessary (nullable) arg fields to filter users as you want
 */
@ArgsType()
export class UserFilterArgs extends BaseFilterArgs implements Partial<User> {
    @Field(() => ID, { nullable: true })
    public user_id?: string;

    @Field({ nullable: true })
    public firstName: string;

    @Field({ nullable: true })
    public lastName: string;
}

@InputType()
export class CreateUserInput implements Partial<User> {
    @Field()
    public firstName: string;

    @Field()
    public lastName: string;

    @Field()
    public password: string;
}

@InputType()
export class UpdateUserInput implements Partial<User> {
    @Field()
    public user_id: string

    @Field({nullable: true})
    public firstName: string;

    @Field({nullable: true})
    public lastName: string;

    @Field({nullable: true})
    public password: string;
}