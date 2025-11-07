import { useState, useEffect } from 'react';
import {
  CheckCircle,
  Search,
  Clock,
  TrendingDown,
  Zap,
  BarChart3,
  FileText,
  Shield,
  Lock,
  FileCheck,
  Users,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Zap, title: '営業自身で契約作成', description: '営業が現場で即座に契約を作成。今決めたいお客様を逃しません。' },
    { icon: Users, title: '承認フローでリスク管理', description: '契約は承認を経て締結。営業の自由度とリスク管理を両立。' },
    { icon: FileText, title: 'リフォーム業界に特化', description: '請負契約書に特化。重要事項説明など業界特有の要件にも対応。' },
    { icon: Clock, title: '時間を大幅短縮', description: '郵送や印刷の時間を削減。最短即日で契約締結が可能になります。' },
    { icon: CheckCircle, title: '紛失リスクゼロ', description: 'クラウド管理で契約書を確実に保管。紛失の心配はもうありません。' },
    { icon: Search, title: '即座に検索', description: '必要な契約書を数秒で検索・閲覧。膨大な書類から探す手間を削減。' },
    { icon: TrendingDown, title: 'コスト削減', description: '印刷費・郵送費・保管費用を削減。年間数十万円のコスト削減を実現。' },
    { icon: BarChart3, title: 'データ分析', description: '契約データを一元管理し、経営判断に活用できます。' }
  ];

  const comparison = [
    { item: '紛失リスク', paper: '高い', electronic: 'なし' },
    { item: '検索性', paper: '困難', electronic: '即座' },
    { item: '契約締結までの時間', paper: '数日～数週間', electronic: '最短即日' },
    { item: '郵送費用', paper: '発生', electronic: 'なし' },
    { item: '印刷費用', paper: '発生', electronic: 'なし' },
    { item: '保管スペース', paper: '必要', electronic: '不要' },
    { item: '遠方対応', paper: '困難', electronic: '容易' },
    { item: '差し戻し', paper: '再郵送必要', electronic: '即座に修正' },
    { item: 'データ分析', paper: '困難', electronic: '容易' },
    { item: '複数人での共有', paper: '困難', electronic: '即座' },
    { item: '災害リスク', paper: '高い', electronic: '低い' },
    { item: '環境への影響', paper: 'あり', electronic: 'なし' }
  ];

  const faqs = [
    {
      question: '電子契約は法的に有効ですか?',
      answer: 'はい、電子署名法に基づき、電子契約は紙の契約書と同等の法的効力を持ちます。当サービスは法令に完全準拠しています。'
    },
    {
      question: '導入までどのくらいかかりますか?',
      answer: '最短1週間で導入可能です。専任スタッフがサポートしますので、スムーズに移行できます。'
    },
    {
      question: 'セキュリティは大丈夫ですか?',
      answer: '金融機関レベルの暗号化技術を採用。定期的なセキュリティ監査も実施しており、安全性は保証されています。'
    },
    {
      question: '既存の契約書フォーマットは使えますか?',
      answer: 'はい、既存のフォーマットをそのまま電子化できます。カスタマイズも柔軟に対応可能です。'
    },
    {
      question: 'サポート体制はどうなっていますか?',
      answer: '平日9:00-18:00で専任スタッフがサポート。メール・電話・チャットで迅速に対応します。'
    },
    {
      question: '料金体系を教えてください',
      answer: '月額制で、契約件数に応じた柔軟なプランをご用意。詳細はオンライン相談でご説明いたします。'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileCheck className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Reform Contract</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition">機能</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition">メリット</a>
            <a href="#comparison" className="text-gray-700 hover:text-orange-600 transition">比較</a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 transition">FAQ</a>
            <a
              href="#cta"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition shadow-md hover:shadow-lg"
            >
              無料相談予約
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>機能</a>
              <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>メリット</a>
              <a href="#comparison" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>比較</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a
                href="#cta"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                無料相談予約
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center observe opacity-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-orange-600">今決めたいお客様を、逃さない。</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              リフォーム業界専門の電子契約システムを開発中です。<br />
              営業が現場で即座に契約を作成できる一方、承認フローでリスクもしっかり管理。<br />
              導入をご検討いただくお客様の声を聞きながら、お困りごとを解消するシステムとして構築を進めております。
            </p>
            <a
              href="#cta"
              className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              無料オンライン相談を予約する
            </a>
            <p className="mt-4 text-sm text-gray-500">所要時間：30分 / 完全無料 / オンライン対応</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              こんな課題を抱えていませんか?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '今決めたいお客様を逃してしまう（契約締結までに時間がかかりすぎる）',
                '契約書の保管場所が足りない',
                '過去の契約書を探すのに時間がかかる',
                '郵送費用・印刷費用がかさむ',
                '遠方の顧客との契約が大変',
                '契約書の紛失リスクが心配'
              ].map((issue, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
                  <p className="text-gray-700 flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    {issue}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-lg text-gray-700 font-medium">
              これらの課題、すべて電子契約で解決できます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              リフォーム業界に特化した電子契約システム
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Reform Contractは、リフォーム請負契約の業務フローを徹底的に分析し、<br />
              リフォーム業界の請負契約書に特化した専門システムとして開発を進めています。<br />
              重要事項説明など、リフォーム業界特有の要件にも完全対応。<br />
              導入をご検討いただくお客様のお困りごとをお聞かせいただき、<br />
              より実用的なシステムとして育てていく所存です。
            </p>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">即日</div>
                  <p className="text-gray-700">営業現場で<br />即座に契約締結</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">承認</div>
                  <p className="text-gray-700">承認フローで<br />リスク管理</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">特化</div>
                  <p className="text-gray-700">リフォーム業界<br />完全対応</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              導入メリット
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              紙の契約書 vs 電子契約
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left text-gray-700 font-semibold border-b-2 border-gray-200">項目</th>
                    <th className="p-4 text-center text-gray-700 font-semibold border-b-2 border-gray-200">紙の契約書</th>
                    <th className="p-4 text-center text-orange-600 font-semibold border-b-2 border-orange-200 bg-orange-50">電子契約</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="p-4 text-gray-900 font-medium">{row.item}</td>
                      <td className="p-4 text-center text-gray-600">{row.paper}</td>
                      <td className="p-4 text-center text-orange-600 font-semibold bg-orange-50">{row.electronic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              充実のシステム機能
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: '営業自身で契約作成',
                  description: '営業が現場で即座に契約を作成可能。今決めたいお客様を逃しません。',
                  icon: Zap
                },
                {
                  title: '承認フロー管理',
                  description: '契約は承認を経て締結。営業の自由度を保ちながら、リスクもしっかり管理。',
                  icon: Users
                },
                {
                  title: 'リフォーム業界特化',
                  description: '請負契約書に特化。重要事項説明など、リフォーム業界特有の要件にも完全対応。',
                  icon: FileText
                },
                {
                  title: 'テンプレート管理',
                  description: 'よく使う契約書をテンプレート化。入力項目を自動化し、作成時間を大幅短縮。',
                  icon: FileCheck
                },
                {
                  title: '電子署名・押印',
                  description: '法的効力のある電子署名を簡単に付与。スマホからでも署名可能。',
                  icon: Shield
                },
                {
                  title: 'クラウド保管・検索',
                  description: '契約書を安全にクラウド保管。顧客名、日付など様々な条件で瞬時に検索可能。',
                  icon: Search
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                    <Icon className="w-12 h-12 text-orange-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              セキュリティ・信頼性
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">最高水準の暗号化</h3>
                <p className="text-gray-600">
                  金融機関と同等の256bit SSL暗号化通信を採用。データは常に安全に保護されます。
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">定期的なセキュリティ監査</h3>
                <p className="text-gray-600">
                  第三者機関による定期的なセキュリティ監査を実施。脆弱性を徹底排除します。
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">法令完全準拠</h3>
                <p className="text-gray-600">
                  電子署名法、電子帳簿保存法に完全準拠。法的効力は紙の契約書と同等です。
                </p>
              </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="flex items-center justify-center flex-wrap gap-8 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">サーバー稼働率</p>
                  <p className="text-3xl font-bold text-orange-600">99.9%</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-orange-300"></div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">データバックアップ</p>
                  <p className="text-3xl font-bold text-orange-600">毎日</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-orange-300"></div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">セキュリティ事故</p>
                  <p className="text-3xl font-bold text-orange-600">0件</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                        activeQuestion === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeQuestion === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center observe opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは無料オンライン相談から
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              システム開発中につき、導入をご検討いただくお客様のお困りごとをお聞かせください。<br />
              いただいたご意見を反映しながら、より良いシステムとして構築を進めております。
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">📅</div>
                  <p className="font-semibold mb-1">所要時間</p>
                  <p className="text-sm opacity-90">約30分</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💻</div>
                  <p className="font-semibold mb-1">形式</p>
                  <p className="text-sm opacity-90">オンライン対応</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💰</div>
                  <p className="font-semibold mb-1">料金</p>
                  <p className="text-sm opacity-90">完全無料</p>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-white text-orange-600 px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              今すぐ無料相談を予約する
            </a>
            <p className="mt-6 text-sm opacity-90">
              ※ しつこい営業は一切いたしません。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileCheck className="w-6 h-6 text-orange-600" />
                <span className="text-lg font-bold text-white">Reform Contract</span>
              </div>
              <p className="text-sm leading-relaxed">
                リフォーム業界に特化した<br />
                電子契約システム
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-orange-400 transition">機能一覧</a></li>
                <li><a href="#benefits" className="hover:text-orange-400 transition">メリット</a></li>
                <li><a href="#comparison" className="hover:text-orange-400 transition">比較表</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-orange-400 transition">よくある質問</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">導入事例</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">資料ダウンロード</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition">運営会社</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">利用規約</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">特定商取引法表記</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Reform Contract. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
