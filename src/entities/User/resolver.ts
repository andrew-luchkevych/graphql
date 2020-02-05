import { Resolver, Mutation, Arg } from "type-graphql";
import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "./entity";
import { createBaseResolver } from "../Base/resolver";
import { UserArgs, UserFilterArgs, CreateUserInput, UpdateUserInput } from "./args";

const BaseUserResolver = createBaseResolver("User", "Users", User, UserArgs, UserFilterArgs);

@Resolver(User)
export class UserResolver extends BaseUserResolver {
    @Mutation(() => User)
    public async createUser(
        @Arg("data")
        data: CreateUserInput
    ) {
        const m = getManager();
        const user = new User();
        data.password = bcrypt.hashSync(data.password, 10);
        m.merge(User, user, data);
        await m.save(user);
        return user;
    }

    @Mutation(() => User)
    public updateUser(
        @Arg("data")
        data: UpdateUserInput
    ): Promise<User> {
        const m = getManager();
        return m.findOneOrFail(User, data.user_id)
            .then(user => {
                if(data.password) {
                    data.password = bcrypt.hashSync(data.password, 10);
                }
                m.merge(User, user, data);
                return m.save(user);
            })
    }
}
