export default async function page({ params }: { params: { dayid: string } }) {
  const { dayid } = await Promise.resolve(params);
  return (
    <>
      <p>We are on the day {dayid}</p>
    </>
  );
}
