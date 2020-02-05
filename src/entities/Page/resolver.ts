import { Resolver } from "type-graphql";
import { Page } from "./entity";
import { createBaseResolver } from "../Base/resolver";
import { PageArgs, PageFilterArgs } from "./args";

const BasePageResolver = createBaseResolver("Page", "Pages", Page, PageArgs, PageFilterArgs);

@Resolver(Page)
export class PageResolver extends BasePageResolver {
}
