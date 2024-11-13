export default async function Home() {
  const req = await fetch(`${process.env.DATABASE_URL}`);
  const data = await req.json();
  return (
    <div>
      <div>{data}</div>
    </div>
  );
}
