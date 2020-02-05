import { Resolver, Query, Arg, Ctx, Info, ArgsType, Field, Args, ClassType, Mutation } from "type-graphql";
import { BaseEntity, ObjectType } from "typeorm";
import { GraphQLResolveInfo } from "graphql";

import { Context } from "../../Context";
import { GraphQLQueryTree } from "../../utils/GraphQLQueryTree";
import { DynamicRepository } from "../../utils/DynamicRepository";

export function createBaseResolver<T extends BaseEntity, X extends ClassType, Z extends ClassType>(
    suffix: string,
    pluralSuffix: string,
    entityClass: ObjectType<T>,
    entityArgsType: X,
    entityFilterArgsType: Z,
) {

    @Resolver({ isAbstract: true })
    abstract class BaseResolver {

        /**
         * QUERIES
         */

        @Query(() => entityClass, { name: `get${suffix}`, nullable: true })
        protected async get(
            @Ctx() { conn }: Context,
            @Args(() => entityArgsType) {}: typeof entityArgsType,
            @Info() info: GraphQLResolveInfo,
        ): Promise<T> {
            const tree = GraphQLQueryTree.createTree(info);
            console.log(tree.toObject());

            return await DynamicRepository.findOne<T>(conn, tree, entityClass);
        }

        @Query(() => [entityClass], { name: `list${pluralSuffix}`, nullable: true })
        protected async list(
            @Ctx() { conn }: Context,
            @Args(() => entityFilterArgsType) {}: typeof entityFilterArgsType,
            @Info() info: GraphQLResolveInfo,
        ): Promise<T[]> {
            const tree = GraphQLQueryTree.createTree(info);
            console.log(tree.toObject());
            return await DynamicRepository.find<T>(conn, tree, entityClass);
        }
    }

    return BaseResolver;
}
