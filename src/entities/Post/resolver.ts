import { Resolver } from "type-graphql";
import { Post } from "./entity";
import { createBaseResolver } from "../Base/resolver";
import { PostArgs, PostFilterArgs } from "./args";

const BasePostResolver = createBaseResolver("Post", "Posts", Post, PostArgs, PostFilterArgs);

@Resolver(Post)
export class PostResolver extends BasePostResolver {
}
