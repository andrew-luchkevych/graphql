import { ArgsType, Field, ID } from "type-graphql";
import { Page } from "./entity";
import { BaseFilterArgs } from "../Base/args";

/**
 * Arg fields needed to identify ONE instance of Page
 */
@ArgsType()
export class PageArgs implements Partial<Page> {

    @Field(() => ID)
    public page_id: string;
}

/**
 * Unnecessary (nullable) arg fields to filter pages as you want
 */
@ArgsType()
export class PageFilterArgs extends BaseFilterArgs implements Partial<Page> {

    @Field(() => ID, { nullable: true })
    public page_id?: string;

    @Field({ nullable: true })
    public content: string;
}
