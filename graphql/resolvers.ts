export const resolvers = {
    Query: {
        clientes: async (parent, args, ctx) => {
            const results = await ctx.prisma.cliente.findMany();
            return results;
        }
    }
}