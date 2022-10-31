export default async function getHeaderLinks({ ctx }) {
  const links = await ctx.driver.kvStorage.getValue(ctx, "Links");

  return {
    links: links.value,
  };
}
