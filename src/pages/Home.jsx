export default function Home() {
    return (
        <main style={{ padding: '1rem' }}>
            <h2>Home Page</h2>
            <p>Welcome to the home page using React.lazy and Suspense!</p>
            <button onClick={async () => {
                const math = await import('../utils/math');
                alert("2 + 3 = " + math.add(2, 3));
            }}>
                Add 2 + 3 (Dynamically)
            </button>
        </main>

    );
}
