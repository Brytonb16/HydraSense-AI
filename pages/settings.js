
export default function Settings() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Settings</h1>
      <label>
        Language:
        <select>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </label><br /><br />
      <label>
        Name: <input type="text" placeholder="John Doe" />
      </label><br />
      <label>
        Email: <input type="email" placeholder="john@example.com" />
      </label><br /><br />
      <button>Save</button>
    </div>
  );
}
