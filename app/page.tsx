import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  Zap,
  Globe,
  FileText,
  Sparkles,
  Heart,
  Shield,
  Keyboard,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Globe,
      title: '翻訳',
      description: '日本語⇔英語など、瞬時に翻訳',
    },
    {
      icon: FileText,
      title: '校閲',
      description: '誤字脱字や文法をチェック',
    },
    {
      icon: Sparkles,
      title: '要約',
      description: '長い文章を簡潔にまとめる',
    },
    {
      icon: Zap,
      title: '独創的にする',
      description: 'ありきたりな表現を魅力的に',
    },
    {
      icon: Heart,
      title: '優しくする',
      description: 'きつい表現をやわらかく',
    },
    {
      icon: Shield,
      title: '礼儀正しくする',
      description: 'ビジネスシーンに適した表現に',
    },
  ];

  const steps = [
    {
      step: '1',
      title: '文章をコピー',
      description: '改善したい文章を選択してCommand + C',
      shortcut: '⌘ + C',
    },
    {
      step: '2',
      title: 'Aiboooを起動',
      description: 'どこからでもCommand + Dで瞬時に起動',
      shortcut: '⌘ + D',
    },
    {
      step: '3',
      title: '改善タスクを選択',
      description: '翻訳、校閲、要約など、やりたいことを選ぶだけ',
      shortcut: 'クリック',
    },
  ];

  return (
    <div className="min-h-screen bg-[#333333] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#29e3a9] to-[#BFF728] rounded-lg flex items-center justify-center">
              <span className="text-[#333333] font-bold text-sm">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#29e3a9] to-[#BFF728] bg-clip-text text-transparent">
              Aibooo
            </span>
            <Badge
              variant="secondary"
              className="ml-2 bg-gray-700 text-gray-300 border-gray-600"
            >
              Beta
            </Badge>
          </div>
          <Button
            size="xl"
            className="bg-gradient-to-r from-[#29e3a9] to-[#BFF728] hover:from-[#22c794] hover:to-[#a8d623] text-[#333333] font-semibold"
          >
            <Download />
            ベータ版をダウンロード
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="leading-relaxed text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#29e3a9] to-[#BFF728] bg-clip-text text-transparent">
            文章改善が
            <br />
            こんなに簡単だったなんて
          </h1>

          {/* Command + C → Command + D を強調 */}
          <div className="mb-8 p-8 bg-gradient-to-r from-[#29e3a9]/10 to-[#BFF728]/10 rounded-2xl border border-[#29e3a9]/30 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg border-2 border-[#29e3a9]/50">
                <span className="font-mono text-2xl font-bold text-[#29e3a9]">
                  ⌘ + C
                </span>
              </div>
              <ArrowRight className="w-8 h-8 text-[#BFF728]" />
              <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg border-2 border-[#29e3a9]/50">
                <span className="font-mono text-2xl font-bold text-[#29e3a9]">
                  ⌘ + D
                </span>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-200">
              たった2つのショートカットで、あらゆる文章タスクが瞬時に完了
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            翻訳・校閲・要約など、プロンプトを考える必要なし
          </p>

          {/* 縦並びのCTAセクション */}
          <div className="flex flex-col items-center space-y-4 mb-12">
            <Button
              size="xl"
              className="bg-gradient-to-r from-[#29e3a9] to-[#BFF728] hover:from-[#22c794] hover:to-[#a8d623] text-[#333333] font-semibold text-lg px-8 py-4 w-full max-w-sm"
            >
              <Download />
              無料でベータ版を試す
            </Button>
            <p className="text-sm text-gray-400 max-w-md">
              誰でも簡単に使えます。複雑な設定やプロンプト作成は一切不要です。
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            こんな経験、ありませんか？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-500/30 bg-red-900/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-red-400 mb-4 text-2xl">😰</div>
                <h3 className="font-semibold mb-2 text-white">
                  プロンプトが思いつかない
                </h3>
                <p className="text-sm text-gray-300">
                  ChatGPTは便利だけど、何を入力すればいいかわからない
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-500/30 bg-orange-900/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-orange-400 mb-4 text-2xl">⏰</div>
                <h3 className="font-semibold mb-2 text-white">
                  時間がかかりすぎる
                </h3>
                <p className="text-sm text-gray-300">
                  ブラウザを開いて、ログインして、プロンプトを考えて...
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-500/30 bg-yellow-900/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-yellow-400 mb-4 text-2xl">🔄</div>
                <h3 className="font-semibold mb-2 text-white">
                  作業が中断される
                </h3>
                <p className="text-sm text-gray-300">
                  文章作成の流れが止まって、集中力が途切れてしまう
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-800/50 rounded-3xl mx-4 shadow-2xl backdrop-blur-sm border border-gray-700">
          <div className="max-w-4xl mx-auto text-center p-16">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Aiboooなら、すべて解決
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#29e3a9] to-[#BFF728] rounded-full flex items-center justify-center text-[#333333] font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4">
                      {step.description}
                    </p>
                    <Badge
                      variant="outline"
                      className="font-mono border-[#29e3a9]/50 text-[#29e3a9]"
                    >
                      {step.shortcut}
                    </Badge>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-[#BFF728]/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            豊富な文章改善機能
          </h2>
          <p className="text-center text-gray-300 mb-12">
            プロンプトを考える必要なし。やりたいことを選ぶだけで、AIが最適な改善を行います
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-[#29e3a9]/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#29e3a9] to-[#BFF728] rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#333333]" />
                    </div>
                    <CardTitle className="text-lg text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Badge
              variant="secondary"
              className="text-sm bg-gray-700 text-gray-300 border-gray-600"
            >
              さらに多くの機能を開発中...
            </Badge>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            なぜAiboooを選ぶのか
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#29e3a9]/30 bg-gradient-to-br from-[#29e3a9]/10 to-[#29e3a9]/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <Keyboard className="w-12 h-12 text-[#29e3a9] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  バックグラウンド動作
                </h3>
                <p className="text-gray-300">
                  常にバックグラウンドで待機。どんなアプリを使っていても、ショートカット一つで瞬時に呼び出せます。
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#BFF728]/30 bg-gradient-to-br from-[#BFF728]/10 to-[#BFF728]/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-[#BFF728] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  プロンプト不要
                </h3>
                <p className="text-gray-300">
                  複雑なプロンプトを考える必要なし。やりたいことを選ぶだけで、AIが最適な改善を行います。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#29e3a9] to-[#BFF728] rounded-3xl p-12 text-[#333333]">
          <h2 className="text-3xl font-bold mb-4">
            今すぐAiboooを体験してみませんか？
          </h2>
          <p className="text-xl mb-8 opacity-80">
            ベータ版は完全無料。文章作業が劇的に変わります。
          </p>
          <Button
            size="xl"
            variant="secondary"
            className="text-lg px-8 py-3 bg-[#333333] text-white hover:bg-gray-700 border-0"
          >
            <Download />
            無料でダウンロード
          </Button>
          <div className="flex justify-center items-center mt-6 space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              macOS対応
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              無料ベータ版
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              簡単インストール
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-[#29e3a9] to-[#BFF728] rounded-lg flex items-center justify-center">
            <span className="text-[#333333] font-bold text-xs">A</span>
          </div>
          <span className="font-semibold text-white">Aibooo</span>
          <Badge
            variant="secondary"
            className="text-xs bg-gray-700 text-gray-300 border-gray-600"
          >
            Beta
          </Badge>
        </div>
        <p className="text-sm">
          © 2024 Aibooo. All rights reserved. |
          ベータ版につき、機能は予告なく変更される場合があります。
        </p>
      </footer>
    </div>
  );
}
