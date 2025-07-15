
import Link from 'next/link';

export default function Farms() {
  const farms = [
    { id: 1, name: 'Tulare Almond Grove' },
    { id: 2, name: 'Central Valley Citrus' }
  ];
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Select a Farm</h1>
      {farms.map(farm => (
        <div key={farm.id} style={{ margin: '20px' }}>
          <Link href={`/dashboard?farmId=${farm.id}`}><button>{farm.name}</button></Link>
        </div>
      ))}
    </div>
  );
}
