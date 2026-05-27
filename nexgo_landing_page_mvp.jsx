export default function NexGoLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm mb-6 bg-white/10 backdrop-blur-sm">
              Segurança • Pagamento Protegido • Atendimento Presencial
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Solyx
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 leading-snug">
              A plataforma inteligente para contratação segura de serviços presenciais.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Conectamos clientes e profissionais com identidade verificada, pagamento seguro e acompanhamento em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
                Entrar na Lista de Espera
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Quero ser Profissional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contrate serviços presenciais com mais segurança, previsibilidade e confiança.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Escolha o serviço</h3>
              <p className="text-gray-600">
                Encontre profissionais próximos em diversas categorias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Pagamento protegido</h3>
              <p className="text-gray-600">
                O valor fica seguro até a conclusão do atendimento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Acompanhe a chegada</h3>
              <p className="text-gray-600">
                Veja o deslocamento do profissional em tempo real.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Atendimento seguro</h3>
              <p className="text-gray-600">
                Identidade validada, reputação real e suporte da plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Mais do que um marketplace.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O Solyx foi criado para trazer confiança e previsibilidade para serviços presenciais.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-semibold text-lg">Identidade verificada</h4>
                  <p className="text-gray-600">Clientes e profissionais autenticados.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">💳</div>
                <div>
                  <h4 className="font-semibold text-lg">Pagamento seguro</h4>
                  <p className="text-gray-600">Proteção contra golpes e calotes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-lg">Monitoramento em tempo real</h4>
                  <p className="text-gray-600">Acompanhamento da chegada e atendimento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">⭐</div>
                <div>
                  <h4 className="font-semibold text-lg">Reputação confiável</h4>
                  <p className="text-gray-600">Avaliações reais para mais confiança.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-[32px] p-10 text-white shadow-2xl">
            <div className="bg-white/10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-slate-300">Profissional verificado</p>
                  <h4 className="font-semibold text-xl">Marina Spa</h4>
                </div>
                <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium">
                  Online
                </div>
              </div>

              <div className="space-y-3 text-slate-200">
                <div className="flex justify-between">
                  <span>Chegada estimada</span>
                  <span>12 min</span>
                </div>

                <div className="flex justify-between">
                  <span>Avaliação</span>
                  <span>⭐ 4.9</span>
                </div>

                <div className="flex justify-between">
                  <span>Pagamento</span>
                  <span>Protegido</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-transform">
              Solicitar Atendimento
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Categorias disponíveis</h2>
            <p className="text-lg text-gray-600">
              O Solyx conecta profissionais e clientes em diferentes serviços presenciais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Massagem & Bem-estar",
              "Estética Delivery",
              "Eletricista",
              "Encanador",
              "Barbeiro Delivery",
              "Cuidador",
              "Personal Trainer",
              "Companhia para Eventos"
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Segurança, confiança e previsibilidade.
          </h2>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            O Solyx está criando uma nova forma de conectar clientes e profissionais presenciais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform">
              Quero acesso antecipado
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors">
              Quero trabalhar no Solyx
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
