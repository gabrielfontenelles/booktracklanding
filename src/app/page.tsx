import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, BarChart3, Star, CheckCircle, Quote, Target, Download } from "lucide-react"

export default function BookTrackLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">BookTrack</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="hover:text-purple-200 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#screenshots" className="hover:text-purple-200 transition-colors">
              Screenshots
            </Link>
            <Link href="#download" className="hover:text-purple-200 transition-colors">
              Download
            </Link>
          </nav>
          <Button variant="secondary" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300" asChild>
            <a href="/downloads/booktrack.apk" download="BookTrack.apk">
              Baixar APK
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-100">
            📚 Organize sua biblioteca pessoal
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Transforme sua
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">
              {" "}
              experiência{" "}
            </span>
            de leitura
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            O BookTrack é o app definitivo para leitores que querem organizar, acompanhar e analisar seus hábitos de
            leitura. Registre livros, salve trechos importantes e visualize estatísticas detalhadas do seu progresso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-8 py-4"
              asChild
            >
              <a href="/downloads/booktrack.apk" download="BookTrack.apk">
                <Download className="mr-2 h-5 w-5" />
                Baixar APK (Android)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para organizar suas leituras
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades pensadas especialmente para leitores que querem mais controle e insights sobre seus
              hábitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Registro Completo</h3>
                <p className="text-gray-600">
                  Adicione livros com título, autor, gênero, número de páginas e formato (físico ou digital)
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-0">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Controle de Progresso</h3>
                <p className="text-gray-600">
                  Acompanhe quantas páginas você leu e visualize seu progresso em tempo real
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-0">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trechos Importantes</h3>
                <p className="text-gray-600">
                  Salve citações e passagens marcantes dos seus livros para consultar depois
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Estatísticas Detalhadas</h3>
                <p className="text-gray-600">
                  Visualize gráficos com seus gêneros favoritos, autores mais lidos e muito mais
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-0">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Status Personalizados</h3>
                <p className="text-gray-600">
                  Organize seus livros por status: lendo, concluído, desistido, para ler e não iniciado
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sistema de Favoritos</h3>
                <p className="text-gray-600">
                  Marque seus livros favoritos e tenha acesso rápido aos títulos que mais gostou
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Veja o BookTrack em ação</h2>
            <p className="text-xl text-gray-600">
              Interface intuitiva e design pensado para uma experiência de uso excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto max-w-xs">
                <Image
                  src="/images/favoritos.jpg"
                  alt="Lista de livros"
                  width={300}
                  height={600}
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Biblioteca Organizada</h3>
              <p className="text-gray-600">Visualize todos os seus livros com progresso e informações detalhadas</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto max-w-xs">
                <Image
                  src="/images/estatisticas.jpg"
                  alt="Estatísticas"
                  width={300}
                  height={600}
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Análises Completas</h3>
              <p className="text-gray-600">Gráficos e métricas para entender seus hábitos de leitura</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto max-w-xs">
                <Image
                  src="/images/adicionar livro.jpg"
                  alt="Adicionar livro"
                  width={300}
                  height={600}
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cadastro Simples</h3>
              <p className="text-gray-600">Adicione novos livros rapidamente com todas as informações necessárias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como instalar o BookTrack</h2>
            <p className="text-lg text-gray-600">Siga estes passos simples para instalar o app no seu Android</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-0 bg-white shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Baixe o APK</h3>
              <p className="text-gray-600">
                Clique no botão de download e salve o arquivo BookTrack.apk no seu celular
              </p>
            </Card>

            <Card className="p-6 text-center border-0 bg-white shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Permitir Instalação</h3>
              <p className="text-gray-600">Vá em Configurações → Segurança → Permitir fontes desconhecidas</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-white shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalar e Usar</h3>
              <p className="text-gray-600">Toque no arquivo APK baixado e siga as instruções para instalar</p>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Segurança Garantida</h4>
                <p className="text-blue-800 text-sm">
                  O BookTrack é um app seguro e livre de vírus. Caso seu antivírus emita algum aviso, pode prosseguir
                  com a instalação normalmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pronto para organizar sua biblioteca?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Baixe o BookTrack gratuitamente e comece a transformar sua experiência de leitura hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-8 py-4"
              asChild
            >
              <a href="/downloads/booktrack.apk" download="BookTrack.apk">
                <Download className="mr-2 h-5 w-5" />
                Download APK para Android
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-500">Disponível gratuitamente • Sem anúncios • Dados seguros</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-bold">BookTrack</span>
              </div>
              <p className="text-gray-400">O app definitivo para leitores organizados.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#screenshots" className="hover:text-white transition-colors">
                    Screenshots
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="mailto:developerfontes@gmail.com" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:developerfontes@gmail.com?subject=Reportar Bug - BookTrack"
                    className="hover:text-white transition-colors"
                  >
                    Reportar Bug
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BookTrack. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
