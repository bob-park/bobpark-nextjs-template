import Counter from './_component/Counter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div>Bob Park Templates</div>

      <div className="mt-10">
        <Counter />
      </div>
    </main>
  );
}
