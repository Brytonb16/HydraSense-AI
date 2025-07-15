
import Link from 'next/link';

export default function Dashboard() {
  const zones = [
    { id: 1, name: 'Zone 1', status: 'green', moisture: 'Optimal', rec: 'Irrigate 0.8"' },
    { id: 2, name: 'Zone 2', status: 'yellow', moisture: 'Low', rec: 'Irrigate 1.2"' },
    { id: 3, name: 'Zone 3', status: 'red', moisture: 'Critical', rec: 'Irrigate 1.5"' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Farm Dashboard</h1>
      <div style={{ margin: '20px 0', fontWeight: 'bold' }}>Water Savings: 27% This Season</div>
      {zones.map(zone => (
        <div key={zone.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{zone.name}</h2>
          <p>Soil Moisture: {zone.moisture}</p>
          <p>AI Recommendation: {zone.rec}</p>
        </div>
      ))}
      <Link href="/settings"><button>Settings</button></Link>
    </div>
  );
}
