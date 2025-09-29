export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">EduAI Hub</h1>
        <p className="text-xl mb-8">Plataforma educativa con IA</p>
        <div className="space-x-4">
          <a href="/auth/login" className="px-6 py-3 bg-blue-600 text-white rounded">
            Login
          </a>
          <a href="/auth/register" className="px-6 py-3 bg-green-600 text-white rounded">
            Registro
          </a>
        </div>
      </div>
    </main>
  )
}