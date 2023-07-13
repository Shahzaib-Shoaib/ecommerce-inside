import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '@/server/api/trpc';
import { GetStartedFormSchema } from '@/utils/validations/GetStartedFormSchema';

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),


  sendMail: publicProcedure.input(z.object({ name: z.string(),
  phone: z.string(),
  email: z.string(),
  services: z.string(), }))
    .query(({ input }) => {
      console.log(input)
      return true;
    }),
});
