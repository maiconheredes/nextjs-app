export default async function MealsSlugPage({ params }: { params: string[] }) {
  const test = await params;

  return (
    <>
      <h1>Meals Slug Page</h1>
      {JSON.stringify(test)}
    </>
  );
};
